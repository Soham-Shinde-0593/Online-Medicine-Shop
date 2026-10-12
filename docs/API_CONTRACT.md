# API Contract

This document defines the data structure that the frontend will use to interact with mock data (now) or the future Spring Boot backend (later).

## Medicine Object
```json
{
  "id": 1,
  "name": "Paracetamol",
  "brand": "Generic",
  "price": 10.00,
  "category": "Pain Relief",
  "prescriptionRequired": false,
  "description": "Used to treat mild to moderate pain.",
  "imageUrl": "/assets/products/paracetamol.jpg"
}
```

## Endpoints (Targeted for Spring Boot)
- `GET /api/medicines` - Fetch products. Supported query parameters: `category`, `query`, `productType` (`all`, `otc`, `rx`), `inStockOnly` (`true`/`false`), `sortBy` (`recommended`, `name-asc`, `price-asc`, `price-desc`), and `featuredOnly` (`true`/`false`). Omitted parameters use the defaults above.
- `GET /api/medicines/{id}` - Fetch single product
- `POST /api/auth/login` - Login user
- `POST /api/cart` - Save cart (local storage currently)

## Catalog field conventions
- `category` is the display category name and is matched case-insensitively.
- `brand`, `name`, `description`, and `dosage` are searchable text fields.
- `prescriptionRequired` is the source of truth for the `rx` and `otc` product type filters.
- `inStock` indicates current availability; when omitted, `stockQuantity > 0` is used if a quantity is supplied.
- Prices are numeric values in the shop's configured currency and are sorted numerically.
