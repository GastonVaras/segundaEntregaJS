// Array para almacenar los elementos de la lista de compras
const listaCompras = [];

// Función para agregar un elemento a la lista de compras
function agregarElemento() {
  const elemento = prompt('Ingrese un elemento para agregar a la lista de compras:');
  if (elemento) {
    listaCompras.push(elemento);
    console.log(`"${elemento}" ha sido agregado a la lista de compras.`);
  } else {
    console.log('No ingresaste ningún elemento.');
  }
}

// Función para eliminar un elemento de la lista de compras
function eliminarElemento() {
  const elemento = prompt('Ingrese el número del elemento que desea eliminar de la lista de compras:');
  const index = parseInt(elemento) - 1;
  if (index >= 0 && index < listaCompras.length) {
    const elementoEliminado = listaCompras.splice(index, 1);
    console.log(`"${elementoEliminado}" ha sido eliminado de la lista de compras.`);
  } else {
    console.log('El número de elemento ingresado es inválido.');
  }
}

// Función para mostrar la lista de compras
function mostrarLista() {
  if (listaCompras.length === 0) {
    console.log('La lista de compras está vacía.');
  } else {
    console.log('Lista de Compras:');
    listaCompras.forEach((elemento, index) => {
      console.log(`${index + 1}. ${elemento}`);
    });
  }
}

// Menú de opciones
function mostrarMenu() {
  console.log('--- MENÚ ---');
  console.log('1. Agregar elemento');
  console.log('2. Eliminar elemento');
  console.log('3. Mostrar lista de compras');
  console.log('4. Salir');
}

// Función principal para manejar el programa
function iniciarPrograma() {
  let opcion;
  do {
    mostrarMenu();
    opcion = prompt('Ingrese el número de la opción que desea ejecutar:');
    switch (opcion) {
      case '1':
        agregarElemento();
        break;
      case '2':
        eliminarElemento();
        break;
      case '3':
        mostrarLista();
        break;
      case '4':
        console.log('¡Hasta luego!');
        break;
      default:
        console.log('Opción inválida. Por favor, ingrese una opción válida.');
    }
  } while (opcion !== '4');
}

// Ejecutar el programa
iniciarPrograma();
