const router = require('express').Router();

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  let session = { loggedIn: req.session.loggedIn };
  res.render('login', session);
});

router.get('/', (req, res) => {
  let session = { loggedIn: req.session.loggedIn };
  res.render('home', session);
})

module.exports = router;