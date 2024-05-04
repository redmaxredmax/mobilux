"use server";
import { url } from "./request";

interface Category {
  id: number;
  title: string;
  brand: string;
  type: string;
  price: string;
  img: string;
  discount: string;
  color: string;
  description: string;
}

export const getSingleCategory = async ({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Category[]> => {
  try {
    const res = await fetch(`${url}/${slug}`);
    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
