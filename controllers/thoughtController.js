module.exports = {
    getAllThoughts: async (req, res) => {
        res.send('Got Home route');
    },
    
    getThoughtById: async (req, res) => {
        res.send('thought by id');
    },

    addNewThought: async (req, res) => {
        res.send('created thought');
    },
    updateThought:  async (req, res) => {
        res.send('updated!')
    },
    deleteThought: async (req, res) => {
        res.send('deleted thought');
    }
}