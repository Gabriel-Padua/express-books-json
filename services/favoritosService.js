import fs from "fs";

function getTodosFavoritos() {
  return JSON.parse(fs.readFileSync("favoritosDB.json"));
}

function deletaFavoritoPorId(id) {
  const livros = JSON.parse(fs.readFileSync("favoritosDB.json"));

  const livrosFiltrado = livros.filter((livro) => livro.id !== id);

  fs.writeFileSync("favoritosDB.json", JSON.stringify(livrosFiltrado));
}

function insereFavorito(id) {
  const livros = JSON.parse(fs.readFileSync("livrosDB.json"));

  const favoritos = JSON.parse(fs.readFileSync("favoritosDB.json"));

  const livroInserido = livros.find((livro) => livro.id === id);

  const novaListaDeFavoritos = [...favoritos, livroInserido];

  fs.writeFileSync("favoritosDB.json", JSON.stringify(novaListaDeFavoritos));
}

export { getTodosFavoritos, deletaFavoritoPorId, insereFavorito };
