"use server";
import { url } from "./request";

export const getProducts = async () => {
  try {
    const res = await fetch(`${url}/products`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

