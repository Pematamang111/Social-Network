const router = require('express').Router();
const { getAllUsers, getUserById, addNewUser, updateUser, deleteUser} = require('../../controllers/userController');

router.get('/', getAllUsers);

router.get('/:userId', getUserById);

router.post('/', addNewUser);

router.put('/:userId', updateUser);

router.delete('/:userId', deleteUser);

module.exports = router;