const utils = require('../utils');

test('usuń branch o nazwie my-branch i cofnij ostatni commit', async () => {

    try {
        const git = await utils.initRepoInCurrentDir();

        var summary = await git.branchLocal();
        expect(summary.branches['my-branch']).toBeUndefined();

        var log = await git.log();
        expect(log.all[0].message).not.toContain('new file');

    }
    catch (e) {
        console.log(e);
        expect(true).toBe(false);
    }
});