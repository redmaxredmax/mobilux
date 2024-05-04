"use client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const RegisterPage: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const submit = (data: any) => {
    axios.post("http://localhost:8000/register", data).then((res) => {
      router.push("/login");
    });
  };
  return (
    <div className="bg-bg py-10">
      <div className="bg-white p-4 py-7 rounded-lg w-[500px] mx-auto">
      <h2 className="font-semibold text-3xl mb-4 text-center text-primary">Ro'yxatdan o'tish:</h2>
      <form onSubmit={handleSubmit(submit)} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block ml-1 text-gray-700 font-medium" >
            Ismingizni kiriting:
          </label>
          <input
            {...register("name")}
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary focus:shadow-outline-blue"
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block ml-1 text-gray-700 font-medium" >
            Familyangizni kiriting:
          </label>
          <input
            {...register("surename")}
            id="surename"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary focus:shadow-outline-blue"
            placeholder="Surename"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Emailingizni kiriting:
          </label>
          <input
            {...register("email")}
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary focus:shadow-outline-blue"
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary focus:shadow-outline-blue"
            placeholder="Password"
            type="password"
          />
        </div>
        <Button className="w-full text-md" type="submit">Register</Button>
      </form>
      </div>
    </div>
  );
};

export default RegisterPage;
