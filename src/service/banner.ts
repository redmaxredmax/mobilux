"use server";
import { url } from "./request";

interface Banners {
  id: number;
  title: string;
  type: string;
  img: string;
}

export const getBanners = async (): Promise<Banners[]> => {
  try {
    const res = await fetch(`${url}/banners`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
