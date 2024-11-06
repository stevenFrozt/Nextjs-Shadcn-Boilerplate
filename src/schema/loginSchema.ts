import { object, string } from "yup";

export const loginSchema = object({
  email: string().required("email is required"),
  password: string().required("password is required"),
});
