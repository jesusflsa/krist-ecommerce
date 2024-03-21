import { FieldError, UseFormRegister } from "react-hook-form";
import z from "zod";
import { SignUpUserSchema } from "./common/schemas/User";

export type FormFieldProps = {
  name: ValidFieldNames;
  type: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<SignUpUserType>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = "firstName" | "lastName" | "email" | "password" | "termsAndConditions";

export type SignUpUserType = z.infer<typeof SignUpUserSchema>;