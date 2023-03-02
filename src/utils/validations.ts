import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(3).required(),
  })
  .required();

export const registerSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(3).required(),
  })
  .required();

export const depositSchema = yup.object({
  amount: yup.string().nullable().required(),
});

export const bidSchema = yup.object({
  currentPrice: yup.string(),
  bidPrice: yup
    .number()
    .moreThan(
      yup.ref("currentPrice"),
      "The bid price must be greater than current price!"
    ),
});
