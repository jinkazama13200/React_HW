import React from "react";
export default function GlassModel({ glass }) {
  return (
    <div className="shop_model">
      <div className="model">
        <img className="model_img" src={"./img/model.jpg"} alt="image" />
        <img
          className="animate__animated animated__swing product_img"
          src={glass}
          alt={glass}
        />
      </div>
    </div>
  );
}
