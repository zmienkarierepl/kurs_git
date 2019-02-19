const utils = require('../utils');

test('utwórz branch o nazwie my-branch', async () => {

    try {
        const git = await utils.initRepoInCurrentDir();

        var summary = await git.branchLocal();
        expect(summary.branches['my-branch']).toBeDefined();
        expect(summary.branches['my-branch'].name).toEqual('my-branch');
        await git.checkout('my-branch');

        var status = await git.status();
        expect(status.created).toContain('ex5/file2.txt');
    }
    catch (e) {
        console.log(e);
        expect(true).toBe(false);
    }
});