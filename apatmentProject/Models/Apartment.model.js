const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApartmentSchema= new Schema({
    location:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    roomsNumber:{
        
        type: Number,
        required: true
        
    },
    available:{
        type:Boolean,
        default: true
    }
});
const Apartment = mongoose.model('apartment',ApartmentSchema);
module.exports = Apartment;