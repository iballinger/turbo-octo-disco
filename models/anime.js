const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeSchema = new Schema({
    id: {type:number},
    title: {type:string},
    picture: {type:string},
    synopsis: {type:string},
    rating: {type:number},
});

module.exports = mongoose.model('Anime', animeSchema);