var code = require('../../code/users')

function users() {

}

users.prototype = {

    // Query
    getAllUsers: function (req, res) {

        code.getAllUsers(function (data) {
            // Callback
            res.send(data);

        }, function (error) {
            // Error

        });
    },
    getUser: function (req, res) {
        var id = req.params.id;

        code.getUser(id, function (data) {
            // Callback
            res.send(data);

        }, function (error) {
            // Error

        });
    },


    // Command
    createUser: function (req, res) {
        var data = req.body;

        code.createUser(data, function (data) {
            // Callback
            res.send(data);

        }, function (error) {
            // Error

        });
    },
    updateUser: function (req, res) {
        var id = req.params.id;
        var data = req.body;

        code.updateUser(id, body, function (data) {
            // Callback
            res.send(data);

        }, function (error) {
            // Error

        });
    },
    disabledUser: function (req, res) {
        var id = req.params.id;

        code.disabledUser(id, function (data) {
            // Callback
            res.send(data);

        }, function (error) {
            // Error

        });
    },
    removeUser: function (req, res) {
        var id = req.params.id;

        code.removeUser(id, function (data) {
            // Callback
            res.send(data);

        }, function (error) {
            // Error

        });
    }

}


module.exports = users;