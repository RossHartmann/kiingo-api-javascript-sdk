import KiingoAPI from '../lib';
const myKiingoAPIInstance = new KiingoAPI();

document.querySelector("body").innerHTML = `<h1>Hello World!</h1>`;

console.log("myKiingoAPIInstance", myKiingoAPIInstance);

myKiingoAPIInstance.initialize();