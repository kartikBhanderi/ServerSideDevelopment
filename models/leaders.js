const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const leadearSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    designation : {
        type: String,
        required: true
    },
    abbr : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

var leaders = mongoose.model('leader' , leadearSchema);

module.exports = leaders;