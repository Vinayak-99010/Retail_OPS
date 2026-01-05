const express = require("express");
const app = express();

app.use(express.json());

// Temporary product storage
let products = [];

// Health check
app.get("/health", (req, res) => {
  res.send("Backend is running");
});

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add a new product
app.post("/products", (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json({
    message: "Product added",
    product
  });
});

// Delete a product by id
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ message: "Product deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
