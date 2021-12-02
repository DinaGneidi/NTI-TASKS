class Balance {
    static addTransactionScreen = (req, res) => {
        let transactionType = req.params.type
        let userId = req.params.userId
        let type = ""
        if (transactionType == "addBalance") {
            type = "Add Balance"

        } else if (transactionType == "withdraw") {
            type = "Withdraw"
        } else {

            res.render('err404', {
                pageTitle: "Not Found",
                errMsg: "Requested Transaction Type not Valid"
            })

            res.render("balanceOperation", {
                pageTitle: `Add Transaction ${transactionType}`,
                userId,
                transactionType: type
            })

        }
    }
    static addTransaction = (req, res) => {
        let transactionType = req.params.type,
            userId = req.params.userId,
            type = ""
        if (transactionType != "addBalance" && transactionType != "withdraw")
            res.render('err404', { pageTitle: "Not Found", errMsg: "Requested Transaction Type Not Valid" })
        let allClients = dealWithJson.readDataFromJSON()
        let customerIndex = allClients.findIndex(c => c.accountNum == userId)
        if (customerIndex == -1) res.render('err404', { pageTitle: "Not Found", errMsg: "Requested UserId Not Valid" })
        let amount = +req.body.amount
        if (transactionType == "withdraw") amount = amount * -1
        allClients[customerIndex].currentBalance = +allClients[customerIndex].currentBalance + amount
        allClients[customerIndex].transactions.push({ amount: req.body.amount, type: transactionType })
        dealWithJson.writeDataToJSON(allClients)
        res.redirect('/')
    }

}
module.exports = Balance