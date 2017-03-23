
var users = {

    // Query
    getAllUsers: function (callback, error) {
        // Check for callback function
        if (callback) {
            callback('getAllUsers');
        }
    },
    getUser: function (id, callback, error) {
        // Check for callback function
        if (callback) {
            callback('getUser');
        }
    },


    // Command
    createUser: function (data, callback, error) {
        // Insert business logic here

        // Check for callback function
        if (callback) {
            callback('createUser');
        }
    },
    updateUser: function (id, data, callback, error) {
        // Insert business logic here

        // Check for callback function
        if (callback) {
            callback('updateUser');
        }
    },
    disabledUser: function (id, callback, error) {
        // Insert business logic here

        // Check for callback function
        if (callback) {
            callback('disabledUser');
        }
    },
    removeUser: function (id, callback, error) {
        // Insert business logic here

        // Check for callback function
        if (callback) {
            callback('removeUser');
        }
    }


}

module.exports = users;