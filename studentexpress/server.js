const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./src/routes/index'));
app.use('/about', require('./src/routes/about'));
app.use('/contact', require('./src/routes/contact'));
app.use('/template1', require('./src/routes/template1'));
app.use('/template2', require('./src/routes/template2'));
app.use('/students', require('./src/routes/student'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
