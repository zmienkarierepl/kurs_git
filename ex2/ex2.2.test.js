const utils = require('../utils');

test('Zapisz do repozytorium pliki fileA.txt, fileB.txt, fileC.txt', async () => {

    try {
        const git = await utils.initRepo();

        var log = await git.log(['--name-only']);

        expect(log.latest.message).toContain('my first commit');
        expect(log.all[1].hash).toContain('fileA.txt');
        expect(log.all[1].hash).toContain('fileB.txt');
        expect(log.all[1].hash).toContain('fileC.txt');
    }
    catch (e) {
        console.log(e);
        expect(true).toBe(false);
    }
});