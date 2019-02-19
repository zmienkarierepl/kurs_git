var fs = require('fs');


test('usuń pliki, które nie należą do projektu', async () => {

    try {

        const pathToFile = require("path").resolve('./ex4/file2.txt');

        if (fs.existsSync(pathToFile)) {
            expect(true).toBe(false);
        }else{
            expect(true).toBe(true);
        }


    }
    catch (e) {
        console.log(e);
        expect(true).toBe(false);
    }
});