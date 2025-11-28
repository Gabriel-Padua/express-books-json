import { Router } from "express";
import {
  getLivro,
  getLivros,
  postLivro,
  patchLivro,
  deleteLivro,
} from "../controllers/livroController.js";

const router = Router();

router.get("/:id", getLivro);
router.get("/", getLivros);

router.post("/", postLivro);

router.patch("/:id", patchLivro);

router.delete("/:id", deleteLivro);

export default router;
