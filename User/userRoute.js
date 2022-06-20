const express = require('express');
const userController = require('./userController')



const userRouter = express.Router();


userRouter.post("/insertUser",userController.insertUser);
userRouter.get("/users",userController.users);
userRouter.put("/updateUser/:id",userController.userUpdate);
userRouter.delete("/deleteUser/:id",userController.userDelete);

module.exports = userRouter;