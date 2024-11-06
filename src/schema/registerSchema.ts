import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "First name can only contain letters"),

  lastName: Yup.string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Last name can only contain letters"),

  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters"),

  email: Yup.string()
    .email("Please enter a valid email address, such as example@domain.com")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character (@, $, !, %, *, ?, &)"
    )
    .min(8, "Password must be at least 8 characters long"),

  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),

  birthdate: Yup.date()
    .required("Birthdate is required")
    .max(new Date(), "Birthdate cannot be in the future"),

  contactNumber: Yup.string()
    .required("Contact number is required")
    .matches(/^[0-9]{11}$/, "Contact number must be exactly 11 digits"),

  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Invalid gender option")
    .required("Gender is required"),

  address: Yup.object().shape({
    street: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    postalCode: Yup.string()
      .required("Postal code is required")
      .matches(/^[0-9]{5}$/, "Postal code must be exactly 5 digits"),
  }),

  terms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

export default validationSchema;
