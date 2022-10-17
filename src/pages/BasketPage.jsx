import React from "react";
import { useSelector } from "react-redux";

function BasketPage() {
  const items = useSelector((item) => item);

  console.log("itemsVal", items);

  return (
    <div className="  m-4 space-y-4 ">
      {items.map((val, i) => (
        <div className="flex bg-slate-300 ">
          <div className="cartImg divSec">
            <img className="w-16 h-16" src={val.image} alt="" />
          </div>
          <div className="cartTitle divSec">
            <p>{val.title}</p>
          </div>
          <div className="cartPrice divSec">
            <p>{val.price}</p>
          </div>
          <div className="cartBtn divSec ">
            <button className="text=lg font-bold mx-2">-</button>
            QTY
            <button className="text=lg font-bold mx-2">+</button>
          </div>
        </div>
      ))}

      <div>
        <h3>Total Price: </h3>
      </div>
    </div>
  );
}

export default BasketPage;
