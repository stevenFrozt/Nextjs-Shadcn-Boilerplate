import { object, string } from "yup";

export const loginInitialValues = {
  email: "",
  password: "",
  remember: false,
};

export const loginSchema = object({
  email: string()
    .required("Email Field is required")
    .email("Please enter a valid email address ex.(example@domain.com)"),
  password: string().required("Password Field is required"),
});
