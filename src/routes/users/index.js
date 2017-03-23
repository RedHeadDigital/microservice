var express = require('express');
var controller = require('./controller');

var c = new controller();

var router = express.Router();

// Query
router.get('/', c.getAllUsers);

router.get('/:id', c.getUser);

// Command
router.post('/add_user', c.createUser);

router.put('/:id/update_user', c.updateUser);

router.put('/:id/disabled_user', c.disabledUser);

router.delete('/:id/remove_user', c.removeUser);

module.exports = router;
