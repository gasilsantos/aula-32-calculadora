
//variavel de escopo global
let a = 10;

const pi = 3.141

console.log("pi:" , pi)

function multiplica(b){
    //variavel de escopo de bloco
    let a = b * 2;
    console.log("dentro da função:" , a);

}

multiplica(a)
console.log("fora da função:" , a);
