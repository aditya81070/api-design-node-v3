import { Router } from 'express'
import {
  getItem,
  getItems,
  createItem,
  deleteItem,
  updateItem
} from './item.controllers'
const router = Router()

router
  .route('/')
  .get(getItems)
  .post(createItem)

router
  .route('/:id')
  .delete(deleteItem)
  .put(updateItem)
  .get(getItem)

export default router
