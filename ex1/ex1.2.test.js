const utils = require('../utils');

test('czy projekt posiada zdalne repozytorium/remote ?', async () => {

    try {
        const git = await utils.initRepo();

        const remotes =await git.getRemotes([]);
        expect(remotes.length).toBeGreaterThan(0);
    }
    catch (e) {
        expect(true).toBe(false);
    }
});