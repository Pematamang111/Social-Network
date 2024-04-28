const router = require('express').Router();

//routes for user
const { getAllUsers, getUserById, addNewUser, updateUser, deleteUser, removeFriend} = require('../../controllers/userController');
const { User } = require('../../models');

router.get('/', getAllUsers);

router.get('/:userId', getUserById);

router.post('/', addNewUser);

router.put('/:userId', updateUser);

router.delete('/:userId', deleteUser);

router.delete('/:userId', removeFriend);

module.exports = router;