import React from "react";
import { Form, useNavigation, redirect } from "react-router-dom";
import axios from "axios";
import { FormInput, SubmitBtn } from "../components";

const url = "https://strapi-store-server.onrender.com/api";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(url, data);
    return redirect("/");
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
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
