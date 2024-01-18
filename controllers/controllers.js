import { post } from "./../models/post.js";
import { get } from "./../models/get.js";
import { put } from "./../models/put.js";
import { delet } from "./../models/delete.js";

// import { llenarFormulario, llenarSelect } from "./../views/utils.js";

export async function controlador(formu, event, entidad, elemformu) {
  const URL = "http://localhost:4000/";
  let url = "";
  
  const datos = formu !== null ? Object.fromEntries(new FormData(formu)) : null;
  const value = event.target.value;

  switch (value) {
    case "Sign Up":
      url = URL + entidad;
      post(url, datos);
      // formu.reset();
      break;
    // case "CARGARSELECT":
    // case "Sign In":
    //   url = `${URL}${entidad}/${datos !== null ? datos.id : ""}`;
    //   get(url, formu).then((data) => {
    //     // Utilizar los datos obtenidos
    //     // if (formu !== null) llenarFormulario(formu, data);
    //     if (formu !== null) llenarFormulario(formu, data);
    //     // else if (value === "CARGARSELECT") llenarSelect(data, elemformu);
    //   });
    //   break;
    case "Sign In":
      // Verificar la contraseña con el email
      // url = `${URL}${entidad}/${datos !== null ? datos.email : ""}`;
      const urlS = `http://localhost:4000/usuarios?email=${datos.email}&&password=${datos.password}`;
      const signInData = await get(urlS);

      // Suponiendo que la contraseña está almacenada en el campo "password"
      if (signInData && signInData.length > 0) {
        // Contraseña correcta, redirigir a index.html
        window.location.href = '../index.html';
      } else {
        console.error('Contraseña incorrecta');
        // console.log(signInData.password)
      }
      break;
    case "Modificar":
      url = URL + entidad + `/${datos.id}`;
      put(url, datos);
      formu.reset();
      break;
    case "Borrar":
      url = URL + entidad + `/${datos.id}`;
      delet(url);
      formu.reset();
      break;
    case "Reservar":
      url = URL + entidad;
      post(url, datos);
      formu.reset();
      break;
  }
}