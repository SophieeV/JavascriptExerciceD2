
let movies = ['Le Silence des agneaux', 'Orange Mécanique', 'Shinning'];

function btn1() {
  document.getElementById('btn1');
alert(movies);
}

function btn(){
  let NewMovie = document.getElementById('input').value;
  movies.unshift(NewMovie);
  alert (NewMovie + ' ajouté au tableau')

}
//appuyer sur le bouton ajouter (btn) la value de l'input doit s'ajouter au tableau
