 //https://dog.ceo/api/breeds/image/random
const dogImage = document.getElementById("dogImage")
const getNewDog = document.getElementById('dogButton')

const run = () => {fetch('https://dog.ceo/api/breeds/image/random')
.then(Response=>Response.json())
.then(json => dogImage.innerHTML=`<img src="${json.message} "height=300; width=300;/>`)}
run()
getNewDog.onclick = run