const express = require('express');
const router = express.Router();
const studentsData = require('../data/studentsData');

router.get('/:id', (req, res) => {
  const studentId = req.params.id;
  const student = studentsData.find((student) => student.id === parseInt(studentId));
  res.render('student', { student });
});

module.exports = router;
