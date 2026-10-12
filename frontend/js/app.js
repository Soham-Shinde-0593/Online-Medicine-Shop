/**
 * app.js: Homepage Controller & Application Orchestration
 * Maintained by Member 1 (Soham Shinde) - Foundation, Homepage & UI Components
 */
import { 
  fetchMedicines, 
  fetchCategories, 
  fetchTrustFeatures, 
  fetchTestimonials, 
  fetchFaqs,
  fetchMedicineById 
} from './api.js';

import { 
  renderProducts, 
  renderCategories, 
  renderTrustFeatures, 
  renderTestimonials, 
  renderFaqs, 
  renderLoadingSkeleton, 
  showToast, 
  updateCartBadge, 
  openProductQuickView, 
  openPrescriptionUploadModal 
} from './ui.js';

import { cart } from './cart.js';

// Application state
const state = {
  allMedicines: [],
  categories: [],
  activeCategory: 'all',
  searchQuery: '',
};

/**
 * Initialize Homepage
 */
async function initHomepage() {
  // Sync initial cart badge
  updateCartBadge(cart.getCount());

  // Listen to cart state changes
  window.addEventListener('cart:updated', (e) => {
    updateCartBadge(e.detail.count);
  });

  // Setup mobile navigation toggle
  setupMobileNav();

  // Setup Prescription upload modal triggers
  setupPrescriptionTriggers();

  // Show loading skeleton for product catalog
  renderLoadingSkeleton('#product-container', 8);

  try {
    // Parallel data fetching for fast load
    const [trustFeatures, categories, medicines, testimonials, faqs] = await Promise.all([
      fetchTrustFeatures(),
      fetchCategories(),
      fetchMedicines(),
      fetchTestimonials(),
      fetchFaqs()
    ]);

    state.allMedicines = medicines;
    state.categories = categories;

    // Render Trust Features
    renderTrustFeatures(trustFeatures, '#features-container');

    // Render Categories Showcase
    renderCategories(categories, '#categories-container', state.activeCategory);

    // Setup Category click handler
    setupCategoryCardListeners();

    // Setup Filter Pills
    setupFilterPills(categories);

    // Render initial medicines
    renderFilteredProducts();

    // Render Testimonials
    renderTestimonials(testimonials, '#testimonials-container');

    // Render FAQs
    renderFaqs(faqs, '#faq-container');

    // Setup Search bar listeners
    setupSearchListeners();

    // Setup Product card interactions (Add to cart & Quick View)
    setupProductCardInteractions();

  } catch (error) {
    console.error('Error initializing homepage:', error);
    showToast('Failed to load healthcare catalog. Please refresh.', 'error');
  }
}

/**
 * Filter and Render Products according to state
 */
function renderFilteredProducts() {
  let filtered = [...state.allMedicines];

  if (state.activeCategory && state.activeCategory !== 'all') {
    const activeLower = state.activeCategory.toLowerCase();
    filtered = filtered.filter(m => m.category.toLowerCase().includes(activeLower));
  }

  if (state.searchQuery && state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(m => 
      m.name.toLowerCase().includes(q) ||
      m.brand.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q)
    );
  }

  // Update results count indicator
  const countEl = document.getElementById('results-count-number');
  if (countEl) countEl.textContent = filtered.length;

  renderProducts(filtered, '#product-container');

  // Wire up "View All Medicines" button in empty state if present
  const resetBtn = document.getElementById('btn-reset-filters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.activeCategory = 'all';
      state.searchQuery = '';
      
      const searchInputs = document.querySelectorAll('.header-search-input');
      searchInputs.forEach(i => i.value = '');

      // Update pills
      document.querySelectorAll('.filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === 'all');
      });

      renderFilteredProducts();
    });
  }
}

/**
 * Category Card click handlers
 */
function setupCategoryCardListeners() {
  const container = document.getElementById('categories-container');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const card = e.target.closest('.category-card');
    if (!card) return;

    const catName = card.dataset.categoryName;
    if (catName) {
      state.activeCategory = catName;

      // Update pill states
      document.querySelectorAll('.filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category?.toLowerCase() === catName.toLowerCase());
      });

      renderFilteredProducts();

      // Scroll smoothly to medicines section
      const targetSection = document.getElementById('medicines-section');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

/**
 * Dynamic Filter Pills setup
 */
function setupFilterPills(categories) {
  const container = document.getElementById('filter-pills-container');
  if (!container) return;

  const pillsHtml = `
    <button type="button" class="filter-pill active" data-category="all">All Medicines</button>
    ${categories.map(c => `
      <button type="button" class="filter-pill" data-category="${c.name}">${c.name}</button>
    `).join('')}
  `;

  container.innerHTML = pillsHtml;

  container.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;

    container.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    state.activeCategory = pill.dataset.category;
    renderFilteredProducts();
  });
}

/**
 * Header and Hero Search Listeners
 */
function setupSearchListeners() {
  const searchForms = document.querySelectorAll('.header-search-form');

  searchForms.forEach(form => {
    const input = form.querySelector('.header-search-input');
    if (!input) return;

    // Real-time debounce search
    let debounceTimer;
    input.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.searchQuery = e.target.value;
        renderFilteredProducts();
      }, 180);
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      state.searchQuery = input.value;
      renderFilteredProducts();

      const medicinesSection = document.getElementById('medicines-section');
      if (medicinesSection) {
        medicinesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * Product Card interaction: Add to Cart and Quick View Modal
 */
function setupProductCardInteractions() {
  const container = document.getElementById('product-container');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.btn-add-cart');
    const card = e.target.closest('.product-card');

    if (addBtn) {
      e.stopPropagation();
      const productId = Number(addBtn.dataset.productId);
      const product = state.allMedicines.find(m => m.id === productId);

      if (product) {
        // Add to cart state
        cart.addItem(product);

        // Visual feedback on button
        const originalContent = addBtn.innerHTML;
        addBtn.innerHTML = `<span>✓ Added</span>`;
        addBtn.style.backgroundColor = 'var(--accent-hover)';
        setTimeout(() => {
          addBtn.innerHTML = originalContent;
          addBtn.style.backgroundColor = '';
        }, 1200);

        // Toast feedback
        if (product.isScheduleH1 || product.isScheduleH || product.prescriptionRequired) {
          showToast(`Added "${product.name}" to cart. Note: Schedule H/H1 Doctor's prescription (RMP) required at checkout.`, 'warning', 4500);
        } else {
          showToast(`Added "${product.name}" to cart!`, 'success');
        }
      }
      return;
    }

    // Card click triggers Quick View
    if (card) {
      const productId = Number(card.dataset.productId);
      const product = state.allMedicines.find(m => m.id === productId);
      if (product) {
        openProductQuickView(product, (p) => {
          cart.addItem(p);
          showToast(`Added "${p.name}" to cart!`, 'success');
        });
      }
    }
  });
}

/**
 * Prescription upload triggers
 */
function setupPrescriptionTriggers() {
  const triggers = document.querySelectorAll('[data-action="upload-prescription"]');
  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openPrescriptionUploadModal();
    });
  });
}

/**
 * Mobile Navigation Menu
 */
function setupMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('main-nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close when clicking a nav link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomepage);
} else {
  initHomepage();
}
