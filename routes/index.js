var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page:'Home', menuId:'home' });
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me', page:'About Me', menuId:'about' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', page:'Projects', menuId:'projects'});
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', page:'Services', menuId:'services'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me', page:'Contact Me', menuId:'contact'});
});


module.exports = router;
