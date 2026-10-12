/**
 * data.js: Centralized mock data repository for medicines and categories
 * Adheres strictly to the schema defined in docs/API_CONTRACT.md
 */

export const mockCategories = [
  {
    id: "pain-relief",
    name: "Pain Relief",
    description: "Analgesics, anti-inflammatories & fever reducers",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    itemCount: 18,
    badge: "Essential"
  },
  {
    id: "cold-flu",
    name: "Cold & Flu",
    description: "Decongestants, cough syrups & immunity drops",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>`,
    itemCount: 24,
    badge: "Seasonal"
  },
  {
    id: "vitamins-supplements",
    name: "Vitamins & Supplements",
    description: "Multivitamins, minerals, omega-3 & probiotics",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`,
    itemCount: 32,
    badge: "Popular"
  },
  {
    id: "first-aid",
    name: "First Aid & Wound Care",
    description: "Bandages, antiseptics, gauze & burn gels",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`,
    itemCount: 15,
    badge: "Must-have"
  },
  {
    id: "digestive-health",
    name: "Digestive Health",
    description: "Antacids, laxatives, rehydration & gut flora",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    itemCount: 19,
    badge: "Care"
  },
  {
    id: "cardiovascular",
    name: "Cardiovascular & BP",
    description: "Prescription blood pressure & heart medications",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    itemCount: 12,
    badge: "Rx Only"
  },
  {
    id: "diabetes-care",
    name: "Diabetes Care",
    description: "Blood glucose strips, monitors & insulin needles",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m19 12-7-9-7 9c0 3.87 3.13 7 7 7s7-3.13 7-7Z"/></svg>`,
    itemCount: 14,
    badge: "Specialized"
  },
  {
    id: "skincare-wellness",
    name: "Derma & Skin Care",
    description: "Dermatological creams, lotions & treatments",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>`,
    itemCount: 28,
    badge: "Wellness"
  }
];

export const mockMedicines = [
  {
    id: 1,
    name: "Paracetamol 500mg Tablets",
    brand: "Panadol Extra",
    price: 8.50,
    originalPrice: 10.00,
    category: "Pain Relief",
    prescriptionRequired: false,
    description: "Effective relief from mild to moderate pain including headache, backache, and fever reduction.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    stockQuantity: 120,
    rating: 4.8,
    reviewsCount: 312,
    dosage: "500mg, 20 Film-Coated Tablets",
    featured: true,
    inStock: true
  },
  {
    id: 2,
    name: "Ibuprofen 400mg Rapid Action",
    brand: "Advil",
    price: 11.25,
    originalPrice: 13.50,
    category: "Pain Relief",
    prescriptionRequired: false,
    description: "Non-steroidal anti-inflammatory drug (NSAID) for muscle ache, arthritis, toothache, and menstrual cramps.",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80",
    stockQuantity: 85,
    rating: 4.7,
    reviewsCount: 198,
    dosage: "400mg, 30 Softgels",
    featured: true,
    inStock: true
  },
  {
    id: 3,
    name: "Amoxicillin 500mg Capsules",
    brand: "Augmentin Gen",
    price: 24.00,
    originalPrice: 28.00,
    category: "Cardiovascular & BP",
    prescriptionRequired: true,
    description: "Broad-spectrum penicillin antibiotic prescribed for bacterial infections. Valid doctor prescription required.",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80",
    stockQuantity: 40,
    rating: 4.9,
    reviewsCount: 88,
    dosage: "500mg, 15 Capsules",
    featured: false,
    inStock: true
  },
  {
    id: 4,
    name: "Vitamin C 1000mg + Zinc Effervescent",
    brand: "Redoxon Immune",
    price: 14.99,
    originalPrice: 18.00,
    category: "Vitamins & Supplements",
    prescriptionRequired: false,
    description: "Daily immune system defense with high-strength Vitamin C and active Zinc in refreshing orange fizz.",
    imageUrl: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=600&q=80",
    stockQuantity: 210,
    rating: 4.9,
    reviewsCount: 420,
    dosage: "1000mg, 20 Tubes",
    featured: true,
    inStock: true
  },
  {
    id: 5,
    name: "Cetirizine 10mg All-Day Allergy",
    brand: "Zyrtec",
    price: 12.50,
    originalPrice: 15.00,
    category: "Cold & Flu",
    prescriptionRequired: false,
    description: "24-hour non-drowsy relief from seasonal pollen allergies, runny nose, sneezing, and itchy watery eyes.",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=80",
    stockQuantity: 95,
    rating: 4.6,
    reviewsCount: 165,
    dosage: "10mg, 30 Tablets",
    featured: true,
    inStock: true
  },
  {
    id: 6,
    name: "Omeprazole 20mg Delayed Release",
    brand: "Prilosec OTC",
    price: 16.75,
    originalPrice: 19.99,
    category: "Digestive Health",
    prescriptionRequired: false,
    description: "Proton pump inhibitor treating frequent heartburn, acid indigestion, and gastroesophageal reflux.",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
    stockQuantity: 65,
    rating: 4.8,
    reviewsCount: 142,
    dosage: "20mg, 14 Capsules",
    featured: false,
    inStock: true
  },
  {
    id: 7,
    name: "Atorvastatin 20mg Lipid Regulator",
    brand: "Lipitor Care",
    price: 32.00,
    originalPrice: 38.00,
    category: "Cardiovascular & BP",
    prescriptionRequired: true,
    description: "Statin medication used to prevent cardiovascular disease and manage high cholesterol levels.",
    imageUrl: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=600&q=80",
    stockQuantity: 30,
    rating: 4.7,
    reviewsCount: 76,
    dosage: "20mg, 28 Tablets",
    featured: false,
    inStock: true
  },
  {
    id: 8,
    name: "Sterile Waterproof First Aid Kit",
    brand: "MediGuard Pro",
    price: 26.50,
    originalPrice: 32.00,
    category: "First Aid & Wound Care",
    prescriptionRequired: false,
    description: "Comprehensive 120-piece medical emergency response kit with bandages, antiseptic wipes, burn gel & shears.",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80",
    stockQuantity: 70,
    rating: 4.9,
    reviewsCount: 289,
    dosage: "Complete 120-piece Hard Case",
    featured: true,
    inStock: true
  },
  {
    id: 9,
    name: "Metformin 500mg Extended Release",
    brand: "Glucophage ER",
    price: 18.00,
    originalPrice: 22.00,
    category: "Diabetes Care",
    prescriptionRequired: true,
    description: "First-line medication for the treatment of type 2 diabetes to control high blood sugar levels.",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80",
    stockQuantity: 55,
    rating: 4.8,
    reviewsCount: 110,
    dosage: "500mg, 60 Tablets",
    featured: false,
    inStock: true
  },
  {
    id: 10,
    name: "Hydrocortisone 1% Soothing Cream",
    brand: "Cortizone-10",
    price: 9.20,
    originalPrice: 11.00,
    category: "Derma & Skin Care",
    prescriptionRequired: false,
    description: "Maximum strength anti-itch cream enriched with soothing aloe vera for eczema, psoriasis, rashes & insect bites.",
    imageUrl: "https://images.unsplash.com/photo-1608248597359-58b211029177?auto=format&fit=crop&w=600&q=80",
    stockQuantity: 115,
    rating: 4.6,
    reviewsCount: 154,
    dosage: "56g Topical Tube",
    featured: true,
    inStock: true
  },
  {
    id: 11,
    name: "Digital Blood Glucose Monitoring System",
    brand: "Accu-Chek Instant",
    price: 45.00,
    originalPrice: 55.00,
    category: "Diabetes Care",
    prescriptionRequired: false,
    description: "Ultra-fast wireless blood sugar meter kit with 50 test strips, painless lancing device, and smartphone sync.",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    stockQuantity: 45,
    rating: 4.9,
    reviewsCount: 310,
    dosage: "Starter Kit + 50 Strips",
    featured: true,
    inStock: true
  },
  {
    id: 12,
    name: "Herbal Nighttime Cough & Cold Syrup",
    brand: "Vicks DayQuil/NyQuil",
    price: 13.50,
    originalPrice: 16.00,
    category: "Cold & Flu",
    prescriptionRequired: false,
    description: "Multi-symptom cold formula soothing nighttime coughs, sore throat, and nasal congestion for restorative sleep.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    stockQuantity: 90,
    rating: 4.7,
    reviewsCount: 228,
    dosage: "354ml Oral Liquid Bottle",
    featured: true,
    inStock: true
  }
];

export const mockTrustFeatures = [
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: "100% Genuine Medicines",
    description: "Sourced directly from certified pharmaceutical manufacturers & licensed distributors."
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
    title: "Express 30-Min Delivery",
    description: "Prompt temperature-controlled courier delivery right to your doorstep."
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: "Licensed Pharmacists",
    description: "Every order and prescription is validated by experienced registered pharmacists."
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
    title: "Secure & Encrypted",
    description: "HIPAA-compliant data privacy, encrypted checkout, and transparent tracking."
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Dr. Rachel Green",
    role: "General Physician",
    comment: "This online pharmacy has simplified patient medicine compliance tremendously. Their prescription verification is top standard.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "David Miller",
    role: "Regular Customer",
    comment: "I order my father's diabetes medication monthly. Super reliable delivery and medicine prices are significantly lower than local stores.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Verified Buyer",
    comment: "The prescription upload feature is seamless! Within 10 minutes a pharmacist verified my script and my package arrived that afternoon.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  }
];

export const mockFaqs = [
  {
    question: "How do I order medicines that require a prescription?",
    answer: "Medicines labeled with an 'Rx Required' badge mandate a valid prescription. You can upload an image or PDF of your doctor's script using the 'Upload Prescription' button on our homepage. Our licensed pharmacist will review it before dispatch."
  },
  {
    question: "Are your medicines authentic and unexpired?",
    answer: "Yes, 100%. We source medicines exclusively from authorized pharmaceutical manufacturers with batch numbers, hologram verification, and at least 12 months before expiration date."
  },
  {
    question: "What is your delivery timeframe and shipping cost?",
    answer: "Standard orders qualify for free delivery on orders over $35. Express orders are delivered within 30 to 90 minutes in eligible metro areas."
  },
  {
    question: "Can I return medications if I no longer need them?",
    answer: "Due to health and safety regulations, opened prescription medicines cannot be returned. However, undamaged over-the-counter wellness products can be returned within 14 days."
  }
];
