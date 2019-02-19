var fs = require('fs');
const utils = require('../utils');

test('merge do master', async () => {

    const pathToFile = require("path").resolve('./ex5/file2.txt');
    expect(fs.existsSync(pathToFile)).toBeTruthy()

    const git = await utils.initRepoInCurrentDir();

    var log = await git.log();
    expect(log.all[0].message).toContain('new file');

});