const queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('bookId');



$(document).ready(function(){

    $.getJSON('/v2/books/'+ id,makePage);

});

function makePage(data){
   for(let books of data){
         $('#prova').append('<li>' + books.title + ' ' + books.author + '</li>')
   } 
}

