const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('template2', { title: 'Template 2' });
});

module.exports = router;
