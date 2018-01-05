const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const moonRouter = require('./routes/moon-routes');



app.get('/', (req, res) => {
  res.send('Hello Friend');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/moon', moonRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});