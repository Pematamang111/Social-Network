const connection = require('../config/connection');//importing connection
const { User, Thought } = require('../models');// importing models
const {users, thoughts} = require('./data');// importing data which is seeds
connection.on('error', (err) => err);

connection.once('open', async() => {

    console.log('connected');
    //this is like schema.sql, if this db collection exists drop it
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();//mongoose wants name to be pluralise
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }
     
    //to seed we need to create 
    const userData = await User.create(users);
       const getUsers = await User.find();
       const [ user1, user2 ] = getUsers;
     
    const thoughtData = await Thought.create(thoughts);

    await Thought.find();

    //updating user1
    await User.findOneAndUpdate(
        { _id: user1._id }, 
        { $push: { friends: user2._id } },
        { $addToSet: { thoughts: {thoughtText: 'Probably will cook chicken curry sometime'} } },

       )

       await Thought.findOneAndUpdate(
        { _id: user1._id }, 
        { $set: { reactions:{ reactionBody: 'nice',
                              username: 'kyle123' } } }
       )

     // updating user2
     await User.findOneAndUpdate(
        { _id: user2._id }, 
        { $push: { friends: user1._id } },
        { $addToSet: { thoughts: {thoughtText: 'Probably will cook fish curry sometime'} } },
     )  

    console.table(thoughtData);
    console.table(userData);
    console.info('Seeding complete! 🌱');
    process.exit(0);

})

