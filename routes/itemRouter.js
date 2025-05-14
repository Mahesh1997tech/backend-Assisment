import express from 'express';
import {
  postItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
} from '../controllers/itemController.js';

const router = express.Router();

router.post('/item', postItem);
router.get('/item', getItems);
router.get('/item/:id', getItem);
router.put('/item/:id', updateItem);
router.delete('/item/:id', deleteItem);

export default router;

