const utils = require('../utils');

test('utwórz pliki fileA.txt, fileB.txt, fileC.txt, fileD.txt', async () => {

    try {
        const git = await utils.initRepo();

        var status = await git.status();
        console.log(status)

        expect(status.created).toContain('fileA.txt');
        expect(status.created).toContain('fileB.txt');
        expect(status.created).toContain('fileC.txt');
        expect(status.created).not.toContain('fileD.txt');
        expect(status.not_added).toContain('fileD.txt');
    }
    catch (e) {
        console.log(e);
        expect(true).toBe(false);
    }
});