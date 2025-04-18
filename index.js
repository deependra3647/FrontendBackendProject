const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/auth/login.html'));
});
app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/cart.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/auth/register.html'));
});
app.get('/seller/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/seller/dashboard.html'));
});
app.get('/seller/editproduct/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/seller/editproduct.html'));
});
app.get('/seller/reviews/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/seller/reviews.html'));
});
app.get('/seller/myproducts', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/seller/myproducts.html'));
});
app.get('/seller/orders', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/seller/orders.html'));
});
app.get('/addproduct', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/seller/addproduct.html'));
});
app.get('/admin/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin/dashboard.html'));
});
app.get('/admin/users', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin/users.html'));
});
app.get('/admin/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin/products.html'));
});
app.get('/admin/orders', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin/orders.html'));
});
app.get('/placeorder', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/placeorder.html'));
});
app.get('/myorders', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/myorders.html'));
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Frontend server running at http://localhost:${PORT}`);
});
