const express = require('express')


const {getlike,getres, createRes ,createOre} = require('../../controllers/userController')

const Routeruers =express.Router();

Routeruers.get("/getUser",getlike)
Routeruers.get("/getres",getres)
Routeruers.post("/createRes",createRes)
Routeruers.post("/createOre",createOre)

module.exports = Routeruers;
