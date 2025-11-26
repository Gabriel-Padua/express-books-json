import express from "express";
import rotaLivro from "./routes/livro.js";

const app = express();

const PORT = 8000;

app.use(express.json());

app.use("/livros", rotaLivro);

app.listen(PORT, () => {
  console.log(`Escutando na porta http://localhost:${PORT}`);
});
