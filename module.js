//modules

const sayHi = (name)=> {
    console.log ("Hello" + name);
}

const number = require ('./moduleHelp');
console.log (number.num);

const array = require ('./alternativemodule');
console.log (array)
