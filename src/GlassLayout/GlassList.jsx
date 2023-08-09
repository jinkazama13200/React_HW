import React from "react";

export default function GlassList({ product, onChangeGlass }) {
  return product.map((value) => {
    return (
      <div
        key={value.id}
        onClick={() => {
          onChangeGlass(value.url);
        }}
        className="item d-flex"
      >
        <img className="item_img" src={value.url} alt={value.url} />
        <div className="item_info">
          <h3 className="item_name">{value.name}</h3>
          <p>Price: ${value.price}</p>
          <p style={{ color: "grey" }}>Description: {value.desc}</p>
        </div>
      </div>
    );
  });
}
