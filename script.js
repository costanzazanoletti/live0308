// Esempio codice asincrono
function readAFile() {
  setTimeout(() => {
    console.log('Il contenuto del file è bla bla bla...');
  }, 3000);
}

console.log('Ora apro un file');
readAFile();
console.log("e adesso faccio qualcosa d'altro");
