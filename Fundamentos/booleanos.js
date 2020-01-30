let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

// são iguais a true
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

// são iguais a false
console.log(!!0);
console.log(!!' ');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

let nome = '';
console.log(nome || 'Desconhecido');