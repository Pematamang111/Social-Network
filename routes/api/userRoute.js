const router = require('express').Router();

//routes for user
const { getAllUsers, getUserById, addNewUser, updateUser, deleteUser, addFriend, removeFriend} = require('../../controllers/userController');
const { User } = require('../../models');

router.get('/', getAllUsers);

router.get('/:userId', getUserById);

router.post('/', addNewUser);

router.put('/:userId', updateUser);

router.delete('/:userId', deleteUser);

router.post('/:userId/friends', addFriend);

router.delete('/:userId/friends/friendId', removeFriend);

module.exports = router;