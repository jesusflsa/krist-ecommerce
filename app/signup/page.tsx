import SignUpForm from "@/components/forms/SignUpForm";
import React from "react";

function Page() {
  return (
    <main className="flex h-screen w-full">
      <img
        className="w-1/2 h-screen object-cover object-top"
        src="/signup/SignUpBanner.webp"
        alt="Imagen de un modelo vistiendo un blazer azul con pantalon azul"
      />
      <div className="w-1/2 grid place-items-center">
        <div className="w-4/5">
          <h1 className="font-bold text-3xl">Create New Account</h1>
          <h3 className="text-neutral-400 mb-8">Please enter details</h3>
          <SignUpForm />
        </div>
      </div>
    </main>
  );
}

export default Page;
