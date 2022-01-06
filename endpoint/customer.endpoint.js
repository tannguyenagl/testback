import * as customerService from "../service/customer.service";

export async function getCustomers(req, res) {
  let { offset, limit } = req.query;
  if (!offset) {
    offset = 0;
  }
  if (!limit) {
    limit = 10;
  }
  let customers;
  try {
    limit = parseInt(limit);
    offset = parseInt(offset);
    customers = await customerService.findAllCustomers(limit, offset);
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
  return res.json({ customers, success: true });
}

export async function createCustomer(req, res) {
  let data = req.body;
  let customer;
  try {
    customer = await customerService.createFromData(data);
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
  return res.json({ customer, success: true });
}

export async function findCustomer(req, res) {
  let { customerId } = req.params;
  let customer;
  try {
    customer = await customerService.findById(customerId);
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, message: "customer is not exits" });
    }
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
  return res.json({ customer, success: true });
}
