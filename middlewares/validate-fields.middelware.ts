import { NextFunction, Request, Response } from "express";

const { validationResult } = require("express-validator");

const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

export default validateFields;
