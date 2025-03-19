const amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let textoAmigo = inputAmigo.value.trim();

    if (textoAmigo === "") {
        if (!document.getElementById("popup").classList.contains("active")) {
            mostrarPopup();
        }
        return;
    }

    amigos.push(textoAmigo);
    inputAmigo.value = "";
    actualizarLista();
}

function mostrarPopup() {
    document.getElementById("popup").classList.add("active");
}

function cerrarPopup() {
    document.getElementById("popup").classList.remove("active");
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    listaAmigos.innerHTML = ""; // Limpia la lista
    resultado.innerHTML = ""; // Borra el resultado anterior
    resultado.style.display = "none"; // Oculta el resultado

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.classList.add("nombre-item");

        // Contenedor para el nombre y el botón
        const divItem = document.createElement("div");
        divItem.classList.add("amigo-item");

        const spanNombre = document.createElement("span");
        spanNombre.textContent = amigo;
        spanNombre.classList.add("amigo-nombre");

        // Botón para eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.onclick = () => eliminarAmigo(index);

        divItem.appendChild(spanNombre);
        divItem.appendChild(btnEliminar);
        li.appendChild(divItem);
        listaAmigos.appendChild(li);
    });

    listaAmigos.style.display = amigos.length > 0 ? "block" : "none";
}


function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    const resultado = document.getElementById("resultado");
    const listaAmigos = document.getElementById("listaAmigos");

    // Seleccionar un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en lugar de la lista
    resultado.textContent = `🎉 El amigo secreto es: ${amigoSeleccionado} 🎉`;
    resultado.style.display = "block";
    resultado.classList.add("resultado-estilo");

    // Vaciar la lista de amigos
    amigos.length = 0; // Borra todos los nombres del array
    listaAmigos.innerHTML = ""; // Limpia la lista en la interfaz

    // Ocultar la lista
    listaAmigos.style.display = "none";
}

