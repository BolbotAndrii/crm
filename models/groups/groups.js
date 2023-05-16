const { model, Types, Schema } = require('mongoose')

const groups = new Schema({
    uid:              { type: Types.ObjectId },
    date:             { type: Date, default: Date.now },
    title_en:         { type: String, required: true, unique: true },
    code:             { type: String, required: true, unique: true },
    users_uid:        { type: Array, default: [] },
    pages_uid:        { type: Array, default: [] },
    components_uid:   { type: Array, default: [] }
})

module.exports = model('Groups', groups )