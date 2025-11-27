"use client";
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constants";
import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    }, mode: 'onBlur'
  });
  const onSubmit = async(data: SignUpFormData) => {
    try {
        console.log(data);
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
      <h1 className="form-title">SignUp and Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
        name="fullName"
        label="Full Name"
        placeholder="John Doe."
        error={errors.fullName}
        register={register}
        validation={{required: 'Full name is required', minLength: 2}}
        />
        <InputField
        name="email"
        label="Email"
        placeholder="john@gmail.com"
        error={errors.email}
        register={register}
        validation={{required: 'Email is required', pattern: /^\w+@\w\.\w+$/, message:'Email address is required'}}
        />
        <InputField
        name="password"
        label="Password"
        placeholder="Enter a strong Password"
        type="password"
        error={errors.password}
        register={register}
        validation={{required: 'Password is required', minLength: 8}}
        />
        <CountrySelectField
        name="country"
        label="Country"
        control={control}
        error={errors.country}
        required
        />
        <SelectField
        name="investmentGoals"
        label="Investment Goals"
        placeholder="Select your Investment Goal."
        options={INVESTMENT_GOALS}
        control={control}
        error={errors.investmentGoals}
        required
        />
        <SelectField
        name="riskTolerance"
        label="Risk tolerance"
        placeholder="Select your Risk Tolerance"
        options={RISK_TOLERANCE_OPTIONS}
        control={control}
        error={errors.riskTolerance}
        required
        />
        <SelectField
        name="prefferedIndustry"
        label="Preffered Industry"
        placeholder="Select your Prefered Industry"
        options={PREFERRED_INDUSTRIES}
        control={control}
        error={errors.preferredIndustry}
        required
        />
        <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">{isSubmitting ? "Creating your account" : "Start your Investing Journey"}</Button>
        <FooterLink href="/sign-in" linkText="Log In" text="Already have an account?"/>
      </form>
    </>
  );
};

export default SignUp;
