const peso1 = 1.2;

const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));

const avaliacao1 = 8.182;
const avaliacao2 = 3.567;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(total, media);
console.log(media.toFixed(2));
console.log(media.toString());

console.log(7 / 0);
console.log("10" / 2);
console.log("10,2" / 2);
console.log("Lucas" * 2);
console.log(0.7 + 0.1);
console.log((10.9888).toFixed(2));

const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area);