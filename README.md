# Grocery Shopping Website

A simple, modern grocery shopping website with product catalog, shopping cart functionality, and invoice generation.

## Features

- **Product Catalog**: Browse through 15+ grocery items across multiple categories
  - Fruits & Vegetables
  - Dairy Products
  - Bakery Items
  - Beverages
  - Snacks
  - Household Items

- **Shopping Cart**:
  - Add items to cart
  - Update quantities
  - Remove items
  - Real-time total calculation
  - Persistent cart (saved in browser localStorage)

- **Invoice Generation**:
  - Generate professional invoices
  - Print-friendly format
  - Download as PDF
  - Includes tax calculation (8%)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required - runs directly in the browser

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use.

## File Structure

```
SimpleShoppingWebsite/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Cart logic and invoice generation
└── README.md           # This file
```

## Usage

1. **Browse Products**: View all available grocery items in the product grid
2. **Add to Cart**: Click "Add to Cart" on any product
3. **Manage Cart**: 
   - Click the cart button in the header to view your cart
   - Adjust quantities using +/- buttons
   - Remove items using the "Remove" button
4. **Generate Invoice**: 
   - Click "Generate Invoice" when ready
   - Print the invoice using the "Print Invoice" button
   - Download as PDF using the "Download PDF" button

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with modern features (Grid, Flexbox, Gradients)
- **Vanilla JavaScript**: No frameworks, pure JavaScript
- **jsPDF**: PDF generation library (loaded via CDN)
- **html2canvas**: HTML to canvas conversion (loaded via CDN)

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features in Detail

### Responsive Design
- Mobile-friendly layout
- Adapts to different screen sizes
- Touch-friendly buttons and controls

### Cart Persistence
- Cart items are saved to browser localStorage
- Cart persists across page refreshes
- Automatically loads saved cart on page load

### Invoice Features
- Professional invoice layout
- Automatic invoice number generation
- Date and time stamping
- Itemized list with quantities and prices
- Tax calculation (8%)
- Print-optimized styling

## Customization

### Adding Products
Edit the `products` array in `script.js`:

```javascript
{
    id: 16,
    name: "Product Name",
    category: "Category",
    price: 9.99,
    image: "image-url.jpg",
    description: "Product description"
}
```

### Changing Tax Rate
Edit the tax calculation in the `generateInvoice()` function in `script.js`:

```javascript
const tax = subtotal * 0.08; // Change 0.08 to your desired tax rate
```

### Styling
Modify `styles.css` to customize colors, fonts, and layout.

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please check the code comments or modify as needed for your requirements.

