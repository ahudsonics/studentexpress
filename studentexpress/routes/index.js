const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('template1', { title: 'Home Page' });
});

module.exports = router;

