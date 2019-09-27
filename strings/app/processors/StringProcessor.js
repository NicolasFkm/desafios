class StringProcessor {
    constructor(lineLength) {
        this._lineLenght = lineLength;
        this._text = "";
    }

    formatText(textContent) {
        if (!textContent)
            throw new Error("Invalid text");
        
        this.text = "";
        const textWords = textContent.split(" ");
        let currentLineLength = 0;

        for (let index = 0; index < textWords.length; index++) {
            const word = textWords[index];

            if ((currentLineLength + (word.length + 1)) >= this.lineLenght) {
                this.text = this.text.replace(/\s+$/, "\n")
                currentLineLength = 0;
            }

            this.text += word + " ";
            currentLineLength += word.length + 1;
        }

        return this.text;
    }

    justifyText(textContent) {
        if (!textContent)
            throw new Error("Invalid text");

        this.text = "";

        const textLines = textContent.split("\n");
        let textWords = {};

        for (let index = 0; index < textLines.length; index++) {
            const line = textLines[index];
            textWords[index] = {};
            textWords[index].words = line.split(" ");
            textWords[index].blankSpaces = this.lineLenght - line.length;
        }

        for (let index = 0; index < Object.keys(textWords).length; index++) {
            if (index == Object.keys(textWords).length - 1) {
                this.text += textWords[index].words.join(" ");
                break;
            }

            let blankSpaces = textWords[index].blankSpaces;
            let wordsLength = textWords[index].words.length;

            let wordCount = 0;
            while (blankSpaces > 0) {
                textWords[index].words[wordCount] = textWords[index].words[wordCount].concat(" ");
                blankSpaces--;
                wordCount++;
                if (wordCount == (wordsLength - 1))
                    wordCount = 0;
            }
            this.text += textWords[index].words.join(" ") + "\n";
        }

        return this.text;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get lineLenght() {
        return this._lineLenght;
    }

    set lineLenght(value) {
        this._lineLenght = value;
    }
}

module.exports = StringProcessor;