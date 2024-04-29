const { User, Thought } = require('../models');
//controller for user
module.exports = {
    getAllUsers:  async (req, res) => {
       try {
        const users = await User.find();
            res.json(users);
    } catch (error) {
            res.status(500).json(error);
    }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.params.userId}) 
            .populate('thoughts');

            if (!user) {
                return res.json({ message: 'no user found with this id' });
            }

            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addNewUser: async (req, res) => {
        try {
           const user = await User.create( req.body );
        res.json(user);

        } catch (error) {
        res.status(500).json(error);
        }
    },

    updateUser: async (req, res) => {
        try {
             const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
             )

             if (!user) {
                return res.json({ message: 'no user found with this id to update' });
             }

             res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteUser: async (req, res) => {
             try {
                  const user = await User.findOneAndRemove(
                    { _id: req.params.userId }
                  )

                  if (!user) {
                   return res.json({ message: 'no user found' });
                  }

                  const thought = await Thought.findOneAndUpdate(
                    { _id: req.paramas.userId },
                    { $pull: { _id: req.params.userId } },
                    { new: true }
                  )

                  if (!thought) {
                    return res.json({ message: 'user deleted but no thought found' })
                  }
                  res.json({ message: 'user has been deleted' })
             } catch (error){
                res.status(500).json(error);
             }
    },

    addFriend: async (req, res) => {
        try {
              const friend = await User.findOneAndUpdate(
                { _id: req.params.userId }, 
                { addToSet: {friends: req.params.friendId }},
                { new: true }
            );

            if (!friend) {
                return res.status(404).json({ message: 'No user with this id!' });
              }
        
              res.json(friend);
                 
        } catch (error) {
            res.status(500).json(error);
        }
    },

    removeFriend: async (req, res) => {
        try {
               const user = await User.findOneAndRemove(
                { _id: req.params.userId },
                { $pull: req.params.friendId },
                { new: true }
               )
    
               if (!user) {
                res.json({ message: 'no user found with this id to remove friend' });
               }
               res.json({ message: 'friend of this user has been deleted' });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}