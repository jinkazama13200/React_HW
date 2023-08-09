import React from "react";

export default function GlassModel({ glass }) {
  return (
    <div className="shop_model">
      <div className="model">
        <img className="model_img" src={"./img/model.jpg"} alt="iamge" />
        <img className="product_img" src={glass} alt="" />
      </div>
    </div>
  );
}
