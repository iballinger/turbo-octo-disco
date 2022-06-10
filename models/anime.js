const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeSchema = new Schema({
    id: {type:Number},
    title: {type:String},
    picture: {type:String},
    synopsis: {type:String},
    rating: {type:Number},
});

module.exports = mongoose.model('Anime', animeSchema);