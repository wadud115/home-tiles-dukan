"use client";

import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { toast } from "react-toastify";

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

import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        image,
        password,
        email,
      });

      console.log({ data, error });

    
      if (error) {
        const message =
          error.message || "Registration failed. Please try again.";

        setErrorMessage(message);
        toast.error(message);

        return;
      }

  
      toast.success("Registration successful! 🎉");

     
      setTimeout(() => {
        router.push("/auth/login");
      }, 1000);
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Something went wrong. Please try again."
      );

      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setErrorMessage("");

      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      toast.success("Google signup successful! 🎉");
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Google sign up failed. Please try again."
      );

      toast.error("Google sign up failed. Please try again.");
    }
  };

  return (
    <Card className="mx-auto mt-5 w-125 border py-10">

      <h1 className="text-center text-2xl font-bold">
        Sign Up
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

        {/* Name */}
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>

          <Input placeholder="Enter your name" />

          <FieldError />
        </TextField>

        {/* Image */}
        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>

          <Input placeholder="Image URL" />

          <FieldError />
        </TextField>

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

            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }

            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>

          <Input placeholder="Enter your password" />

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
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
            {loading ? "Creating Account..." : "Submit"}
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

        {/* Login Link */}
        <div>
          <p className="text-center font-semibold">
            You are already registered?{" "}
            <span className="font-bold text-pink-500">
              <Link href="/auth/login">
                Login
              </Link>
            </span>
          </p>
        </div>

      </Form>

      <p className="text-center font-semibold">
        or
      </p>

      {/* Google */}
      <Button
        onPress={handleGoogleSignUp}
        variant="outline"
        className="w-full"
      >
        <BsGoogle />
        Sign up with Google
      </Button>

    </Card>
  );
}