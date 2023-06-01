let listaCompras = [];
const itemInput = document.getElementById('item-input');
const agregarBtn = document.getElementById('agregar-boton');
const eliminarBtn = document.getElementById('eliminar-boton');
const comprasDiv = document.getElementById('lista-compras');

// Agregar items
function nuevoItem() {
    const nuevoItem = itemInput.value.trim();

    if (nuevoItem !== '') {
        listaCompras.push(nuevoItem);
        itemInput.value = '';
        displayLista();
    }
}

// Eliminar items
function eliminarItem() {
    const index = parseInt(itemInput.value) - 1;

    if (index >= 0 && index < listaCompras.length) {
        listaCompras.splice(index, 1);
        itemInput.value = '';
        displayLista();
    }
}

// Mostrar la lista
function displayLista() {
    comprasDiv.innerHTML = '';

    listaCompras.forEach((item, index) => {
        const listItem = document.createElement('p');
        listItem.textContent = `${index + 1}. ${item}`;
        comprasDiv.appendChild(listItem);
    });
}

// EventListener para botones
agregarBtn.addEventListener('click', nuevoItem);
eliminarBtn.addEventListener('click', eliminarItem);
