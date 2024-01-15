import React from "react";

export default function Card(imgURL) {
  return (
    <>
      <div className="m-card mr-t shadow">
        <img
          alt="..."
          className="rel-img shadow"
          src={require("../../assets/img/laptop-img.jpeg")}
          style={{ width: "200px" }}
        />
        <p className="">Find me on:</p>
        <div className=" pd-r">
          <a className="color-none" href="www.google.com">
            <i class="fa fa-linkedin" aria-hidden="true" />
          </a>

          <a className="color-none" href="www.google.com">
            <i class="fa fa-behance" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
}
