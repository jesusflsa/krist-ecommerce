"use client";

import { FormFieldProps, SignUpUserType } from "@/types";
import React, { memo } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export const Input = memo(function Input({
  error,
  name,
  placeholder,
  register,
  type,
  valueAsNumber,
  label,
}: FormFieldProps) {
  const errorText = error?.message;
  return (
    <div>
      <label
        className={`text-sm ${error ? "text-red-600" : ""}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        className={`w-full p-4 rounded-lg outline-none ${
          error ? "border-red-600" : "border-black"
        } border my-1`}
        {...register(name, { valueAsNumber })}
      />
      {error && (
        <span
          className={`flex items-center text-sm ${error ? "text-red-600" : ""}`}
        >
          <img
            src="/info.svg"
            loading="lazy"
            className="w-4 h-4 mr-2 inline-block"
          />
          {errorText}
        </span>
      )}
    </div>
  );
});

type CheckBoxProps = {
  name: "termsAndConditions";
  label: string;
  register: UseFormRegister<SignUpUserType>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};
