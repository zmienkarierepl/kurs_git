const utils = require('../utils');
const git = require('simple-git/promise');

const prepare = async () =>{

    const lorem_ipsum = 'Pellentesque sed felis est. Suspendisse eleifend orci lectus, maximus auctor ante iaculis lacinia. Aliquam erat volutpat. Cras dui mi, tristique in ipsum a, lobortis vehicula diam. Ut vulputate eros quis mauris fringilla suscipit. Nunc magna ex, tincidunt in pharetra a, hendrerit ut turpis. Praesent tempor faucibus ante at viverra. Cras non tellus velit. Sed porttitor aliquam lectus at sollicitudin. Suspendisse vehicula ipsum non massa pulvinar egestas. Nulla pulvinar sapien nec erat tristique, vel tincidunt diam pretium. Vestibulum et blandit elit. Duis ornare eu metus quis cursus. Fusce fringilla nec orci vestibulum porttitor.'


    await utils.writeToFile("./ex4/file.txt",lorem_ipsum);
    await utils.writeToFile("./ex4/file2.txt",lorem_ipsum);

    let repo = git('./');
    repo.add(['./ex4/file2.txt'])

};


prepare();


// zad 1 reset. zmiany w pliku zresetuj i sprawdź czy zgodne z orginałem.
// zad 2 clean. usuwa dodatkowe pliki
// zad 3 dodaj plik do staging i usuń go.
// zad 4 cofnięcie się do poprzedniego commita
