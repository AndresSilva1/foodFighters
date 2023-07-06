const router = require('express').Router();
const getFoodbanks = require("./api/foodPantryTest")

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

router.get('/test', async (req, res) => {
  const { data } = await getFoodbanks(req.body.cityName);
  res.render('test', { foodbanks: data })
})
//Just added this. Will edit
// const response = await fetch(`/api/dish`, {
//   method: 'POST',
//   body: JSON.stringify({
//     dish_name,
//     description,
//     guest_name,
//     has_nuts,
//   }),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
module.exports = router;