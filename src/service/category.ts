"use server";
import { url } from "./request";

interface Category {
  id: number;
  name: string;
  path: string;
}

export const getCategory = async (): Promise<Category[]> => {
  try {
    const res = await fetch(`${url}/category`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
