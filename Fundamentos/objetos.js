const prod1 = {};
prod1.nome = 'Celular';
prod1.preco = 4985.99;
prod1['Desconto legal'] = 200; // evitar
prod1['observação'] = 'promoção'; // evitar

console.log(prod1);

const prod2 = {
    nome: 'Computador',
    preco: 10000,
    obj: {
        x: 1,
        obj: {
            x: 1
        }
    }
}

console.log(prod2);

// objeto != json
json = '{ "nome": "Computador", "preco": 10000, "obj": {"x": 1, "obj": {"x": 1}}}';

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto{}
console.log(typeof Produto)
console.log(typeof new Produto)