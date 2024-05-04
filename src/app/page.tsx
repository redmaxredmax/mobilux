// import { getCategory, getProducts } from "@/service/getCategory";
import { getCategory } from "@/service/category";
import { getProducts } from "@/service/phones";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getBanners } from "@/service/banner";
import { ProductCard } from "./_components/product-card";
import Link from "next/link";
import { RightArrow } from "../../public/icons/right-arrow";
import { ProductIcon } from "../../public/icons/product-icon";
import { BinIcon } from "../../public/icons/bin-icon";
export default async function Home() {
  const category = await getCategory();
  const banners = await getBanners();
  const products = await getProducts();

  return (
    <div className="flex ">
      <div className="w-[370px] sticky">
        <div className="">
          <div className="flex flex-col gap-9 px-[45px] pt-[30px] bg-white">
            <Button className="flex gap-3 font-semibold" variant="default">
              <BinIcon /> Buyurtmalar
            </Button>
            {category.map((item: any) => (
              <Link
                href={`/category/${item?.id}`}
                className="flex w-[200px] justify-between items-center hover:text-primary"
                key={item.id}
              >
                <h2 className="text-lg ">{item.name}</h2>
                <RightArrow />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-bg w-full  p-5">
        <div className="w-full bg-white mb-8">
          <Carousel className="">
            <CarouselContent className="">
              {banners.map((item: any) => (
                <img className="object-contain" src={item.img} alt="img" />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <div className="flex gap-4 ml-3 mb-5">
            <ProductIcon />
            <h2 className="font-bold text-2xl">Barcha mahsulotlar</h2>
          </div>
          <ul className="grid grid-cols-4 gap-3">
            {products.map((item: any) => (
              <li>
                <ProductCard key={item.id} {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
