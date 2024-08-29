// Fake stats for demonstration purposes
setInterval(() => {
    document.getElementById('cpu').innerText = Math.floor(Math.random() * 100) + '%';
    document.getElementById('memory').innerText = Math.floor(Math.random() * 100) + '%';
    document.getElementById('network').innerText = Math.floor(Math.random() * 200) + ' MB/s';
}, 1000);

// Simulate loading code in the terminal
const codeElement = document.getElementById('code');
const codeLines = [
    'Initializing system...',
    'Accessing mainframe...',
    'Bypassing firewall...',
    'Decrypting data...',
    'Establishing connection...',
    'Loading user data...',
    'Access granted!',
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