const { Router } = require('express')
const Blog = require('../models/Blog')
const Users = require('../models/Users')
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
  const todo = new Users({
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
router.post('/autorezation', async (req, res) => {

  if(req.body.login !="" && req.body.pasword != ""){
  const results = await Users.find({login: req.body.login, password: req.body.pasword}).lean() 
   if(results.length>0)
   {
    res.redirect('/autorezation');
   }
   else
   {
      /*  const user = new Users({
        login: req.body.login,
        password: req.body.pasword
      })
      await user.save()
      res.redirect('/') */
   
    }
    
    /* res.setHeader('Set-Cookie', [     добавление хуков
      cookie.serialize('name1', 'value1', {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60,
        path: '/'
      }),
      cookie.serialize('name2', 'value2', {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 2,
        path: '/'
      })
    ]); */


  }
  else{ res.redirect('/autorezation');}
})

module.exports = router
