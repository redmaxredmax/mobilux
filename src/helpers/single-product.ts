import { url } from "@/service/request";

const getSingleProduct = async () => {
  const res = await fetch(`${url}/all`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getSingleProductById = async (_id: number) => {
  const item = await getSingleProduct();
  const singleItem = await item.find((item: any) => item.id === _id);
  return singleItem;
};
