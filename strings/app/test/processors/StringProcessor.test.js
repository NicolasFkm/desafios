const assert = require('assert');
const {expect} = require('chai');
const StringProcessor = require("../../processors/StringProcessor");

describe('StringProcessor Unit Tests', function () {

    describe("formatText Method", function () {

        it("should break line when text has more than line length characters", function () {
            // Arrange
            let text = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
            let lineLength = 40;
            const stringProcessor = new StringProcessor(lineLength);
            
            // Act
            let formattedText = stringProcessor.formatText(text);

            // Assert
            assert.equal(formattedText.match(/\n/g).length, 1);
        });

        it("should not break line when text has less than line length characters", function () {
            // Arrange
            let text = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
            let lineLength = 100;
            const stringProcessor = new StringProcessor(lineLength);
            
            // Act
            let formattedText = stringProcessor.formatText(text);

            // Assert
            assert.equal(formattedText.match(/\n/g), null);
        });

        it("should throw error when text is null", function () {
            // Arrange
            let text = null;
            let lineLength = 40;
            const stringProcessor = new StringProcessor(lineLength);
            
            // Act/ Assert
            expect(() => stringProcessor.formatText(text)).to.throw(Error);
        });

    });

});