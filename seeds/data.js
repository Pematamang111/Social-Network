const { User, Thought } = require("../models");

const users = [
    {
        username: 'Abdul123',
        email: 'abdul123@gamil.com',
        // thoughts: [
        //     {thoughtText: 'Probably will cook chicken curry sometime',
        //     createdAt: '',
        //     reactions: [
        //         {reactionBody: 'nice',
        //          username: 'kyle123',
        //          createdAt: ''}
        //     ]},

        //  ],
        // friends: [
        //     {}
        // ]
    },
    {
        username: 'Nimshe123',
        email: 'nimshe123@gamil.com',
        // thoughts: [
        //     {thought: 'Probably will cook chicken Masala sometime'},
        // ],
        // friends: [
        //     {
        //       friend: 'Abdul',  
        //     }
        // ]
    }
]

const thoughts = [
        {thoughtText: 'Probably will cook chicken curry sometime',
        createdAt: '',
        reactions: [
                {reactionBody: 'nice',
           username: 'kyle123',
          createdAt: ''}
       ]},
]

module.exports = {users, thoughts};