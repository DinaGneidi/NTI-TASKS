const router = require("express").Router()
const client = require("../app/controller/customer.controller")
router.get("", client.homeScreen)
router.get("/addClient", client.addClientScreen)
router.post("/addClient", client.addClient)
router.get("/clients/:id", client.singleClientScreen)
module.exports = router