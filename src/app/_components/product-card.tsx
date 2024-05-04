"use client";
import React from "react";
import { CardType } from "@/types/card-type";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { add } from "@/redux/card";
import { BinIcon } from "../../../public/icons/bin-icon";
import { Rating } from "../../../public/icons/rating";
import { useDispatch } from "react-redux";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export const ProductCard: React.FC<CardType> = ({
  photo,
  title,
  cost,
  oldcost,
  id,
  description,
}) => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const addStore = () => {
    dispatch(add({ title, oldcost, description, cost, id, photo }));
    toast({
      title: "Mahsulot muvaffavqiyatli savatga qo'shildi!",
      // description: "Friday, February 10, 2023 at 5:57 PM",
      
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };
  return (
    <div className="bg-white w-[290px] h-[443px] justify-between p-3 flex flex-col rounded-lg">
      <Link href={`/detail/${id}`}>
        <img className="object-contain h-[262px]" src={photo} alt="img" />
      </Link>
      <Link
        href={`/detail/${id}`}
        className="hover:text-primary text-md font-medium text-center"
      >
        {title}
      </Link>
      <div className="flex justify-between items-center">
        <div>
          <Rating />
        </div>
        <p className="text-gray-500 font-medium text-sm line-through">
          {oldcost} so'm
        </p>
      </div>
      <h4 className="font-bold text-lg">{cost} so'm</h4>
      <Button onClick={addStore} className="flex gap-2">
        <BinIcon />
        Savatchaga
      </Button>
    </div>
  );
};
