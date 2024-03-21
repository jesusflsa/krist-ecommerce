"use client";

import { Input } from "../ui/Input";
import { useForm } from "react-hook-form";
import { SignUpUserType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpUserSchema } from "@/common/schemas/User";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpUserType>({ resolver: zodResolver(SignUpUserSchema) });

  const onSubmit = (data: SignUpUserType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full"
    >
      <Input
        register={register}
        name="firstName"
        type="text"
        placeholder="Enter your First Name"
        label="First Name"
        error={errors.firstName}
      />
      <Input
        register={register}
        name="lastName"
        type="text"
        placeholder="Enter your Last Name"
        label="Last Name"
        error={errors.lastName}
      />
      <Input
        register={register}
        name="email"
        type="email"
        placeholder="Enter your Email"
        label="Email"
        error={errors.email}
      />
      <Input
        register={register}
        name="password"
        type="password"
        placeholder="Enter your Password"
        label="Password"
        error={errors.password}
      />
      <div className="flex items-center mb-4">
        <input
          {...register("termsAndConditions")}
          type="checkbox"
          id="termsAndConditions"
          className="mr-2 w-4 h-4 accent-black"
        />
        <label htmlFor="termsAndConditions">
          I agree to the <span className="font-bold">Terms and Conditions</span>
        </label>
        {errors.termsAndConditions && (
          <img
            src="/info.svg"
            loading="lazy"
            className="w-4 h-4 ml-2 inline-block"
          />
        )}
      </div>
      <button
        type="submit"
        className="w-full text-center p-5 bg-black text-white rounded-xl"
      >
        Signup
      </button>
    </form>
  );
}

export default SignUpForm;
