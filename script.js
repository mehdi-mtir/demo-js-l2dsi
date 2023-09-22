let books = [
  {id:1, titre:'Atomic habits', auteur:'James Clear', prix:30},
  {id:2, titre:'Power of habits', auteur:'Jeff Olsen', prix:25}
];

const showBooks = ()=>{
 //console.log("Afficher les livres");

 //Etape 1 : Récupérer l'emplacement ou on va charger les nouveaux éléments
  const tbody = document.querySelector('#tab1 tbody');

  //Etape 2 : Préparer le nouveau code HTML à injecter
  let newHTML = '';
  books.forEach(
    (book)=>{
      newHTML += '<tr>';
        newHTML += '<td>' + book.id + '</td>';
        newHTML += `<td>${book.titre}</td>`;
        newHTML += `<td>${book.auteur}</td>`;
        newHTML += `<td>${book.prix}</td>`;
        newHTML += `<td><button class='btn btn-primary'>Editer</button></td>`;
        newHTML += `<td><button class='btn btn-danger'>Supprimer  </button></td>`;
      newHTML += '</tr>';
    }
  );

  //Etape 3 : Injecter le nouveau code HTML dans le TBody
  tbody.innerHTML = newHTML;


}

const showAddForm = ()=>{
  document.getElementById('formAjout').classList.remove('hide');
}

const addBook = (e)=>{
  //Annuler le comportement par défaut (actualisation de la page)
  e.preventDefault();

  //Création d'un nouvel objet Book à partir des valeurs saisies dans le formulaire
  const newBook = {
    id: books[books.length-1].id + 1,
    titre : document.getElementById('titre').value,
    auteur : document.getElementById('auteur').value,
    prix : document.getElementById('prix').value
  }

  //Ajout du nouveau Book dans le tableau books
  books.push(newBook);

  //Rafraichir l'affichage du tableau HTML
  showBooks();

}

const init = ()=>{
  showBooks();
  document.getElementById('btnAjout')
    .addEventListener('click', showAddForm);
  document.getElementById('addForm').addEventListener('submit', addBook);
}

window.addEventListener('load', init);
//showBooks : callback function ==> Programation asynchrone
