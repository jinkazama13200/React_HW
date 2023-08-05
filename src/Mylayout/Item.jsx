import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Item() {
  return (
    <>
      <div className="item col-4">
        <div className="item_box text-center p-5">
          <div className="item_icon d-inline-block">
            <i id="icon">
              <FontAwesomeIcon icon={faLayerGroup} />
            </i>
          </div>
          <div className="item_body">
            <h2 className="sub_title fw-bold">Fresh new layout</h2>
            <p>
              With Bootstrap 5, we've created a fresh new layout for this
              template!
            </p>
          </div>
        </div>
      </div>
      <div className="item col-4">
        <div className="item_box text-center p-5">
          <div className="item_icon d-inline-block">
            <i id="icon">
              <FontAwesomeIcon icon={faCloud} />
            </i>
          </div>
          <div className="item_body">
            <h2 className="sub_title fw-bold">Free to download</h2>
            <p>
              As always, Start Bootstrap has a powerful collectin of free
              templates.
            </p>
          </div>
        </div>
      </div>
      <div className="item col-4">
        <div className="item_box text-center p-5">
          <div className="item_icon d-inline-block">
            <i id="icon">
              <FontAwesomeIcon icon={faCreditCard} />
            </i>
          </div>
          <div className="item_body">
            <h2 className="sub_title fw-bold">Jumbotron hero header</h2>
            <p>
              The heroic part of this template is the jumbotron hero header!
            </p>
          </div>
        </div>
      </div>
      <div className="item col-4">
        <div className="item_box text-center p-5">
          <div className="item_icon d-inline-block">
            <i id="icon">
              <FontAwesomeIcon icon={faBox} />
            </i>
          </div>
          <div className="item_body">
            <h2 className="sub_title fw-bold">Feature boxes</h2>
            <p>
              We've created some custom feature boxes using Bootstrap icons!
            </p>
          </div>
        </div>
      </div>
      <div className="item col-4">
        <div className="item_box text-center p-5">
          <div className="item_icon d-inline-block">
            <i id="icon">
              <FontAwesomeIcon icon={faCode} />
            </i>
          </div>
          <div className="item_body">
            <h2 className="sub_title fw-bold">Simple clean code</h2>
            <p>
              We keep our dependencies up to date and squash bugs as they come!
            </p>
          </div>
        </div>
      </div>
      <div className="item col-4">
        <div className="item_box text-center p-5">
          <div className="item_icon d-inline-block">
            <i id="icon">
              <FontAwesomeIcon icon={faCircleCheck} />
            </i>
          </div>
          <div className="item_body">
            <h2 className="sub_title fw-bold">A name you trust</h2>
            <p>
              Start Bootstrap has been the leader in free Bootstrap templates
              since 2013!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
