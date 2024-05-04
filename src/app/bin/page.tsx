"use client";
import React from "react";
import { useSelector } from "react-redux";
import { BinCard } from "../_components/bin-card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const BinPage = () => {
  const router=useRouter()
  const { products } = useSelector((state: any) => state.card);
  if(products.length==0){
    router.push("/")
  }
  return (
    <div className="bg-bg p-5">
      <h1 className="text-4xl font-semibold text-blue-900 text-center pb-[30px]">
        Sotib olingan mahsulotlar:
      </h1>
     
      <div className=" rounded-lg w-[1100px] mx-auto">
        {products
          .map((item: any) => <BinCard key={item.id} {...item} />)
          .reverse()}
      </div>
    </div>
  );
};

export default BinPage;
