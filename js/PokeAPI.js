function PegaPokemon() {
  //Função Pokemon
  let tempPokemon = document.getElementById("lblTemperatura").innerText; //obitendo o parametro partindo do atributo
  let chuva = document.getElementById("lblChuva").innerText;
  let tipo = ""; //declrando string
  let pokemon = null; // declarando pokemon como nulo vazio
  if (chuva == "Sim") {
    // se tiver chuva sera eletrico se não roda o codigo abaixo
    tipo = "electric";
  } else {
    //não tem chuva direcionando od pokemons conformes as temperaturas das cidades
    if (tempPokemon < 5) {
      tipo = "ice";
    }
    if (tempPokemon >= 5 && tempPokemon < 10) {
      tipo = "water";
    }
    if (
      (tempPokemon >= 10 && tempPokemon < 12) ||
      (tempPokemon >= 21 && tempPokemon < 23)
    ) {
      tipo = "normal";
    }
    if (tempPokemon >= 12 && tempPokemon < 15) {
      tipo = "grass";
    }
    if (tempPokemon >= 15 && tempPokemon < 21) {
      tipo = "ground";
    }
    if (tempPokemon >= 23 && tempPokemon < 27) {
      tipo = "bug";
    }
    if (tempPokemon >= 27 && tempPokemon <= 33) {
      tipo = "rock";
    }
    if (tempPokemon > 33) {
      tipo = "fire"; //se for acima 33 é pokemon de fogo
    }
  }
  let urlstr = "https://pokeapi.co/api/v2/type/" + tipo; // acesso a api pela url
  fetch(`${urlstr}`, options) //manipulação e utilização da api
    .then((response) => {
      response
        .json() // retorna promise com jason do pokemon
        .then((data) => EscolhePokemon(data)); //promise com os pokemons
      console.log("EscolhePokemon"); //printa no console escolhe pokemon
    })
    .catch((e) => console.log("Deu erro: " + e, message)); // se não escolher deu erro
}

function EscolhePokemon(data) {
  //funão que escolhe o pokemon
  let arrayPokemon = data.pokemon; //array do pokemon
  let numeroPokemons = arrayPokemon.length - 1; //numero do pokemon como id
  let pokemonSorteado = Math.floor(Math.random() * numeroPokemons);
  let nomePokemon = arrayPokemon[pokemonSorteado].pokemon.name;
  let idpokemon = arrayPokemon[pokemonSorteado].pokemon.url.substr(-4, 3);
  document.getElementById("imagem_pokemon").src =
    "https://db.pokemongohub.net/images/official/full/" + idpokemon + ".webp";
  // aprenda o pokemon
  document.getElementById("lblPokemon").innerHTML = nomePokemon; //mostra o nome dopokemon no html
}
