import { useFormik } from "formik";
import Group from "../Base/Group";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Button } from "../ui/button";
import TextField from "../TextField";
import { loginSchema } from "@/schema/loginSchema";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="w-4/5   mx-auto">
        <form onSubmit={formik.handleSubmit} className="w-full ">
          <Group
            vertical
            className="w-full"
            align="center"
            justify="center"
            gap="gap-4"
          >
            <TextField
              label="Email"
              name="email"
              placeholder="Enter Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              helper={formik.errors.email}
              className="w-full"
            />
            <TextField
              label="Password"
              name="password"
              placeholder="Enter Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              helper={formik.errors.password}
              className="w-full"
            />
            <Group
              className="text-sm w-full py-2"
              align="center"
              justify="between"
            >
              <Group align="center" gap="gap-2">
                <Checkbox id="remember" className="h-4 w-4" />
                <label htmlFor="remember" className="py-1 cursor-pointer">
                  Remember me
                </label>
              </Group>
              <Link href={""}>Forgot password</Link>
            </Group>
            <Button className="w-full py-6 mt-4">Sign In</Button>
          </Group>
        </form>
      </div>
    </>
  );
}
