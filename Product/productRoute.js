const express = require('express');
const productController = require('./productController');

const productRouter = express.Router();


productRouter.post("/insertProduct",productController.insertProduct);
productRouter.get("/products",productController.products);
productRouter.put("/updateProduct/:id",productController.productUpdate);
productRouter.delete("/deleteProduct/:id",productController.productDelete);

module.exports = productRouter;