import { Router } from "express";
import { postPrompt } from "../controllers/chatgpt.controller";
import { check } from "express-validator";
import validateFields from "../middlewares/validate-fields.middelware";

const router = Router();

router.post(
  "/",
  [
    check("prompt", "text is requerid").not().isEmpty(),
    validateFields,
  ],
  postPrompt
);

export default router;
