const utils = require('../utils');

test('czy projekt posiada lokalne repozytorium?', async () => {

    try {
        const git = await utils.initRepo();

        git.status();
        expect(true).toBe(true);
    }
    catch (e) {
        console.log(e);
        expect(true).toBe(false);
    }
});