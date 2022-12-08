const express = require('express');
const { Todo } = require('../models');
const router = express.Router();

// 기본주소: localhost:PORT/

// GET localhost:PORT/todos - show all todos (READ)
router.get('/todos', async(req, res) => {
  // let data = await Todo.findAll();
  // console.log(data);
  // res.send(data);

  try {
    let data = await Todo.findAll();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

// POST localhost:PORT/todo - create a new todo (CREATE)
router.post('/todo', async (req, res) => {
  try {
    let newTodo = await Todo.create({
      // id는 auto_increment, done은 default 존재
      title: req.body.title,
    });
    res.send(newTodo);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;