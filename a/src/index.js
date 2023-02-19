const express = require('express');

const app = express();
app.use(express.json());



app.listen(8080);
const rootRouter =require('./routers/index')
app.use("/api",rootRouter)
