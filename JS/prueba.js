let peliculasArray = [];

function mostrarPeliculas(){
    let htmlContentToAppend = "";

    for(let i=0; i<peliculasArray.length; i++){
        let movie = peliculasArray[i];
        htmlContentToAppend +=`
        <div id="movies">
          <img src = "${movie.Poster}">
          <h3>${movie.Title}</h3>
         <p>Año: ${movie.Year}</p>
        </div>`
    }
    document.getElementById('lista').innerHTML = htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById('buscador').addEventListener('click', ()=> {
        let busqueda = document.getElementById('pelicula').value;

        fetch(`https://omdbapi.com/?s=${busqueda}&page=1&apikey=6fa3648a`)
        .then(response => response.json())
        .then(data => {
            if (data.Search) {
                peliculasArray = data.Search;
                mostrarPeliculas();
            }
        })
        .catch(error => {
            console.error("Error al cargar", error);
        });

    })
})