const router = require('express').Router()
const db = require('../models')
const passport = require('../config/passport')


// login with an existing username and password
router.post(
  '/api/account/login',
  passport.authenticate('local'),
  (req, res) => {
    res.send('success').end()
  }
)


// register for an account
router.post('/api/account/register', (req, res) => {
  db.User.findOrCreate({
    where: { username: req.body.username },
    defaults: {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }
  }).then(([userArray, wasCreated]) => {
    if (wasCreated) {
      res.send('success').end()
    } else {
      res.send('taken').end()
    }
  })
})


// add an item to the cart
router.post('/api/cart', (req, res) => {
  console.log(req.body)
  db.cart_items
    .findOrCreate({
      where: { UserId: req.user.id, productId: req.body.productId },
      defaults: {
        num: parseInt(req.body.num),
        each_price: req.body.each_price,
        UserId: req.user.id,
        productId: req.body.productId
      }
    })
    .then(([cartItem, wasCreated]) => {
      console.log(cartItem)
      console.log(wasCreated)
      if (wasCreated) {
        res.send('created').end()
      } else {
        // update the quantity since the item already existed
        db.cart_items
          .update(
            {
              num: parseInt(cartItem.num) + parseInt(req.body.num)
            },
            {
              where: { id: cartItem.id }
            }
          )
          .then(data => {
            if (data) {
              res.send('updated').end()
            } else {
              res.send('error').end()
            }
          })
      }
    })
    .catch(error => console.log(error))
})


// update the quantity of an item in the cart
router.put('/api/cart', (req, res) => {
  db.cart_items
    .update(
      {
        num: req.body.num
      },
      {
        where: { id: req.body.id }
      }
    )
    .then(data => {
      if (data) {
        res.send('success').end()
      } else {
        res.send('error').end()
      }
    })
})

// delete an item from the cart
router.delete('/api/cart', (req, res) => {
  db.cart_items
    .destroy({
      where: { UserId: req.user.id, id: req.body.id }
    })
    .then(data => {
      if (data.id) {
        res.send('success').end()
      } else {
        res.send('error').end()
      }
    })
})

module.exports = router
