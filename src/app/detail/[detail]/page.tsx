
import React from "react";
import { getProducts } from "@/service/phones";
import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import { BackIcon } from "../../../../public/icons/back-icon";
import { LikeIcon } from "../../../../public/icons/like-icon";
import { UzFlag } from "../../../../public/icons/uz-flag";
import { Rating } from "../../../../public/icons/rating";
import { ProductCard } from "@/app/_components/product-card";
import Link from "next/link";
import { BinIcon } from "../../../../public/icons/bin-icon";

const DetailPage: NextPage<{ params: any }> = async ({ params }) => {

  const products = await getProducts();
  const array: any = [];
  const result = products?.find((item: any) => item.id == params?.detail);
  const same = products?.map((item: any) => {
    if (item?.categoryId == result?.categoryId) {
      array.push(item);
    } else {
    }
  });

  return (
    <div className="bg-bg p-5">
      <div className="container bg-white p-4 mb-5 rounded-md">
        <div className="flex gap-[50px] items-center">
          <div className="w-[600px]">
            <div className="flex justify-between items-center ">
              <div className="text-black relative w-[550px]">
                <h2 className="absolute right-0 font-bold border-black border-2 rounded-full px-2">{result?.id}</h2>
              </div>
            </div>
            <img
              key={result?.id}
              className="h-[480px] object-contain mx-auto "
              src={result?.photo}
              alt="img"
            />
          </div>
          <div className="w-[700px]">
            <h2 className="font-bold text-4xl mb-5">{result?.title}</h2>
            <div className="flex items-center gap-[50px] mb-2">
              <Rating />
              <p className="text-gray-500 font-bold text-xl line-through">
                {result?.oldcost} so'm
              </p>
            </div>
            <p className="text-primary font-bold text-5xl mb-5">
              {result?.cost} so'm
            </p>
            <div className="flex items-center gap-10 mb-5">
              <Button className="flex gap-2 px-10 text-md ">
                <BinIcon />
                Savatchaga
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <p className="font-bold">Omborda mavjud</p>
              </div>
            </div>
            <div className="flex gap-4 items-center bg-bg2 p-4 rounded-md w-[700px] mb-5">
              <UzFlag />
              <p className="font-bold text-md">
                O’zbekiston bo’ylab yetkazib berish:{" "}
                <span className="font-medium">14 ish kuni</span>
              </p>
            </div>
            <h3 className="font-bold text-lg mb-3">Tavsif</h3>
            <p className="font-medium text-md">{result?.description}</p>
          </div>
        </div>
      </div>
      <div className="container bg-white p-5 pb-10 rounded-md mb-5">
        <h2 className="font-extrabold text-3xl mt-3 mb-8">
          Asosiy xususiyatlari
        </h2>
        <ul>
          {result?.title && (
            <li key={result?.id} className="flex py-3 border-dashed border-b-2">
              <p className="font-medium text-md opacity-70 w-[450px]">Nom</p>
              <p className="font-medium text-md opacity-70">{result?.title}</p>
            </li>
          )}
          {result?.fashion && (
            <li key={result?.id} className="flex py-3 border-dashed border-b-2">
              <p className="font-medium text-md opacity-70 w-[450px]">Brend</p>
              <p className="font-medium text-md opacity-70">
                {result?.fashion}
              </p>
            </li>
          )}
          {result?.processor && (
            <li key={result?.id} className="flex py-3 border-dashed border-b-2">
              <p className="font-medium text-md opacity-70 w-[450px]">
                Protsessor
              </p>
              <p className="font-medium text-md opacity-70">
                {result?.processor}
              </p>
            </li>
          )}
          {result?.weight && (
            <li key={result?.id} className="flex py-3 border-dashed border-b-2">
              <p className="font-medium text-md opacity-70 w-[450px]">
                Og'irligi
              </p>
              <p className="font-medium text-md opacity-70">
                {result?.weight} g
              </p>
            </li>
          )}
          {result?.display && (
            <li key={result?.id} className="flex py-3 border-dashed border-b-2">
              <p className="font-medium text-md opacity-70 w-[450px]">
                Display
              </p>
              <p className="font-medium text-md opacity-70">
                {result?.display}
              </p>
            </li>
          )}
          {result?.camera && (
            <li key={result?.id} className="flex py-3 border-dashed border-b-2">
              <p className="font-medium text-md opacity-70 w-[450px]">Kamera</p>
              <p className="font-medium text-md opacity-70">{result?.camera}</p>
            </li>
          )}
          {result?.cores && (
            <li key={result?.id} className="flex py-3 border-dashed border-b-2">
              <p className="font-medium text-md opacity-70 w-[450px]">
                Yadrolar soni
              </p>
              <p className="font-medium text-md opacity-70">{result?.cores}</p>
            </li>
          )}
          {result?.battery && (
            <li key={result?.id} className="flex py-3 border-dashed border-b-2">
              <p className="font-medium text-md opacity-70 w-[450px]">
                Akkumlyatori
              </p>
              <p className="font-medium text-md opacity-70">
                {result?.battery}
              </p>
            </li>
          )}
          {result?.dioganal && (
            <li key={result?.id} className="flex py-3 border-dashed border-b-2">
              <p className="font-medium text-md opacity-70 w-[450px]">
                Dioganal
              </p>
              <p className="font-medium text-md opacity-70">
                {result?.dioganal}
              </p>
            </li>
          )}
          {result?.categoryName && (
            <li key={result?.id} className="flex py-3 border-dashed border-b-2">
              <p className="font-medium text-md opacity-70 w-[450px]">
                Kategoriya
              </p>
              <Link
                href={`/category/${result?.categoryId}`}
                className="hover:text-blue-900 font-semibold text-primary text-md opacity-70"
              >
                {result?.categoryName}
              </Link>
            </li>
          )}
          {result?.cost && (
            <li key={result?.id} className="flex py-3 border-dashed border-b-2">
              <p className="font-medium text-md opacity-70 w-[450px]">Narxi</p>
              <p className="font-medium text-md opacity-70">
                {result?.cost} so'm
              </p>
            </li>
          )}
        </ul>
      </div>
      <div className="container bg-white p-5 rounded-md mb-5">
        <h2 className="font-extrabold text-3xl mt-3 mb-8">O'xshash tovarlar</h2>
        <div className="grid grid-cols-4 gap-5">
          {array?.map((item: any) => (
            <ProductCard key={item?.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
