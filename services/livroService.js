import fs from "fs";

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livrosDB.json"));
}
function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livrosDB.json"));
  const livroFiltrado = livros.filter((livro) => livro.id === id)[0];
  return livroFiltrado;
}

function insereLivro(livroNovo) {
  const livros = JSON.parse(fs.readFileSync("livrosDB.json"));

  const novaListaDeLivros = [...livros, livroNovo];

  fs.writeFileSync("livrosDB.json", JSON.stringify(novaListaDeLivros));
}

function modificaLivro(modificacoes, id) {
  let livrosAtuais = JSON.parse(fs.readFileSync("livrosDB.json"));

  const indiceModificado = livrosAtuais.findIndex((livro) => livro.id === id);

  const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };

  livrosAtuais[indiceModificado] = conteudoMudado;

  fs.writeFileSync("livrosDB.json", JSON.stringify(livrosAtuais));
}

function deletarLivro(id) {
  const livros = JSON.parse(fs.readFileSync("livrosDB.json"));

  const livrosFiltrado = livros.filter((livro) => livro.id !== id);

  fs.writeFileSync("livrosDB.json", JSON.stringify(livrosFiltrado));
}

export {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletarLivro,
};
