//controller for thought
const { Thought, User } = require('../models');

module.exports = {
    getAllThoughts: async (req, res) => {
        try { 
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    
    getThoughtById: async (req, res) => {
        try {
               const thought = await Thought.findOne({ _id: req.params.thoughtId})
               .populate('users');

               if (!thought) {
                return res.status(404).json({ message: 'Thought isnot found with this id'});
               }

               res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addNewThought: async (req, res) => {
        try {
               const thought = await Thought.create(req.body);
               res.json(thought);
        } catch (error) {
             res.status(500).json(error);
        }
    },
    updateThought:  async (req, res) => {
        try {
             const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
                if (!thought) {
                return res.status(404).json({ message: 'no thought with this Id' })
                }

                res.json(thought);
        
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteThought: async (req, res) => {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'no thought found with this Id'})
            }

         await User.deleteMany({ _id: { $in: thought.user } });
        
            res.json({ message: 'User and thought has been deleted.' })
        } catch (error) {
            res.status(500).json(error);
        }
    },
    
    removeReaction: async (req, res) => {
        try {
               const thought = await Thought.findOneAndRemove(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
               )
    
               if (!thought) {
                res.json({ message: 'no thought found with this id to delete reaction' });
               }
               re.json({ message: 'reaction from thought has been deleted' });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}