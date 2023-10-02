import * as yup from "yup";

export const exampleValidation = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(3).required(),
  })
  .required();
