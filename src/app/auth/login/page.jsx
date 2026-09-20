"use client";

import { authClient } from "@/lib/auth-client";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { BsGoogle } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

const onSubmit = async (e) => {
  e.preventDefault();

  setErrorMessage("");
  setLoading(true);

  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    console.log({ data, error });

    if (error) {
      setErrorMessage(
        error.message || "Invalid email or password."
      );
      return;
    }

    // ✅ Login Success Toast
    toast.success("Login successful! Welcome back 🎉");

  } catch (error) {
    console.error(error);

    setErrorMessage(
      "Login failed. Please check your email and password."
    );
  } finally {
    setLoading(false);
  }
};

 const handleGoogleSignIn = async () => {
  try {
    setErrorMessage("");

    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    toast.success("Google login successful! 🎉");

  } catch (error) {
    console.error(error);

    toast.error("Google sign in failed. Please try again.");
  }
};
  return (
    <Card className="mx-auto mt-5 w-125 border py-10">

      <h1 className="text-center text-2xl font-bold">
        Log In
      </h1>

      <Form
        className="mx-auto flex w-96 flex-col gap-4"
        onSubmit={onSubmit}
      >

        {/* Error Message */}
        {errorMessage && (
          <div className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {errorMessage}
          </div>
        )}

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                value
              )
            ) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>

          <Input placeholder="john@example.com" />

          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }

            return null;
          }}
        >
          <Label>Password</Label>

          <Input placeholder="Enter your password" />

          <Description>
            Must be at least 8 characters
          </Description>

          <FieldError />
        </TextField>

        {/* Buttons */}
        <div className="flex gap-2">

          <Button
            className="bg-pink-500 text-white"
            type="submit"
            isDisabled={loading}
          >
            {loading ? "Logging in..." : "Submit"}
          </Button>

          <Button
            className="text-pink-500"
            type="reset"
            variant="secondary"
            onPress={() => setErrorMessage("")}
          >
            Reset
          </Button>

        </div>
      </Form>

      {/* Register */}
      <p className="text-center font-semibold">
        Don’t Have An Account?{" "}
        <span className="font-bold text-pink-500">
          <Link href="/auth/register">
            Register
          </Link>
        </span>
      </p>

      <p className="text-center font-semibold">
        or
      </p>

      {/* Google */}
      <Button
        onPress={handleGoogleSignIn}
        variant="outline"
        className="w-full"
      >
        <BsGoogle />
        Sign in with Google
      </Button>

    </Card>
  );
}