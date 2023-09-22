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

window.addEventListener('load', showBooks);
//showBooks : callback function ==> Programation asynchrone
