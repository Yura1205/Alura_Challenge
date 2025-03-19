const amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let textoAmigo = inputAmigo.value.trim();

    if (textoAmigo === "") {
        mostrarPopup();
        return;
    }

    amigos.push(textoAmigo);
    inputAmigo.value = "";
    actualizarLista();
}

function mostrarPopup() {
    document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    listaAmigos.innerHTML = ""; // Limpia la lista
    resultado.innerHTML = ""; // Borra el resultado anterior
    resultado.style.display = "none"; // Oculta el resultado

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("nombre-item");

        // Botón para eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });

    listaAmigos.style.display = amigos.length > 0 ? "block" : "none"; // Oculta la lista si está vacía
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

