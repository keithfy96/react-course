import React from "react";
import { Form, Link, useNavigation, redirect } from "react-router-dom";
import axios from "axios";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">register</h4>
        <FormInput
          type="username"
          label="username"
          name="identifier"
          defaultValue="username"
        />
        <FormInput
          type="email"
          label="email"
          name="email"
          defaultValue="test@email.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="******"
        />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
