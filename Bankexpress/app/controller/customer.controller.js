const dealWithJson = require("../helpers/dealWithJson.helper")
const uniqid = require('uniqid')
class Client {
    static homeScreen = (req, res) => {
        let allClients = dealWithJson.readDataFromJSON()
        res.render("home", {
            pageTitle: "All Clients",
            allClients
        })
    }

    static addClientScreen = (req, res) => {
        res.render("addCustomer", {
            pageTitle: "Add New Client"
        })
    }

    static addClient = (req, res) => {
        // { "firstName": "", "lastName": "", "email": ["", ""], "city": "", "street": "", "building": "" }
        let clientData = {
            accountNum: uniqid(),
            ...req.body,
            currentBalance: req.body.initialBalance,
            transactions: []
        }
        let allClients = dealWithJson.readDataFromJSON()
        allClients.push(clientData)
        dealWithJson.writeDataToJsON(allClients)
        res.redirect("/")
    }

    static singleClientScreen = (req, res) => {
        res.render("singleCustomer", {
            pageTitle: "Single Client"
        })
    }
}
module.exports = Client