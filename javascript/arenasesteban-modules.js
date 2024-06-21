const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fs = require('fs');

module.exports = { rl, fs };