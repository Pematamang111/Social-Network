const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
           thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength:  280,
           },
           createdAt: {
            type: Date,
            default: Date.now,//use getter method to format timestamp
           },
           username: [
            {//the user that created this thought 
            type: Schema.DataTypes.ObjectId,
            ref: 'user',
           }
        ],
           reactions: [reactionSchema],
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false,
}
) 

thoughtSchema
.virtual('reactionCount')
.get(function() {
    return this.thoughtText; //retrieves the length of the thought's reactions array field on query.
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;