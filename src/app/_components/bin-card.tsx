import React from "react";
import { useDispatch } from "react-redux";
import { toggleProduct } from "../../redux/card";
import { deleteProduct } from "../../redux/card";
import { BinIcon } from "../../../public/icons/bin-icon";
import { DeleteIcon } from "../../../public/icons/delete";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"



export const BinCard: React.FC<{
  title: string;
  description?: string;
  id?: number;
  cost?: number;
  photo?: any;
  fashion?: string;
  categoryName?: string;
  userCount?: number;
  userPrice?: number;
  oldcost?: number | string;
}> = ({
  title,
  photo,
  categoryName,
  description,
  id,
  cost,
  fashion,
  oldcost,
  userCount,
  userPrice,
}) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  return (
    <div className="flex items-center justify-center w-[900px] gap-[20px] mb-[30px] p-[20px] mx-auto rounded-2xl bg-white">
      <div className="w-[300px] h-[300px]">
        <img className=" w-full h-full object-contain" src={photo} alt=" img" />
      </div>
      <div className="w-[600px]">
        <div className="mb-[20px]">
          <h2 className="text-2xl font-medium mb-2">{title}</h2>
          <p className="text-base mb-2">{description}</p>
          <div className="flex gap-10 items-center">
            <p className=" text-blue-800 text-xl font-semibold">{cost} so'm</p>
            <p className="text-gray-500 font-semibold text-sm line-through">
              {oldcost} so'm
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => dispatch(toggleProduct({ type: "increment", id }))}
              className="font-bold  border-2 hover:border-primary py-[1px] border-black hover:text-primary px-2 rounded-full "
            >
              +
            </button>

            <strong className="px-2">{userCount}</strong>
            <button
              onClick={() => dispatch(toggleProduct({ type: "decrement", id }))}
              className="font-bold border-2 hover:border-primary hover:text-primary border-black px-2 rounded-full"
            >
              -
            </button>
            <button
              className="ml-5"
              onClick={() => dispatch(deleteProduct({ id }), toast({
                title: "Mahsulot muvaffavqiyatli o'chirildi!",
                action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
              }))}
            >
              <div className="hover:text-red-600">
                <DeleteIcon />
              </div>
            </button>
          </div>
          <div>
            <p className="text-xl font-semibold text-primary "><span className="text-blue-800">Umumiy summa:</span> {userPrice} so'm</p>
          </div>
        </div>
      </div>
    </div>
  );
};
