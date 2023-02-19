const express = require('express');
const rootRouter = express.Router();

const Routeruers = require('./v1/userRouter');

rootRouter.use("/user/v1",Routeruers);


module.exports=rootRouter;

