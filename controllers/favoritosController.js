import {
  insereFavorito,
  deletaFavoritoPorId,
  getTodosFavoritos,
} from "../services/favoritosService.js";

function getFavoritos(req, res) {
  try {
    const livros = getTodosFavoritos();
    res.status(200).send(livros);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function postFavorito(req, res) {
  try {
    const id = req.params.id;
    insereFavorito(id);
    res.status(201).json("Livro Inserido com Sucesso!");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function deleteFavorito(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deletaFavoritoPorId(id);
      res.send(`Favorito deletado com sucesso!`);
    } else {
      res.status(422).send("ID inválido!");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export { getFavoritos, postFavorito, deleteFavorito };
