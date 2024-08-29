// Fake stats for demonstration purposes
setInterval(() => {
    document.getElementById('cpu').innerText = Math.floor(Math.random() * 100) + '%';
    document.getElementById('memory').innerText = Math.floor(Math.random() * 100) + '%';
    document.getElementById('network').innerText = Math.floor(Math.random() * 200) + ' MB/s';
}, 1000);

// Simulate loading code in the terminal
const codeElement = document.getElementById('code');
const codeLines = [
    'LOHH BUT MO PININDOT...',
    'HALAKA...',
    'SUS BALA KADYAN HACK KITA...',
    'Decrypting data...',
    'Prepairing to crack',
    'Facebook account password',
    'Username initializing',
    'Establishing connection...',
    'Loading user data...',
    'Access granted!',
    'CHAROT LANG BOSS',
    'ILOVEYOU MWAHH',
    'NYAHAHAHAHA',
    'KILIG KA NANAMAN',
];

let line = 0;
const interval = setInterval(() => {
    if (line < codeLines.length) {
        codeElement.innerText += `\n${codeLines[line]}`;
        line++;
    } else {
        clearInterval(interval);
    }
}, 1000);
