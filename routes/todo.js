var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/index.controller')
const controller = new IndexController()
const todos = []

router.use('/', (req, res, next) => {
  console.log('authorization handler')
  if(!req.get('Authorization'))
    res.status(401).json({message: "you are not authorized"})
  else
    next()
})

router.get('/', (req, res, next) => {
  res.json({
    result: todos.map((e, index) => {
      return {
        ...e,
        id: index
      }
    })
  })
});

router.post('/', (req, res)=>{
  const { name, isDone } = req.body
  todos.push({
    name,
    isDone,
  })
  res.json({message: 'success'})
})

// get one
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)

  res.json({
    ...todos[id],
    id: req.params.id
  })
});

router.patch('/:id', () => {
  const id = parseInt(req.params.id)

  todo[id] = {
    ...todo[id],
    ...req.body
  }

  res.json({
    ...todos[id], 
    id: req.params.id
  })
})

module.exports = router;
