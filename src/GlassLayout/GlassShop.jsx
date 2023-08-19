import React from "react";
import GlassModel from "./GlassModel";
import GlassList from "./GlassList";
import glasses from "./glasses.json";
import { useState } from "react";

export default function GlassShop() {
  const [glass, setGlass] = useState("");
  const handleChangeGlass = (id) => {
    setGlass(id);
  };

  return (
    <>
      <div className="shop">
        <h1 className="shop_title text-center">My Glasses Shop</h1>
        <div className="shop_content d-flex justify-content-center">
          <GlassModel glass={[glass]} />

          <div className="list">
            <h2 className="list_title">Choose your glass</h2>
            <div className="item_list">
              <GlassList product={glasses} onChangeGlass={handleChangeGlass} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
