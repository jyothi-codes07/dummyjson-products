# 🛍️ Product Explorer

A responsive product browsing web application built using **HTML, CSS, and JavaScript**. The application fetches product data from the **DummyJSON API** and allows users to browse, search, filter, and view detailed product information.

## ✨ Features

- 📦 Display products dynamically
- 🔍 Search products by name or keyword
- 🗂️ Filter products by category
- 🖼️ Display product images and descriptions
- 💰 Show product prices
- ⭐ Display ratings and stock information
- 📄 View detailed information for each product
- 📱 Responsive interface using Bootstrap
- 🌐 Fetches real-time product data from DummyJSON API

## 🛠️ Technologies Used

- **HTML5** – Structure and layout
- **CSS3** – Custom styling
- **JavaScript** – Dynamic content, API calls, search and filtering
- **Bootstrap 5** – Responsive UI components and styling
- **DummyJSON API** – Product and category data

## 📁 Project Structure

```text
dummyjson-products/
│
├── products.html       # Main product listing page
├── products.css        # Styling for product listing
├── products.js         # Product fetching, search and category filtering
│
├── product.html        # Product details page
├── product.css         # Styling for product details
├── product.js          # Fetches and displays individual product details
│
├── data.json           # Local product data
└── README.md           # Project documentation
```

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project

Navigate to the project folder:

```bash
cd dummyjson-products
```

### 3. Run the application

Open `products.html` in a web browser.

For the best experience, use **VS Code with the Live Server extension** or another local development server.

## 🔗 API Used

This project uses the **DummyJSON Products API** to retrieve product and category information.

Main endpoints used:

```text
https://dummyjson.com/products
https://dummyjson.com/products/categories
https://dummyjson.com/products/search?q={keyword}
https://dummyjson.com/products/category/{category}
https://dummyjson.com/products/{id}
```

## 🔄 Application Flow

```text
User opens Products page
        ↓
Fetch products from DummyJSON API
        ↓
Display product cards
        ↓
 ┌───────────────┬────────────────┐
 ↓               ↓                ↓
Search         Category        View Details
 ↓               ↓                ↓
Filter          Filter          Product Page
products        products        with details
```

## 🔍 Search & Filtering

The application supports:

- Searching for products using keywords
- Searching by category name
- Filtering products using category buttons
- Returning to the complete product list using **All Products**

## 📄 Product Details

Selecting **View Details** opens a separate product details page containing:

- Product name
- Price
- Description
- Category
- Discount percentage
- Rating
- Stock
- Availability
- Warranty information
- Shipping information
- Product image
```

## 🎯 Learning Outcomes

This project demonstrates practical implementation of:

- JavaScript DOM manipulation
- Asynchronous JavaScript using `async/await`
- REST API integration using `fetch()`
- Dynamic HTML rendering
- Search and filtering functionality
- URL query parameters
- JavaScript event handling
- Bootstrap-based responsive design

## 📌 Future Enhancements

- Add shopping cart functionality
- Add product sorting
- Add price-range filtering
- Add pagination
- Add wishlist functionality
- Improve mobile responsiveness
- Add loading indicators and error messages
