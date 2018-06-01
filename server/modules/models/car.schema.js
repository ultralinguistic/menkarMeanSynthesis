let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

const carSchema = new Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    odometer: { type: Number, required: true },
    year: { type: Number, required: true }
}); //end car schema

module.exports = mongoose.model( 'car', carSchema );