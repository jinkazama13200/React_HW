import React from "react";
import Item from "./Item";

import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function ListItem() {
  return (
    <section className="list_item mt-5">
      <div className="container">
        <div className="list_content row gy-5">
          <Item
            icon={faLayerGroup}
            title={"Fresh new layout"}
            content={"With Bootstrap 5, we've created a fresh new layout for this template!"}
          />
          <Item
            icon={faCloud}
            title={"Free to download"}
            content={"As always, Start Bootstrap has a powerful collectin of free templates."}
          />
          <Item
            icon={faCreditCard}
            title={"Jumbotron hero header"}
            content={"The heroic part of this template is the jumbotron hero header!"}
          />
          <Item
            icon={faBox}
            title={"Feature boxes"}
            content={"We've created some custom feature boxes using Bootstrap icons!"}
          />
          <Item
            icon={faCode}
            title={"Simple clean code"}
            content={"We keep our dependencies up to date and squash bugs as they come!"}
          />
          <Item
            icon={faCircleCheck}
            title={"A name you trust"}
            content={"Start Bootstrap has been the leader in free Bootstrap templates since 2013!"}
          />
        </div>
      </div>
    </section>
  );
}
