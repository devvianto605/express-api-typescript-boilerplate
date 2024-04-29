import express from "express";
import { getItems, getItem, createItem, updateItem, deleteItem } from '../controllers';

export const router = express.Router();

router.get('/items', getItems);

router.get("/item/:id", getItem);

router.post("/item", createItem);

// update a product
router.put("/item/:id", updateItem);

// delete a product
router.delete("/item/:id", deleteItem);