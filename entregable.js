// Crear arreglos usando funciones tipo flecha
const arreglo1 = () => [1, 2, 3, 4, 5];
const arreglo2 = () => ['a', 'b', 'c', 'd', 'e'];
const arreglo3 = () => [true, false, true, false];
const arreglo4 = () => [10, 20, 30, 40, 50];

// Aplicar métodos de arreglos a los arreglos creados
const resultado1 = arreglo1().map(num => num * 2); 
const resultado2 = arreglo2().filter(letra => letra !== 'a'); 
const resultado3 = arreglo3().every(valor => valor === true); 
const resultado4 = arreglo4().reduce((total, num) => total + num, 0); 

// Mostrar resultados
console.log("Resultado del método 1:", resultado1);
console.log("Resultado del método 2:", resultado2);
console.log("Resultado del método 3:", resultado3);
console.log("Resultado del método 4:", resultado4);
