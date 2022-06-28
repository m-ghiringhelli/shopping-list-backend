const { Router } = require('express');
const Item = require('../models/Item');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const items = await Item.getAll();
      console.log('items', items);
      res.json(items);
    } catch (e) {
      next(e);
    }
  });

// TO DO - implement items CRUD
