import Customer from "../models/customer.model";
export async function findAllCustomers(limit, offset) {
  let customers = await Customer.find({})
    .lean()
    .limit(limit)
    .skip(offset)
    .sort({ createdAt: -1 });
  return customers;
}
export async function createFromData(data) {
  const customer = await Customer.create(data);
  return customer;
}

export async function findById(id) {
  const post = await Customer.findById(id).lean();
  return post;
}
