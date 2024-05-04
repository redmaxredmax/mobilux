"use client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const submit = (data: any) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((res) => {
      reset();
      if (res?.ok) {
        router.push("/");
      }
    });
  };

  return (
    <div className="container mx-auto mt-10">
      <form onSubmit={handleSubmit(submit)} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Emailingizni kiritng:
          </label>
          <input
            {...register("email")}
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary "
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Parolingizni kiriting:
          </label>
          <input
            {...register("password")}
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary "
            placeholder="Parol"
            type="password"
          />
        </div>
        <Button
          type="submit"
          className="w-full text-md font-semibold"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
