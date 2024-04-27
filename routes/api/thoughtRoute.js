const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send('Got Home route');
})

router.get('/:userId', async (req, res) =>{
    res.send('thought by id');
})

router.post('/', async (req, res) => {
    res.send('created thought');
})

router.put('/:userId', async (req, res) => {
    res.send('updated!')
})

router.delete('/:id', async (req, res) => {
    res.send('deleted thought');
})
module.exports = router;