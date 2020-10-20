const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let finishResult = ''
    const exprArr = expr.match(/(.{1,10})/g);
    
    for (let elem of exprArr) {
      if (elem === '**********') {finishResult+=' '
      } else {
        let result = ''
        for (let i=0;i<elem.length;i+=2) {
          if (elem[i]+elem[i+1]==='10') {
             result+='.';
          }
          if (elem[i]+elem[i+1]==='11') {
            result+='-'
          }
        }
        finishResult +=MORSE_TABLE[result]
      }
    }
   
    return finishResult
    }

module.exports = {
    decode
}