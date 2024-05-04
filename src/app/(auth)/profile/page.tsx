import { getServerSession } from "next-auth";
import { authOptions } from "@/config/next-auth-config";
import user from "/public/imgs/user.png"
import React from "react";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-bg ">
      <h1 className="text-3xl pt-[50px] font-semibold text-blue-900 text-center pb-[30px]">
        Shaxsiy profilingiz
      </h1>
      <div className="flex w-[600px] mx-auto items-center pb-[150px]">
        <img
          src={user.src}
          alt="img"
          className="rounded-full h-[150px] mr-4"
        />
        <div>
          <h2 className="text-3xl font-semibold">
            <span className="font-bold text-primary"> Ism:</span>{" "}
            {session?.user.name}
          </h2>
          <h2 className="text-3xl font-semibold">
            <span className="font-bold text-primary"> Familya:</span>{" "}
            {session?.user.surename}
          </h2>
          <h2 className="text-2xl font-semibold">
            <span className="font-bold text-primary">Email:</span>{" "}
            {session?.user.email}
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
