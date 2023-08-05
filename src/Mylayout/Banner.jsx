import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner_box mt-5">
          <div className="banner_content text-center p-5">
            <h1 style={{ fontWeight: "bold" }} className="sub_title">
              Welcome to my Banner!
            </h1>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam distinctio provident eum doloremque consequatur culpa
              eos blanditiis velit magni, quos reprehenderit amet libero
              aperiam! Id omnis mollitia vitae tenetur totam doloremque odio,
              optio pariatur accusamus minus non hic recusandae fugit veniam
              asperiores? Recusandae qui dolore quo, eos voluptas exercitationem
              ipsa?
            </p>
            <button className="btn btn-primary">More Info</button>
          </div>
        </div>
      </div>
    </section>
  );
}
