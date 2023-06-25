import { Router } from "express";
import { deleteUser, getUsers, postUser } from "../controllers/user.controller";
import { check } from "express-validator";
import validateFields from "../middlewares/validate-fields.middelware";

const router = Router();

router.get("/", getUsers);
router.post(
  "/",
  [
    check("name", "name is requerid").not().isEmpty(),
    check("tel", "tel is requerid").not().isEmpty(),
    validateFields,
  ],
  postUser
);
router.delete(
  "/:tel",
  [check("tel", "tel is requerid").not().isEmpty(), validateFields],
  deleteUser
);

export default router;
