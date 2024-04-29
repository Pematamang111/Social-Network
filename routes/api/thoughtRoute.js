//importing router from express to handle routes
const router = require('express').Router();
//These are thought routes
const { getAllThoughts, getThoughtById, addNewThought, updateThought, deleteThought, removeReaction } = require('../../controllers/thoughtController');

router.get('/', getAllThoughts);

router.get('/:thoughtId', getThoughtById);

router.post('/', addNewThought);

router.put('/:thoughtId', updateThought);

router.delete('/:thoughtid', deleteThought);

router.delete('/:thoughtId/reactions/reactionId', removeReaction);

module.exports = router;