/* URL: https://pokeapi.co/api/v2/pokemon/1 */
/* Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.*/

//Creo una función asíncrona que haga una petición a la URL de la API de Pokemon.

const getPokemon = async () => {
  try {
   
    // Creo una constante que genere un número aleatorio entre 1 y 151 y hago una petición a la API de Pokemon con ese número para obtener un Pokemon aleatorio, y muestro su imagen en la página.

    const randomPokemon = Math.floor(Math.random() * 151) + 1;
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
    );
    
    const data = await res.json();
    console.log(data);
    const img = document.createElement("img");
    img.src = data.sprites.front_default;
    document.body.appendChild(img);
  } catch (error) {
    alert("Error al cargar la API");
  }
};

//creo un boton para actualizar la pagina y asi mostrar un nuevo pokemon

const button = document.createElement("button");
button.textContent = "Actualizar";
button.addEventListener("click", () => {
  location.reload();
});
document.body.appendChild(button);



getPokemon();
