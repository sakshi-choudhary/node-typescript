import * as yup from "yup";

export const schema = new yup.ObjectSchema({
  type: yup.string(),
  sponsor: yup.object({
    src: yup.string(),
    alt: yup.string(),
  }),
});
