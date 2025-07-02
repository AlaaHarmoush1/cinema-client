window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response  = await axios.get(`http://localhost/cinema-server/controllers/get_movies.php?id=4`);
        const movie = response.data.Movie;

        console.log(response);
        console.log(response.data);

        document.getElementById('movie-info').innerHTML = `
        <div class="trailor-section">
        <iframe width="100%" height="708" src="${movie.trailer_url}" title="How to Dominate Every Game as Gloo (Even with Dark System Teammates)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="spaces-section">
        </div>
        <div class="info-and-seats-section">
            <div class="info-section">
                <h1>${movie.title}</h1>
                <hr>
                <h4> Description: </h4> ${movie.description}
                <hr>
                <h4>Cast <h4>
                <p> ${movie.cast} </p>
            </div>
            <div class="seets-section>
            <div>

        </div>
        `

        console.log(`There is the data: ${movie.title}`);
    } catch(error) {
        alert(error);
    }



    try{

    }catch(error){
        alert(error);
    }


});
