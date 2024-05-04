import { NextPage } from "next";
import React from "react";
import { getProducts } from "@/service/phones";
import { getCategory } from "@/service/category";
import { ProductCard } from "@/app/_components/product-card";

const CategoryPage: NextPage<{ params: any }> = async ({ params }) => {
  const products = await getProducts();
  const category = await getCategory();
  const array: any = [];
  const result = category?.find((item: any) => item?.id == params?.category);

  const same = products?.map((item: any) => {
    if (item?.categoryId == result?.id) {
      array.push(item);
    } else {
    }
  });

  return (
    <div className="bg-bg p-5">
      <h2 className="font-bold text-center text-4xl mb-7">{result?.name}</h2>
      <div className="container bg-white p-7">
        <div className="grid grid-cols-4 gap-5">
          {array.map((item: any) => (
            <div key={item.id}>
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
