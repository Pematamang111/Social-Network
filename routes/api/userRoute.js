const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send('Get users');
})

router.get('/:userId', async (req, res) => {
    res.send('get user by id')
})

router.post('/', async (req, res) => {
    res.send('Posted new user');
})

router.put('/:userId', async (req, res) => {
    res.send('updated user');
})

router.delete('/:userId', async (req, res) => {
    res.send('deleted user');
})

module.exports = router;