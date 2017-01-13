const express = require('express');
const app = express();
const port = 8080;

app.use(express.static([__dirname, '/public'].join('')));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('*', function (req, res) {
  res.redirect('/');
});
app.listen(process.env.PORT || port, function () {
  console.log('Example app listening on port 8080!')
})
