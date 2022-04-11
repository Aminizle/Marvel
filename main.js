document.querySelector('.btn').addEventListener('click', getMarvel() )

function getMarvel(){
fetch(`https://mcuapi.herokuapp.com/api/v1/movies`)
.then(  res => res.json())
.then(data => {
    console.log(data)
});
}