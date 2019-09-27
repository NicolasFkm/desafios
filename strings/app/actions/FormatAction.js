const StringProcessor = require('../processors/StringProcessor');
const Config = require('../config/configuration');
const FileHandler = require('../handlers/FileHandler');
const moment = require('moment');

function formatTextAction(text, length) 
{
    try
    {
        console.log("Processing text...");
    
        if(!length || Number(length) <= 0){
            length = Config.LineLenght;
        }

        let stringProcessor = new StringProcessor(Number(length));
        let fileName = `${Config.FormatedFileName}${moment(new Date()).format(Config.DateFormat)}.txt`;
    
        FileHandler.saveFile(fileName, stringProcessor.formatText(text))
        .then(()=>{
            console.log("Text formatted with success.");
        })
        .catch((err) => {
            console.log("Oops! An error ocurred during the process.");
            console.log(err);
        });
    }
    catch(error)
    {
        console.log(error);
    }
}

function justifyTextAction(text, length)
{
    try 
    {
        console.log("Processing text...");
        
        if(!length || Number(length) <= 0){
            length = Config.LineLenght;
        }

        let stringProcessor = new StringProcessor(Number(length));
        let fileName = `${Config.JustifiedFileName}${moment(new Date()).format(Config.DateFormat)}.txt`;
        
        FileHandler.saveFile(fileName, stringProcessor.justifyText(stringProcessor.formatText(text)))
            .then(()=>{
                console.log("Text formatted with success.");
            })
            .catch((err) => {
                console.log("Oops! An error ocurred during the process.");
                console.log(err);
            });
    } 
    catch (error) 
    {
        console.log(error);    
    }
}

module.exports = {
    formatTextAction: formatTextAction,
    justifyTextAction: justifyTextAction
}