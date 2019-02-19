const utils = require('../utils');

test('usuń file2.txt ze staging-u', async () => {

    try {
        const git = await utils.initRepoInCurrentDir();

        var status = await git.status();

        expect(status.not_added).toContain('ex4/file2.txt');

    }
    catch (e) {
        console.log(e);
        expect(true).toBe(false);
    }
});