const heroApi = 'https://www.superheroapi.com/api.php/657798156278634/'


const herobtn = document.getElementById('Btn')

const searchedHero = document.getElementById('sH')
const searchBtn = document.getElementById('Search')


const randomHero = (id) => {
    fetch(`${heroApi}${id}`)
    .then(response => response.json())
    .then(json=>{ showHeroInfo(json) })   
}

const showHeroInfo = (char) => {
    const image = document.getElementById('heroImage')
    const heroName = document.getElementById('name')
    const heroStats = document.getElementById('stats') 

    const statsToEmoji = {
        intelligence : '🧠',
        strength: '💪',
        speed: '⚡',
        durability: '🏋️',
        power: '🔥',
        combat: '🥷',
    }

    heroName.innerHTML = `<h2>${char.name}</h2>`;
    const img = char.image.url;
    image.innerHTML = `<img src='${img}' height=300 width=300/>`
    const stats = Object.keys(char.powerstats).map(
        stats=>{
            return  `<p>${statsToEmoji[stats]} ${stats.toUpperCase()}: 
            (${char.powerstats[stats]})</p>`}).join('')
    heroStats.innerHTML = stats;
}
const getRandom = () => {
    return Math.ceil(Math.random()*731)
}
const searchHero = (name) => {
    fetch(`${heroApi}/search/${name}`)
    .then(response => response.json())
    .then(json=>{showHeroInfo(json.results[0]) })
}

searchBtn.onclick = () => searchHero(searchedHero.value)  
herobtn.addEventListener('click',() => randomHero(getRandom()))