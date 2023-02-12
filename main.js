
document.querySelector('.backBtn').addEventListener('click', lastMarvel)
document.querySelector('.forwardBtn').addEventListener('click', nextMarvel)
window.onload = getMarvel //starts the user on their journey


let index = 1 //start at the first movie

function lastMarvel(){
if(index>1 && index<41){ //prevents the user from going beyond the first & last movie
    index--
    getMarvel(index)
}}

function nextMarvel(){
    if(index>0 && index<40){ 
        index++
        getMarvel(index)
}}

function getMarvel(){


fetch(`https://mcuapi.herokuapp.com/api/v1/movies/${index}`)
.then( res => res.json())
    .then( data => {
        console.log(data)
        document.querySelector('img').src = data.cover_url
        document.querySelector('.description').innerText = data.overview        
        document.querySelector('.mTitle').innerText = data.title
        document.querySelector('.release').innerText = `Release date: ${data.release_date}`
        document.querySelector('.directed').innerText = `Directed by: ${data.directed_by}`
        document.querySelector('iframe').src = data.trailer_url        
        document.querySelector('.trailer').src = data.trailer_url        
        document.querySelector('.trailer').innerText = `Watch the Trailer for ${data.title}`
        document.querySelector('.imdb').innerText = `Explore ${data.title} on IMDB`
        document.querySelector('.imdb').href = `https://www.imdb.com/title/${data.imdb_id}`

});
}

