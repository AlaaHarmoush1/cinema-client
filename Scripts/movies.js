const movies_section = document.getElementById('movies-section')


window.addEventListener('DOMContentLoaded', async ()=> {
    try {
        const response  = await axios.get("http://localhost/cinema-server/controllers/get_movies.php")
        const movies = response.data.Movies;

        for(let movie of movies){
            movies_section.innerHTML +=  `
            <div class="movie-card" >
                <img src="${movie.poster_url}" alt="${movie.title}" width="100%" height="100%">
                <h1 class="movie-title">${movie.title} </h1>
                 <button onclick="Book(${movie.id})">Book now</button>
            </div>`
            }
    }catch(error){
        alert(error)
    }
})


function Book(id){
    localStorage.setItem('movie_id', id)
    window.location.href = `../Pages/MoviePages/movie${id}.html`
}