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
    ' ':      ' ',
};

function decode(expr) {
    let exprArr = [];
    for (let i = 0; i < expr.length; i++) {
        let charCount = Math.floor(i/10);
        exprArr[charCount] ? exprArr[charCount]+=expr[i]: exprArr[charCount]=expr[i];
    }
    const newArr = exprArr.map(value => value.replace(/^0*/, ""));
    return generatePairDigitArray(newArr).map(value => MORSE_TABLE[value]).join('');
}

function generatePairDigitArray( arr ) {
    arr = arr.map(value => {
        return (value === '**********') ? ' ' : value.split('');
    });

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let charCount = Math.floor(j/2);
            if (!(newArr[i])) newArr.push([]);
            newArr[i][charCount] ? newArr[i][charCount] += ( arr[i][j] ) : newArr[i][charCount] = ( arr[i][j] );
            if (newArr[i][charCount].length === 2) {
                newArr[i][charCount] = newArr[i][charCount]==='10' ? '.' : '-'
            }
        }
        newArr[i] = newArr[i].join('');
    }
    return newArr
}


module.exports = {
    decode
};