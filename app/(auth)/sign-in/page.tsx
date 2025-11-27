"use client";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center h-[65vh]">
      <h1 className="form-title">Log In Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          placeholder="john@gmail.com"
          error={errors.email}
          register={register}
          validation={{
            required: "Email is required",
            pattern: /^\w+@\w\.\w+$/,
            message: "Email address is required",
          }}
        />
        <InputField
          name="password"
          label="Password"
          placeholder="Enter a strong Password"
          type="password"
          error={errors.password}
          register={register}
          validation={{ required: "Password is required", minLength: 8 }}
        />
        <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">{isSubmitting ? "Logging You In" : "Log In"}</Button>
        <FooterLink href="/sign-up" linkText="Sign Up" text="Don't have an account?"/>
      </form>
    </div>
  );
};

export default SignIn;
