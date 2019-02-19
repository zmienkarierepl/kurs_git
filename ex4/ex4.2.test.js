const utils = require('../utils');

test('usuń zmiany w file1.txt ze staging-u', async () => {

    try {
        const git = await utils.initRepoInCurrentDir();

        var status = await git.status();

        expect(status.modified).not.toContain('ex4/file.txt');
    }
    catch (e) {
        console.log(e);
        expect(true).toBe(false);
    }
});