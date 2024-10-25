const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

router.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/faq.html'));
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contact.html'));
});

router.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/profile.html'));
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
