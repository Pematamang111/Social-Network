module.exports = {
    getAllUsers:  async (req, res) => {
        res.send('Get users');
    },
    getUserById: async (req, res) => {
        res.send('get user by id')
    },
    addNewUser: async (req, res) => {
        res.send('Posted new user');
    },
    updateUser: async (req, res) => {
        res.send('updated user');
    },
    deleteUser: async (req, res) => {
        res.send('deleted user');
    }
}