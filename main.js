document.querySelector('button').addEventListener('click', getMarvel)
window.onload = getMarvel


function getMarvel(){
let index = 18


fetch(`https://mcuapi.herokuapp.com/api/v1/movies/${index}`)
.then( res => res.json())
    .then( data => {
        console.log(data)
        document.querySelector('img').src = data.cover_url
        document.querySelector('.description').innerText = data.overview
        // document.querySelector('.video').src = data.trailer_url
        document.querySelector('.mTitle').innerText = data.title
        document.querySelector('.release').innerText = data.release_date
        document.querySelector('.directed').innerText = `Directed by: ${data.directed_by}`
        
});
}

