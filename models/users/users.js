const { model, Schema } = require('mongoose')

const users = new Schema({
    name:             { type: String, required: true, unique: true  },
    login:            { type: String, required: true, unique: true },
    password:         { type: String, required: true },
    group:            { type: String, required: true },
    attached_users:   { type: Array,  default: [] }
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
})

module.exports = model('Users', users )