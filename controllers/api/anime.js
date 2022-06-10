const Anime = require('../../models/anime');
// const fetch = require('node-fetch');

module.exports = {
    newAnime,
    delAnime,
    searchAnime,
    animeDetail,
    topAnime,
    seasonalAnime,
}

const API_URL = 'https://api.jikan.moe/v4';

async function newAnime(req, res) {

}

async function delAnime(req, res) {

}

async function searchAnime(req, res) {
    console.log('hit the controller for the api');
    console.log(`${API_URL}/anime?q=${req.body.query}&order_by=ranking`)
    const result = await fetch(
        `${API_URL}/anime?q=${req.body.query}&order_by=ranking`
    ).then(res => {
        console.log(res);
        return (res.json())
    });
    console.log(result);
    res.json(result.data);
}

async function animeDetail(req, res) {

}

async function topAnime(req, res) {
}

async function seasonalAnime(req, res) {
    const date = new Date();
    const seasonLookup = ['Winter', 'Spring', 'Summer', 'Fall']
    const season = Math.floor(date.getMonth() / 4);
    const seasonalAnime = await fetch(
        `${API_URL}/seasons/${date.getFullYear()}/${seasonLookup[season]}`
    ).then(res => res.json());
    res.json(seasonalAnime.data);
}