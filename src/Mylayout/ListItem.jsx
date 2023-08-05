import React from "react";
import Item from "./Item";

export default function ListItem() {
  return (
    <section className="list_item mt-5">
      <div className="container">
        <div className="list_content row gy-5">
          <Item />
        </div>
      </div>
    </section>
  );
}
