# 🛍️ Product Explorer

A responsive product browsing web application built using **HTML, CSS, and JavaScript**. The application fetches product data from the **DummyJSON API** and allows users to browse, search, filter, and view detailed product information.

## ✨ Features

- 📦 Dynamic product listing
- 🔍 Product search functionality
- 🗂️ Category-based filtering
- 🖼️ Product images and descriptions
- 💰 Product pricing and discount information
- ⭐ Product ratings and stock details
- 📄 Individual product details page
- 📱 Responsive design using Bootstrap
- 🌐 Integration with DummyJSON REST API

## 🛠️ Technologies Used

- **HTML5** – Structure and page layout
- **CSS3** – Custom styling
- **JavaScript** – API integration, DOM manipulation, search and filtering
- **Bootstrap 5** – Responsive design and UI components
- **DummyJSON API** – Product and category data

## 📁 Project Structure

```text
dummyjson-products/
│
├── products.html        # Product listing page
├── products.css         # Product listing styles
├── products.js          # Product fetching, search and filtering
│
├── product.html         # Product details page
├── product.css          # Product details styles
├── product.js           # Individual product data and details
│
├── data.json            # Local JSON data
└── README.md            # Project documentation
```

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project

```bash
cd dummyjson-products
```

### 3. Run the application

Open `products.html` in a web browser.

For the best experience, use **VS Code with the Live Server extension** or another local development server.

## 🔗 API Used

The project uses the **DummyJSON Products API** for retrieving product and category information.

Main endpoints include:

```text
https://dummyjson.com/products
https://dummyjson.com/products/categories
https://dummyjson.com/products/search?q={keyword}
https://dummyjson.com/products/category/{category}
https://dummyjson.com/products/{id}
```

## 🔄 Application Flow

```text
User opens Products Page
          ↓
Fetch product data from DummyJSON API
          ↓
Display product cards
          ↓
     ┌────┴─────┐
     ↓          ↓
  Search     Category
     ↓          ↓
   Filter    Filter
     └────┬─────┘
          ↓
   View Product Details
          ↓
    Product Details Page
```

## 🔍 Search & Filtering

The application allows users to:

- Search products using keywords
- Filter products by category
- View all available products
- Select a product to view its complete details

## 📄 Product Details

The product details page displays information such as:

- Product name
- Product image
- Price
- Description
- Category
- Discount percentage
- Rating
- Stock availability
- Warranty information
- Shipping information

## 🎯 Learning Outcomes

This project demonstrates practical implementation of:

- REST API integration
- JavaScript `fetch()` and `async/await`
- DOM manipulation
- Dynamic content rendering
- Search and filtering
- Event handling
- URL parameters
- Responsive web design using Bootstrap

## 📌 Future Enhancements

- Add shopping cart functionality
- Add product sorting
- Add price-range filtering
- Add pagination
- Add wishlist functionality
- Add loading and error states
- Further improve mobile responsiveness
