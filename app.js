const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const moonRouter = require('./routes/moon-routes');

app.use('/moon', moonRouter);
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.send('Hello Friend');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('*', (req, res) => {
  res.status(404).send('No Moons Here');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});