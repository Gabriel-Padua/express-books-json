import express from "express";
import rotaLivro from "./routes/livro.js";
import rotaFavorito from "./routes/favoritos.js";
import cors from "cors";

const app = express();

const PORT = 8000;

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/livros", rotaLivro);
app.use("/favoritos", rotaFavorito);

app.listen(PORT, () => {
  console.log(`Escutando na porta http://localhost:${PORT}`);
});
