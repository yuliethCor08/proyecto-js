document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.querySelector(".container__cards");
    
    // Función para mostrar los datos en las tarjetas
    function mostrarAerolineas(aerolineas) {
      cardsContainer.innerHTML = ""; // Limpiar contenido actual
      
      aerolineas.forEach((aerolinea) => {
        const card = document.createElement("div");
        card.className = "card";
  
        const cover = document.createElement("div");
        cover.className = "cover";
        const imgBack = document.createElement("div");
        imgBack.className = "img__back";
        cover.appendChild(imgBack);
  
        const description = document.createElement("div");
        description.className = "description";
  
        const h2 = document.createElement("h2");
        h2.textContent = aerolinea.marca;
  
        const p = document.createElement("p");
        p.textContent = `Origen: ${aerolinea.origen}, Destino: ${aerolinea.destino}`;
  
        const viewButton = document.createElement("input");
        viewButton.className = "view";
        viewButton.type = "button";
        viewButton.value = "Reservar";
  
        description.appendChild(h2);
        description.appendChild(p);
        description.appendChild(viewButton);
  
        card.appendChild(cover);
        card.appendChild(description);
  
        cardsContainer.appendChild(card);
      });
    }

    //..............

    function buscarAerolineaPorNombre(aerolineas, busqueda) {
        const resultados = aerolineas.filter((aerolinea) =>
          aerolinea.destino.toLowerCase().includes(busqueda.toLowerCase())
        );
        mostrarAerolineas(resultados);
      }

      function buscarAerolineaPorOrigen(aerolineas, busqueda) {
        const resultados = aerolineas.filter((aerolinea) =>
          aerolinea.origen.toLowerCase().includes(busqueda.toLowerCase())
        );
        mostrarAerolineas(resultados);
      }

    
    
      // 
      const btnBuscar = document.getElementById("btnBuscar");
      btnBuscar.addEventListener("click", () => {
        const inputBusqueda = document.getElementById("destino");
        const busqueda = inputBusqueda.value.trim();
    
        if (busqueda !== "") {
          // Aquí deberías cargar los datos de aerolíneas desde tu API o el archivo JSON
          const urlAerolineas = "http://localhost:4000/Aerolinea";
          fetch(urlAerolineas)
            .then((response) => response.json())
            .then((data) => buscarAerolineaPorNombre(data, busqueda))
            .catch((error) =>
              console.error("Error al obtener aerolíneas:", error)
            );
        } else {
          console.error("Ingresa un nombre para buscar.");
        }
      });
    
      // ...
    
  //............

  //Busqueda por origen
  const btnBuscarOrigen = document.getElementById("btnBuscar");
  btnBuscarOrigen.addEventListener("click", () => {
    const inputBusqueda = document.getElementById("busquedaOrigen");
    const busqueda = inputBusqueda.value.trim();

    if (busqueda !== "") {
      // realizar la búsqueda por origen
      const urlAerolineas = "http://localhost:4000/Aerolinea";
      fetch(urlAerolineas)
        .then((response) => response.json())
        .then((data) => buscarAerolineaPorOrigen(data, busqueda))
        .catch((error) =>
          console.error("Error al obtener aerolíneas:", error)
        );
    } else {
      console.error("Ingresa un origen para buscar.");
    }
  });
  //......................
    
    const urlAerolineas = "http://localhost:4000/Aerolinea";
    fetch(urlAerolineas)
      .then((response) => response.json())
      .then((data) => mostrarAerolineas(data))
      .catch((error) => console.error("Error al obtener aerolíneas:", error));
  });