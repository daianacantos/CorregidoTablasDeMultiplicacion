/* Estructuras de Control
Tablas de Multiplicación
• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor.
Ingrese el número: 9
Ingrese hasta qué número: 4
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36 */
let numero1: number = Number(prompt("ingrese numero"));
let numero2: number = Number(prompt("ingrese hasta que numero"));
for (let i = 1; i <= numero2; i++) {
  console.log(numero1 + "x" + i + "=" + numero1 * i);
}
