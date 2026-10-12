/**
 * api.js: Handles all data fetching (Mocked now, adheres to docs/API_CONTRACT.md for future Spring Boot backend)
 */
import { mockMedicines, mockCategories, mockTrustFeatures, mockTestimonials, mockFaqs } from './data.js';

// Simulated network latency for realistic async state (100ms)
const SIMULATED_LATENCY_MS = 100;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Universal endpoint fetcher adhering to docs/API_CONTRACT.md
 * Future Spring Boot backend will replace this with real fetch('/api/...')
 */
export async function fetchData(endpoint) {
  await delay(SIMULATED_LATENCY_MS);

  if (endpoint === '/api/medicines' || endpoint.startsWith('/api/medicines?')) {
    return mockMedicines;
  }
  if (endpoint.startsWith('/api/medicines/')) {
    const id = parseInt(endpoint.split('/').pop(), 10);
    const medicine = mockMedicines.find(m => m.id === id);
    if (!medicine) throw new Error(`Medicine with ID ${id} not found`);
    return medicine;
  }
  if (endpoint === '/api/categories') {
    return mockCategories;
  }
  
  console.warn(`Unrecognized mock endpoint: ${endpoint}`);
  return [];
}

/**
 * Fetch all medicines with optional category and search query filters
 */
export async function fetchMedicines({ category = 'all', query = '', featuredOnly = false } = {}) {
  await delay(SIMULATED_LATENCY_MS);
  let results = [...mockMedicines];

  if (featuredOnly) {
    results = results.filter(m => m.featured);
  }

  if (category && category !== 'all') {
    const normalizedCategory = category.toLowerCase().trim();
    results = results.filter(m => m.category.toLowerCase().includes(normalizedCategory));
  }

  if (query && query.trim() !== '') {
    const q = query.toLowerCase().trim();
    results = results.filter(m => 
      m.name.toLowerCase().includes(q) ||
      m.brand.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q)
    );
  }

  return results;
}

/**
 * Fetch single medicine by its ID
 */
export async function fetchMedicineById(id) {
  await delay(SIMULATED_LATENCY_MS);
  const numericId = Number(id);
  const found = mockMedicines.find(m => m.id === numericId);
  if (!found) {
    throw new Error(`Medicine with ID ${id} not found`);
  }
  return found;
}

/**
 * Fetch all medicine categories
 */
export async function fetchCategories() {
  await delay(SIMULATED_LATENCY_MS);
  return [...mockCategories];
}

/**
 * Fetch homepage trust value proposition features
 */
export async function fetchTrustFeatures() {
  await delay(SIMULATED_LATENCY_MS);
  return [...mockTrustFeatures];
}

/**
 * Fetch verified customer testimonials
 */
export async function fetchTestimonials() {
  await delay(SIMULATED_LATENCY_MS);
  return [...mockTestimonials];
}

/**
 * Fetch frequently asked questions
 */
export async function fetchFaqs() {
  await delay(SIMULATED_LATENCY_MS);
  return [...mockFaqs];
}
