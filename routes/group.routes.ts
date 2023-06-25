import { Router } from "express";
import {
  getGroups,
  postGroup,
  deleteGroup,
} from "../controllers/group.controller";
import validateFields from "../middlewares/validate-fields.middelware";
import { check } from "express-validator";

const router = Router();

router.get("/", getGroups);
router.post(
  "/",
  [
    check("name", "name is requerid").not().isEmpty(),
    check("tel", "tel is requerid").not().isEmpty(),
    validateFields,
  ],
  postGroup
);
router.delete(
  "/:name",
  [check("tel", "tel is requerid").not().isEmpty(), validateFields],
  deleteGroup
);

export default router;
