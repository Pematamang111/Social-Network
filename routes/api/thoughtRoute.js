const router = require('express').Router();
const { getAllThoughts, getThoughtById, addNewThought, updateThought, deleteThought } = require('../../controllers/thoughtController');

router.get('/', getAllThoughts);

router.get('/:thoughtId', getThoughtById);

router.post('/', addNewThought);

router.put('/:thoughtId', updateThought);

router.delete('/:thoughtid', deleteThought);

module.exports = router;