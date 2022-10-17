const { Router } = require('express')
const Blog = require('../models/Blog')
const router = Router()

router.get('/index', async (req, res) => {
  const todos = await Blog.find({}).lean() 

  res.render('index', {
    title: 'Todos list',
    isIndex: true,
    todos
  })
})
router.post('/index', async (req, res) => {
//  if()
  res.redirect('/index')
})
router.get('/', async (req, res) => {
  res.render('autorezation', {
    title: 'Autorization',
  })
})
router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todo',
    isCreate: true
  })
})
router.get('/autorezation', (req, res) => {
  res.render('autorezation', {
    title: 'Autorization',
  })
})

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title
  })

  await todo.save()
  res.redirect('/')
})

router.post('/complete', async (req, res) => {
  const todo = await Todo.findById(req.body.id)

  todo.completed = !!req.body.completed
  await todo.save()

  res.redirect('/')
})

module.exports = router
