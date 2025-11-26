import {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletarLivro,
} from "../services/livroService.js";

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.status(200).send(livros);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
function getLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.status(200).send(livro);
    } else {
      res.status(422).send("Id invalido!");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;

    if (livroNovo.nome) {
      insereLivro(livroNovo);
      res.status(201).json("Livro Inserido com Sucesso!");
    } else {
      res.status(422).send("O campo nome é obrigatório");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const body = req.body;
      modificaLivro(body, id);
      res.send(`Item de id ${id} modicado com sucesso`);
    } else {
      res.status(422).send("ID Inválido!");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deletarLivro(id);
      res.send(`Item deletado com sucesso!`);
    } else {
      res.status(422).send("ID inválido!");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export { getLivros, getLivro, postLivro, patchLivro, deleteLivro };
