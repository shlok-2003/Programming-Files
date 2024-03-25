const os = require("os");

const totalMemory = os.freemem();

console.log(`${totalMemory / 3}`);
console.log("Hello World")