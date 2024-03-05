var clc = require('cli-color');
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;
var clc = require('cli-color');

var msg = clc.xterm(202).bgXterm(236);

console.log(msg("Texto laranja com fundo cinza"));

console.log(clc.green("Mensagem verde"));
console.log(clc.red("Mensagem vermelha"));
console.log(clc.blue("Mensagem azul"));
console.log(clc.yellow("Mensagem amarela"));
console.log(clc.red("vemelho " + clc.blue(" azul ") + "vermelho"));
console.log(clc.red("vemelho") + " simples " + clc.blue("azul"));
console.log(clc.red.bgWhite.underline("Underline texto vermelho comfundo branco"));
console.log(clc.red("Texto em vermelho"));

console.log(error("Error!"));
console.log(warn("Warning!"));
console.log(notice("Notice!"));

process.stdout.write(
    clc.columns([
        [clc.bold("Primeiro Nome"), clc.bold("Sobrenome"), clc.bold("Idade")],
        ["John", "Doe", 34],
        ["Martha", "Smith", 20],
        ["Jan", "Kowalski", 30]
    ])
);