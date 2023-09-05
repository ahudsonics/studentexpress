const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('template1', { title: 'Template 1' });
});

module.exports = router;
