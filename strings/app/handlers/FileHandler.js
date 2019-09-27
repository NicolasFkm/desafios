const fs = require('fs');
const {promisify} = require('util');
const writeFile = promisify(fs.writeFile);

async function saveFile(path, content)
{   
    await writeFile(path, content); 
    return true;
    
}

module.exports = {
    "writeFile": writeFile,
    "saveFile": saveFile
}