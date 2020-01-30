const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('C'));
console.log(escola.indexOf('X'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log(escola.concat('!'));
console.log('Escola '.concat(escola).concat('!'));

console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\d/, 'e'));

console.log('Lucas,Daiane,Ana,Maria'.split(','));