const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const moonRouter = require('./routes/moon-routes');

require('dotenv').config()


app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));

app.use('/moon', moonRouter);

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('*', (req, res) => {
  res.status(404).send('No Moons Here');
})

var pg = require('pg');

app.get('/db', function (request, response) {
  pg.connect(process.env.hobby-dev, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});