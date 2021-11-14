const fs = require("fs");
const yargs = require("yargs");

const chalk = require("chalk");

const utils = require("./utils/myFunctions")
yargs.command({
    command: "addUser",
    builder: {
        name: { type: "string", demandOption: true },
        email: { type: "string", demandOption: true }
    },

    handler: function(argv) {
        let user = {
            name: argv.name,
            email: argv.email
        }
        utils.addNewUser(user)
    },
});

yargs.command({
    command: "singleUser",
    builder: {
        id: { type: "string", demandOption: true }
    },

    handler: function(argv) {
        //   let id = argv.id

        utils.showUser(argv.id);
    },
});


yargs.command({
    command: "allUsers",
    builder: {

    },

    handler: function(argv) {
        utils.getAllUsers()
    }

});

yargs.command({
    command: "deleteUser",
    builder: {
        id: { type: "string", demandOption: true }
    },

    handler: function(argv) {
        utils.deleteUser(argv.id)
    },
});
yargs.command({
    command: "editUser",
    builder: {},

    handler: function(argv) {},
});


yargs.argv;