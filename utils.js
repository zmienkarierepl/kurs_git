const git = require('simple-git/promise');
const config = require('./config');
const fs = require('fs');

initRepo = async () =>{

    var path = config.default_directory;

    if (process.env.npm_config_path){
        path = process.env.npm_config_path;
    }

    const pathToRepo = require("path").resolve(path);

    if (!fs.existsSync(pathToRepo)) {

        console.log(`========================`);
        console.log(`path ${pathToRepo} do not exists`);
        console.log(`========================`);
        console.log(``);

        process.exit(1);
    }

    return git(pathToRepo);


};

initRepoInCurrentDir = async () =>{


    const pathToRepo = require("path").resolve('./');

    return git(pathToRepo);


};


writeToFile = async (file,text) => {


    const pathToFile = require("path").resolve(file);


    return new Promise(function(resolve, reject) {
        fs.writeFile(pathToFile, text, (err,data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });

};


module.exports = {
    initRepo,
    initRepoInCurrentDir,
    writeToFile
}