const { Schema, model } = require('mongoose');
const Thought = require('./thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trimm: true,
        },
        email: {
            type: String,
            required: 'Email address is required',
            unique: true,
            match: [`/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`, 'Please fill a valid email address'],
        },
        thoughts: [
             {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            }
        ]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
)

userSchema
.virtual('friendCount')
.get(function(){
    return this.friends;
})

const User = model('user', userSchema);

module.exports = User;