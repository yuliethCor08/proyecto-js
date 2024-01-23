async function mostrarJSON() {
    const response = await fetch("./db/db.json")
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        return mostrarJSON();
    }
}

const inpBuscar = document.getElementById("numCliente").value;
const buscar = document.getElementById("buscar");

buscar.addEventListener("click", e => {
    mostrar();
    e.stopPropagation();
});

async function mostrar() {
    const datos2 = await mostrarJSON();
    if (inpBuscar in datos2.registros.usuarioId) {
        for (let i = 1; i <= 2; i++) {
            const content = document.getElementById("content");
    
            const idUsur = `<p>Id: ${datos2.registros[i].usuarioId}<p>`
            const compras1 = `<p>Compra: <br><br>Fecha: ${datos2.registros[i].compras.fecha}<p>`
            const compras2 = `<p>perfume: ${datos2.registros[i].compras.perfumeId}<p>`
            content.innerHTML += `${idUsur + compras1 +compras2}`
            // main.appendChild(main);
        }
    }
    
    
}
// mostrar();

const datos2 = mostrarJSON();

const name = datos2.registros