const router = require('express').Router()
const Sequelize = require('sequelize')
const db = require('../models')
const op = Sequelize.Op


// login page
router.get('/login', (req, res) => {
  console.log(req.isAuthenticated())
  if (req.isAuthenticated()) {
    res.redirect('/')
  } else {
    res.render('login', { layout: 'guest' })
  }
})

// register page
router.get('/register', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/account')
  } else {
    res.render('register', { layout: 'guest' })
  }
})

// passport's logout function
router.get('/logout', (req, res) => {
  req.logout()
  req.session.destroy(err => {
    if (err) {
      console.log(err)
    }
    res.redirect('/')
  })
})


// find all categories for the navbar dropdown
router.get('/category/list', (req, res) => {
  db.categories
    .findAll({
      attributes: ['id', 'name', 'description'],
      order: [['id', 'ASC']]
    })
    .then(categoryList => {
      res.send({ categoryList })
    })
})



// find all categories to render on the homepage
router.get('/', (req, res) => {
  db.categories
    .findAll({
      attributes: ['id', 'name', 'description', 'image_name'],
      order: [['id', 'ASC']]
    })
    .then(dbCategory => {
      category = JSON.parse(JSON.stringify(dbCategory))
      if (req.isAuthenticated()) {
        res.render('categories', { category })
      } else {
        res.render('categories', { layout: 'guest', category })
      }
    })
})

// find all products in a specific category
router.get('/category/:id', (req, res) => {
  db.products
    .findAll({
      attributes: ['id', 'name', 'description', 'image_name', 'price'],
      where: { categoryId: req.params.id },
      order: [['id', 'ASC']]
    })
    .then(dbCategoryItems => {
      categoryitems = JSON.parse(JSON.stringify(dbCategoryItems))
      if (req.isAuthenticated()) {
        res.render('category_items', { categoryitems })
      } else {
        res.render('guest_category_items', { layout: 'guest', categoryitems })
      }
    })
})


module.exports = router
