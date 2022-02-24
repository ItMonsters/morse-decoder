const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let text = "";
  let string = "";
  for (let i = 0; i < expr.length; i += 10) {
    text = expr.slice(i, i + 10);
    if (text == "**********") {
      string += " ";
    } else {
      let letter = "";
      let result = "";
      for (let j = 0; j < text.length; j += 2) {
        letter = text.slice(j, j + 2);
        if (letter == "10") {
          result += ".";
        }
        if (letter == "11") {
          result += "-";
        }
      }
      string += MORSE_TABLE[result];
    }
  }
  return string;
}

module.exports = {
  decode,
};
