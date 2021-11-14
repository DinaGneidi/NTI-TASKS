const chalk = require("chalk")
const fs = require("fs")
const uniqid = require("uniqid")
const validator = require("validator");



const allUsers = [{ name: "dina" }]

const writeDataToFile = (users) => {
    //data = JSON.stringify(data)
    fs.writeFileSync("users.json", JSON.stringify(users))
}

const readDataFromFile = () => {
    let data
    try {
        data = JSON.parse(fs.readFileSync("users.json"))
        if (!Array.isArray(data)) throw new Error()
    } catch (e) {
        data = []
    }
    return data
}
addNewUser = (userData) => {
    try {

        //if (!validator.isEmail(userData.email)) throw new Error(chalk.green("Invalid Email"))
        const allUsers = readDataFromFile();
        let user = {
            id: uniqid(),
            ...userData
        }
        allUsers.push(user)
        writeDataToFile(allUsers)
        console.log(chalk.green("data added successfully"))
    } catch (e) {

        console.log(chalk.red(e.message))
    }
}

showUser = (id) => {
    try {
        const allUsers = readDataFromFile();
        const user = allUsers.find(u => u.id == id)
        if (!user) throw new Error("no users with selected id")
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }

}

getAllUsers = () => {
    const allUsers = readDataFromFile()
    if (allUsers.length == 0) return console.log(chalk.red(" No users yet"))
    console.log(`your file has ${allUsers.length} record`)
    allUsers.forEach(user => {
        console.log(chalk.green(`id:${user.id} - user name :${user.name}- user email:${user.email}`))
    })
}

deleteUser = (id) => {
        try {
            const allUsers = readDataFromFile();
            let index = allUsers.findIndex(u => u.id === id)
            if (index == -1) throw new Error("no users with selected id")
            allUsers.splice(index, 1)
            writeDataToFile(allUsers)
        } catch (e) {
            console.log(e.message)
        }
    }
    //writeData(users);
    //console.log(readDataFromFile())
module.exports = {
    addNewUser,
    showUser,
    getAllUsers,
    deleteUser
}