const express = require('express');
const purchaseController = require('./purchaseController');

const purchaseRouter = express.Router();


purchaseRouter.post("/insertPurchase",purchaseController.insertPurchase);
purchaseRouter.get("/purchase/:id",purchaseController.purchase);
purchaseRouter.delete("/deletePurchase/:id",purchaseController.purchaseDelete);

module.exports= purchaseRouter;