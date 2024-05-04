"use client";
import React from "react";
import { NotifyIcon } from "../../../public/icons/notify-icon";
import { ProfileIcon } from "../../../public/icons/profile-icon";
import { UzFlag } from "../../../public/icons/uz-flag";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Logo } from "../../../public/icons/logo";
import { SearchIcon } from "../../../public/icons/search-icon";
import { useRouter } from "next/navigation";
import { BackIcon } from "../../../public/icons/back-icon";
import { ShoppingCard } from "../../../public/icons/shopping-icon";
import { BinIcon } from "../../../public/icons/bin-icon";
import { LoginIcon } from "../../../public/icons/login-icon";


export const Header = () => {
  const data = useSession();
  const router=useRouter()
  return (
    <div className="container py-5 flex justify-between items-center">
      <a href="/">
        <Logo />
      </a>
      <Button
        onClick={() => router.back()}
        className="fixed top-[100px] gap-2 items-center "
        variant="secondary"
      >
        <BackIcon />
      </Button>
      <form className="flex w-[930px] items-center rounded-lg pl-3 justify-between border-primary border-2 bg-bg">
        <div className="flex items-center gap-4">
          <SearchIcon />
          <input
            className="py-2 bg-transparent w-[700px]"
            placeholder="Qidirish..."
            type="text"
          />
        </div>
        <Button className="h-[40px] rounded-l-none px-10 text-md">
          Search
        </Button>
      </form>
      <div className="flex gap-8 items-center">
        {/* <div className="flex items-center">
          <UzFlag />
          <select>
            <option value="Uz">Uz</option>
            <option value="Uz">Ru</option>
            <option value="Uz">En</option>
          </select>
        </div> */}
        <Link href="/bin" className="text-black">
          <BinIcon/>
        </Link>
        {data.status === "authenticated" ? (
          <Link className=" items-end hover:text-primary" href="/profile">
            <h2 className="font-bold text-current text-sm text-gray-700">{data?.data?.user?.name}</h2>
            <h2 className="font-medium text-current text-xs text-gray-700">{data?.data?.user?.email}</h2>
          </Link>
        ) : (
          <div className="flex gap-2">

          <Link
            href="/register"
            className="bg-primary rounded-lg items-center px-4 p-2 flex gap-2 font-semibold text-white hover:bg-foreground"
          >
            Register
            <ProfileIcon />
          </Link>
          <Link
            href="/login"
            className="bg-primary rounded-lg items-center px-4 p-2 flex gap-2 font-semibold text-white hover:bg-foreground"
          >
            Log In
            <LoginIcon />
          </Link>
          </div>
        )}
      </div>
    </div>
  );
};
