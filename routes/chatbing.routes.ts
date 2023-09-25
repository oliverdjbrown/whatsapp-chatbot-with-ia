import { Router } from "express";
import { check } from "express-validator";
import validateFields from "../middlewares/validate-fields.middelware";
import chatWithBing from "../controllers/chatbing.controller";

const router = Router();

router.post(
  "/",
  [
    check("prompt", "text is requerid").not().isEmpty(),
    validateFields,
  ],
  chatWithBing
);

export default router;
