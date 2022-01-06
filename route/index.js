import express from "express";

import customerRouter from "./customerRoute";

const router = express.Router();

router.use("/customers", customerRouter);

export default router;
