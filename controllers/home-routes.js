const router = require('express').Router();
router.get('/', (req, res) => {
  res.render('home')
})
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
<<<<<<< HEAD
  


=======

router.get('/', (req, res) => {
  let session = { loggedIn: req.session.loggedIn };
  res.render('home', session);
})
>>>>>>> main

module.exports = router;