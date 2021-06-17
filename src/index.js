const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');

// Determine the static file
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/css',
  express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css'))
);
app.use(
  '/js',
  express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js'))
);
app.use(
  '/js',
  express.static(path.join(__dirname, '../node_modules/jquery/dist'))
);

// Middleware
// Form
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Javascript
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    defaultLayout: 'global',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
routes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
