import * as yup from "yup";

export const schema = new yup.ObjectSchema({
  email: yup.string().email().required(),
  password: yup.string().required().length(4),
  age: yup.number(),
});
