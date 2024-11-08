"use client";
import {
  registerInitialValues,
  registerValidationSchema,
} from "@/schema/registerSchema";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Group from "../Base/Group";
import TextField from "../TextField";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

export default function LoginForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,
    onSubmit: SubmitHandler,
    validateOnBlur: true,
    validateOnChange: false,
  });

  async function SubmitHandler(values: any) {
    //  router.push(callbackUrl || "/");
  }

  return (
    <>
      <div className="w-4/5 mx-auto">
        <form onSubmit={formik.handleSubmit} className="w-full ">
          <Group
            vertical
            className="w-full"
            align="center"
            justify="center"
            gap="gap-6"
          >
            <TextField
              label="First Name"
              name="firstName"
              placeholder="Enter First Name"
              onChange={(e: any) => {
                formik.handleChange(e);
                formik.setFieldTouched("firstName", true, false);
                formik.validateField("firstName");
              }}
              value={formik.values.firstName}
              helper={formik.errors.firstName}
              touched={formik.touched.firstName}
              className="w-full"
              required
            />
            <TextField
              label="Last Name"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={(e: any) => {
                formik.handleChange(e);
                formik.setFieldTouched("lastName", true, false);
                formik.validateField("lastName");
              }}
              value={formik.values.lastName}
              helper={formik.errors.lastName}
              touched={formik.touched.lastName}
              className="w-full"
              required
            />

            <TextField
              label="Gender"
              name="gender"
              placeholder="Enter Gender"
              onChange={(e: any) => {
                formik.handleChange(e);
                formik.setFieldTouched("gender", true, false);
                formik.validateField("gender");
              }}
              value={formik.values.gender}
              helper={formik.errors.gender}
              touched={formik.touched.gender}
              className="w-full"
              required
            />

            <TextField
              label="Birthdate"
              name="birthdate"
              placeholder="Select Birthdate"
              onChange={(e: any) => {
                formik.handleChange(e);
                formik.setFieldTouched("birthdate", true, false);
                formik.validateField("birthdate");
              }}
              value={formik.values.birthdate}
              helper={formik.errors.birthdate}
              touched={formik.touched.birthdate}
              className="w-full"
              required
            />

            <TextField
              label="Contact Number"
              name="contactNumber"
              placeholder="Enter Contact Number (11 digits)"
              onChange={(e: any) => {
                formik.handleChange(e);
                formik.setFieldTouched("contactNumber", true, false);
                formik.validateField("contactNumber");
              }}
              value={formik.values.contactNumber}
              helper={formik.errors.contactNumber}
              touched={formik.touched.contactNumber}
              className="w-full"
              required
            />

            <TextField
              label="Email Address"
              name="email"
              placeholder="Enter Email Address"
              onChange={(e: any) => {
                formik.handleChange(e);
                formik.setFieldTouched("email", true, false);
                formik.validateField("email");
              }}
              value={formik.values.email}
              helper={formik.errors.email}
              touched={formik.touched.email}
              className="w-full"
              required
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={(e: any) => {
                formik.handleChange(e);
                formik.setFieldTouched("password", true, false);
                formik.validateField("password");
              }}
              value={formik.values.password}
              helper={formik.errors.password}
              touched={formik.touched.password}
              className="w-full"
              required
            />

            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={(e: any) => {
                formik.handleChange(e);
                formik.setFieldTouched("confirmPassword", true, false);
                formik.validateField("confirmPassword");
              }}
              value={formik.values.confirmPassword}
              helper={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
              className="w-full"
              required
            />

            <Group
              className="text-sm w-full py-2"
              align="center"
              justify="between"
            >
              <Group align="center" gap="gap-2">
                <Checkbox
                  id="terms"
                  name="terms"
                  className={cn(
                    "h-4 w-4 ",
                    formik.errors.terms && formik.touched.terms
                      ? "border-2 border-red-500"
                      : ""
                  )}
                  onCheckedChange={(e: boolean) => {
                    formik.setFieldValue("terms", e);
                    formik.setFieldTouched("terms", false, false);
                    formik.validateField("terms");
                  }}
                  checked={formik.values.terms}
                />
                <label htmlFor="terms" className="py-1 cursor-pointer">
                  Accept Terms and Condition{" "}
                  <span className="text-red-500">*</span>
                </label>
              </Group>
            </Group>
            <Button className="w-full py-6 mt-4">Create Account</Button>
          </Group>
        </form>
      </div>
    </>
  );
}
