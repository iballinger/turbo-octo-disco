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
async function topAnime(req, res) {
}
async function topAnime(req, res) {
}

async function searchAnime(req, res) {
    const result = await fetch(
        `${API_URL}/anime?q=${req.body.search}&order_by=ranking`
    ).then(res => {
        return (res.json())
    });
    res.json(result.data);
}

async function animeDetail(req, res) {
    console.log(`api animeDetail hit`);
    console.log(`req.body.params: ${req.body.params}`)
    const anime = await fetch(
        `${API_URL}/anime/${req.body.params}`
    ).then(res => {
        console.log(res.json());
        return (res.json());
    });
    console.log(anime.data);
    res.json(anime.data);
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