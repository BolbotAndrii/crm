const { model, Types, Schema } = require('mongoose')

const users = new Schema({
    'uid':              { type: Types.ObjectId },
    'date':             { type: Date,   default: Date.now },
    'name':             { type: String, required: true, unique: true  },
    'login':            { type: String, required: true, unique: true },
    'password':         { type: String, required: true, unique: true },
    'attached_users':   { type: Array,  default: [] }
})

module.exports = model('Users', users )