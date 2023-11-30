import React from "react";
import { Link, Form, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const url = "https://strapi-store-server.onrender.com/api";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    toast.success("logged in successfully");
    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error, please try again");
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
          guest user
        </button>
        <p className="text-center">
          Not a mamber yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

// const Login = () => {
//   const navigation = useNavigation();
//   const isSubmitting = navigation.state === "submitting";
//   const loginAttributes = [
//     {
//       label: "username",
//       name: "username",
//       type: "text",
//       defaultValue: "john",
//       size: "max-w-min md-w-",
//     },
//     {
//       label: "password",
//       name: "password",
//       type: "text",
//       defaultValue: "*****",
//       size: "max-w-min md:max-w-xs",
//     },
//   ];
//   return (
//     <div className="container m-3.5 m-w-xs grid place-items-center">
//       <Form method="post" className="flex flex-col">
//         {loginAttributes.map((input) => {
//           return <FormInput key={input.label} {...input} />;
//         })}
//         <button
//           type="submit"
//           className="btn btn-primary mt-4"
//           disabled={isSubmitting}
//         >
//           Login
//         </button>
//       </Form>
//     </div>
//   );
// };

export default Login;
