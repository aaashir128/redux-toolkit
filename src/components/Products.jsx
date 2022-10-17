import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../features/basketSlice";

function Products({ data, index }) {
  const dispatch = useDispatch();
  const items = useSelector((item) => item.basket.cartItem);

  const filterItem = items.filter((item) => item.id === data.id);

  useEffect(() => {
    console.log("filterItem", filterItem);
  }, [filterItem]);

  const addItem = (item) => {
    dispatch(add(item));
  };
  const removeItem = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <div className="w-60 h-72 bg-slate-100 items-center text-center flex flex-col m-6 rounded-lg">
        <img className="w-16 h-32 object-cover" src={data.image} alt="" />
        <p className="text-lg font-semibold ">{data.title}</p>
        <p className="text-md  ">{data.details}</p>
        <p className="text-lg font-bold ">${data.price}</p>
        <div className="flex  justify-evenly w-full items-center">
          <button
            onClick={() => removeItem(data.id)}
            className=" font-semibold text-2xl rounded-2xl p-4"
          >
            -
          </button>
          {filterItem[0]?.cartQty}
          <button
            onClick={() => addItem(data)}
            className=" font-semibold text-2xl rounded-2xl p-4"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
