$('.search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=e4cf6a1d&s=' + $('.input-keyword').val(),
        success: results => {
            const movies = results.Search;
            let cards = '';
            movies.forEach(m => {
                cards += `<div class="col-4">
                <div class="card mb-3">
                    <img class="card-img-top" src="${m.Poster}">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <p class="card-text">${m.Year}</p>
                        <a href="#" class="btn btn-primary movie-detail" data-toggle="modal" data-target="#movieDetail" data-imdbid="${m.imdbID}">See Detail</a>
                    </div>
                </div>
            </div>`
            });
            $('.movies-container').html(cards);
            $('.movie-detail').on('click', function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=e4cf6a1d&i=' + $(this).data('imdbid'),
                    success: a => {
                        const movieDetail = `<div class="container-fluid">
                        <div class="row">
                            <div class="col-3">
                                <img src="${a.Poster}" alt="" class="img-fluid">
                            </div>
                            <div class="col">
                                <ul class="list-group">
                                    <li class="list-group-item">${a.Title} ${a.Year}</li>
                                    <li class="list-group-item"><strong>Director : </strong>${a.Director}</li>
                                    <li class="list-group-item"><strong>Actors : </strong>${a.Actors}</li>
                                    <li class="list-group-item"><strong>Writer : </strong>${a.Writer}</li>
                                    <li class="list-group-item"><strong>Plot : </strong>${a.Plot}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;
                        $('.modal-body').html(movieDetail);
                    }
                });
            });
        }
    });
});