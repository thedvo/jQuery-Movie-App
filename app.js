
// when user submits the form, it creates a new table row and resets the form

$("#submit").click(function(e){
    e.preventDefault();

    let movie = $("#movie-input").val();
    let rating = $("#ratings-input").val();

    let movieEntry = {movie, rating};
    const appendEntry = createMovieList(movieEntry);

    $('#table-body').append(appendEntry);
    $('form').trigger("reset");

    // when the remove button is clicked on a movie, remove the row.
    $('.removeBtn').click(function(){
    $(this).parents('tr').remove();
    })
})

// function creates the table row with the inputted data
createMovieList = (entry) => {
    return `
        <tr>
            <td>${entry.movie}</td>
            <td>${entry.rating}</td>
            <td>
                <button class="removeBtn"> X </button>
            </td>
        </tr>
    `;
}
