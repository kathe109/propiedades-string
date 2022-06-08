/*El lastIndexOf()método devuelve el índice (posición) de la última aparición de un valor especificado en una cadena.

El lastIndexOf()método busca la cadena desde el final hasta el principio.

El lastIndexOf()método devuelve el índice desde el principio (posición 0).

El lastIndexOf()método devuelve -1 si no se encuentra el valor.

El lastIndexOf()método distingue entre mayúsculas y minúsculas.*/

let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("planet");
console.log(result);

let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("Planet");
console.log(result);