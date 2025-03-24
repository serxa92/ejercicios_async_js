/* Hago una funcion asincrona, le digo prueba a acceder a la url de la api, espero a que me devuelva la consulta y la guardo en la constante response, luego la convierto en json por que viene cruda y la guardo en la constante data
 */
const charactersGOT = async () => {
  try {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    const data = await response.json();

    // Creo 2 constantes, una para la lista de personajes y otra para la imagen del personaje

    const characterList = document.getElementById("character-list");
    const characterImage = document.querySelector(".character-image");

    // Agregamos la opción por defecto
    characterList.innerHTML = `<option value="" selected disabled>Choose a character</option>`;

    // Recorremos los personajes y los agregamos a la lista
    data.forEach((character) => {
      characterList.innerHTML += `
      <option value="${character.imageUrl}">${character.fullName}</option>`;
    });

    // Cuando el usuario selecciona un personaje, cambiamos la imagen
    characterList.onchange = () => {
      characterImage.setAttribute("src", `${characterList.value}`);
      characterImage.setAttribute("alt", `Imagen del personaje`);
    };
  } catch (error) {
    console.error("Error al cargar los personajes:", error);
  }
};

// Llamamos a la función para cargar los personajes
charactersGOT();
