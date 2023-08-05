import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Item({ icon, title, content }) {
  return (
    <>
      <div className="item col-4">
        <div className="item_box text-center p-5">
          <div className="item_icon d-inline-block">
            <i id="icon">
              <FontAwesomeIcon icon={icon} />
            </i>
          </div>
          <div className="item_body">
            <h2 className="sub_title fw-bold">{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
