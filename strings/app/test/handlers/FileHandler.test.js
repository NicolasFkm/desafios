const assert = require('assert');
const FileHandler = require('../../handlers/FileHandler');
const fs = require('fs');
const {clearFolder} = require('../testHelpers/FileHelper');
const folderPath = "./test/testFiles/";


describe('FileHandler Unit Tests', function () {
    
    beforeEach(function() {
        clearFolder(folderPath);
    });

    describe('saveFile method', function () {
        it('should create file when the path are valid.', function () {
            
            // Arrange
            let fileName = `${folderPath}saveFile.txt`;
            let content = "Content Example";
            
            // Act
            FileHandler.saveFile(fileName, content);

            // Assert
            assert.equal(fs.existsSync(fileName), true);
        });

        it('should not create file when the path are invalid.', function () {
            
            // Arrange
            let fileName = `${folderPath}./teste/teste/saveFile.txt`;
            let content = "Content Example";
            
            // Act
            FileHandler.saveFile(fileName, content).catch(()=>{});

            // Assert
            assert.equal(fs.existsSync(fileName), false);
        });

    });


});
