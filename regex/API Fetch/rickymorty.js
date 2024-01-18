async function getRickymorty(id) {
    const response  = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        return getRickymorty();
    }
}

async function mostrar() {
    for (let i = 1; i <= 6; i++) {
        const rickymorty = await getRickymorty(i);
        const main = document.querySelector("main")

        const img = `<img src="https://rickandmortyapi.com/api/character/avatar/${i}.jpeg">`
        const name = `<p>${rickymorty.name}<p>`
        const status = `<p>${rickymorty.status}<p>`
        main.innerHTML += `${img + name + status}`
        // main.appendChild(main);
    }
}
mostrar();