import express from "express";
import { validatorBody } from "../middleware/validator";
import * as customerEndpoint from "../endpoint/customer.endpoint";
import { createDataSchema } from "../validation/customer.validation";

import syncMiddleware from "../middleware/sync";

const router = express.Router();

router.get("/", syncMiddleware(customerEndpoint.getCustomers));

router.post(
  "/",
  syncMiddleware(validatorBody(createDataSchema)),
  syncMiddleware(customerEndpoint.createCustomer)
);

router.get("/:customerId/", syncMiddleware(customerEndpoint.findCustomer));

export default router;
