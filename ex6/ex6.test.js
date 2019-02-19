const utils = require('../utils');
var fs = require('fs');

test('utwórz branch o nazwie my-branch', async () => {

    var content_final = fs.readFileSync('./ex6/files/file.final.txt', 'utf8');
    var content_actual = fs.readFileSync('./ex6/file.txt', 'utf8');

    expect(content_actual).toEqual(content_final);

    content_final = fs.readFileSync('./ex6/files/file.final.js', 'utf8');
    content_actual = fs.readFileSync('./ex6/file.js', 'utf8');

    expect(content_actual).toEqual(content_final);

});