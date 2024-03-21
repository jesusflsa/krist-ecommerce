import z from "zod";

export const SignUpUserSchema = z.object({
  firstName: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      new RegExp("^(?=.*[A-Z])"),
      "Password must contain at least one uppercase letter"
    )
    .regex(
      new RegExp("^(?=.*[0-9])"),
      "Password must contain at least one number"
    ),
  lastName: z.string().min(1, "Last Name is required"),
  termsAndConditions: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});
