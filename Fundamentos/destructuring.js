const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [1, 2, 3, 4]
console.log(n1, n3, n5, n6)
const [, [, nota]] = [[1, 2, 3], [4, 5, 6]]
console.log(nota)

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const x = { max: 50, min: 40}
console.log(rand(x))
console.log(rand({ max: 50, min: 40}))
console.log(rand({ max: 50}))
console.log(rand({}))
// console.log(rand()) não funciona

function rand2([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40]))
