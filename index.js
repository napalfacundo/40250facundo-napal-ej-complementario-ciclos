let cantTareas = Number(prompt("Cantidad de tareas:"));
let listaTareas = "Lista Tareas:\n"

for (i=0; i<=cantTareas-1; i++) {
    let tituloTarea = prompt(`Ingrese titulo de la tarea numero ${i+1}`);
    listaTareas += `Tarea nº ${i+1}:  ${tituloTarea}\n`;
}

console.log(listaTareas);