const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');



router.post("/getUsers", UserController.users_get_all);

router.post('/getFriends',UserController.user_friends);


module.exports = router;