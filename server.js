const express = require('express');
const path = require('path');
const app = express();

// ตั้งค่าให้เสิร์ฟไฟล์ static จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // รองรับ form data

// เสิร์ฟไฟล์ HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/login.html'));
});

app.get('/sign_up', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/sign_up.html'));
});
app.get('/working', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/working.html'));
});
// เสิร์ฟไฟล์ Contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/contact.html'));
});
app.get('/feature-temperature.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/feature-temperature.html'));
});
app.get('/feature-innovation.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/feature-innovation.html'));
});
app.get('/feature-security.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/feature-security.html'));
});
// รันเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
