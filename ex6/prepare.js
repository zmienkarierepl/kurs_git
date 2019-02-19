const utils = require('../utils');
var fs = require('fs');

const prepare = async () =>{

   const git = await utils.initRepoInCurrentDir();

   await git.checkoutLocalBranch("my-branch");

   await git.checkout('my-branch');

   var content = fs.readFileSync('./ex6/files/file.branch.txt', 'utf8');

   await utils.writeToFile("./ex6/file.txt",content);

   content = fs.readFileSync('./ex6/files/file.branch.js', 'utf8');

   await utils.writeToFile("./ex6/file.js",content);

   await git.commit('branch version', ['./ex6/file.txt','./ex6/file.js']);

   await git.checkout('master');

   content = fs.readFileSync('./ex6/files/file.master.txt', 'utf8');

   await utils.writeToFile("./ex6/file.txt",content);

   content = fs.readFileSync('./ex6/files/file.master.js', 'utf8');

   await utils.writeToFile("./ex6/file.js",content);

   await git.commit('master version', ['./ex6/file.txt','./ex6/file.js']);

};


prepare();


// zad 1 reset. zmiany w pliku zresetuj i sprawdź czy zgodne z orginałem.
// zad 2 clean. usuwa dodatkowe pliki
// zad 3 dodaj plik do staging i usuń go.
// zad 4 cofnięcie się do poprzedniego commita
