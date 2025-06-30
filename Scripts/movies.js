window.addEventListener('DOMContentLoaded', async ()=> {
    try {
        const Movies = await axios.get("http://localhost/Backend/cinema-server/controllers/get_movies.php")
        console.log(Movies.data.Movies);
    }catch(error){
        alert(error)
    }
})