const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Example product data
const products = [
  { id: 1, name: "T-shirt", price: 20 },
  { id: 2, name: "Jeans", price: 40 },
  { id: 3, name: "Sneakers", price: 60 },
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Simple checkout endpoint
app.post('/api/checkout', (req, res) => {
  const { cart } = req.body;
  // You’d normally validate and process payment here
  res.json({ message: "Order placed successfully!", cart });
});

app.listen(4000, () => console.log('Server running on port 4000'));