//let idade = 60 ;
let quantidadeDeDedos = 'tres' ;
let sobrenome = undefined ;
let nome = 'Iure' ;
let eGay= false ;


let pessoa= { nome: 'Iure',
idade: 60,
eGay: false,
sobrenome: 'Blanton',
quantidadeDeDedos: 'tres',
};

console.log (pessoa);
let amigoMaisFdp = [ 'janday',18,'petrolina',false,'sobrenome' ];
console.log(amigoMaisFdp);

let nivelDeGay = 150
let tipo = nivelDeGay > 200 ? 'bixa' : 'macho' ;
console.log(tipo);

const velocidadeDoVentilador = 50 ;

console.log (velocidadeDoVentilador);

let candidatoDevendo = true;
let precisaPagarAtaxa= true;

let cobrança = candidatoDevendo && precisaPagarAtaxa ;
console.log (cobrança);

let hora = 13
if (hora > 6 && hora < 12) {
console.log('bom dia kralho');
}
else if (hora > 12 && hora < 18) {
    console.log ('boa tarde kralho');
}
else {
    console.log('boa noite linda');
}

let permissao
permissao = 'gold'
switch (permissao){
case 'comum':
    console.log('usuario comum');
    break;

    case 'gold':
    console.log('usuario gold');
    break;

    case 'premium':
    console.log('usuario premium');
    break;

    default: console.log ('usuario nao reconhecido');   

}





