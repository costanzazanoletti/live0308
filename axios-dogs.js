// quando clicco sul bottone faccio una chiamata alla api
const addBtn = document.getElementById('add');
console.log(addBtn);
addBtn.addEventListener('click', addDog);

// funzione addDog aggiunge un'immagine di cane alla gallery
function addDog() {
  console.log('aggiungo un cane');
  // con axios chiamo l'api dei cani e prendo l'url dell'immagine
  axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      // handle success
      console.log(response);
      const imgUrl = response.data.message;
      // con l'url dell'immagine creo un nuovo tag img da mettere in pagina
      createImg(imgUrl);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
// aggiunge alla gallery una img con la src passata come parametro
function createImg(url) {
  let image = document.createElement('img'); // <img>
  image.src = url;
  image.className = 'img-fluid';
  let div = document.createElement('div');
  div.className = 'col-4';
  div.appendChild(image);
  document.getElementById('gallery').appendChild(div);
}
