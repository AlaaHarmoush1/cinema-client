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
                 <button onclick="Book(${movie.id} , ${movie.title}, ${movie.trailor_url})">Book now</button>
            </div>`
            }
    }catch(error){
        alert(error)
    }
})


function Book(id, title, trailor){
    localStorage.setItem('movie_id', id)
    localStorage.setItem('movie_title', title)
    localStorage.setItem('movie_trailor', trailor)
    window.location.href = `../Pages/MoviePages/movie${id}.html`
}