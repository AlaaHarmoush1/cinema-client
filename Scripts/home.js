const Action_section = document.getElementById('Action-movies')
const Family_section = document.getElementById('Family-movies')
const Drama_section = document.getElementById('Drama_section')
const actor_section = document.getElementById('actor-section')


window.addEventListener('DOMContentLoaded', async ()=> {
    try {
        const response  = await axios.get("http://localhost/cinema-server/controllers/get_movies.php")
        const movies = response.data.Movies;

        for(let movie of movies){

            const movieGenre = movie.genre

            if(movieGenre.includes('Action')){
                Action_section.innerHTML += `<img src="${movie.poster_url}" alt="${movie.title}" width="100%" height="100%">`
            }
            else if(movieGenre.includes('family')){
                Family_section.innerHTML += `<img src="${movie.poster_url}" alt="${movie.title}" width="100%" height="100%">`
            }
            else if(movieGenre.includes('comedy')){
                Drama_section.innerHTML += `<img src="${movie.poster_url}" alt="${movie.title}" width="100%" height="100%">`
            }

            }
    }catch(error){
        alert(error)
    }
})