import React from "react";
import "./vision.css";
import SecondaryBtn from "../../../components/secondaryBtn/SecondaryBtn";

export function DetailsSction({ data, btn }) {
  return (
    <div className="details-container">
      <div className="details">
        <div className="title">
          <span>{data.title}</span>
          <p>{data.subtitle}</p>
        </div>
        <div className="info">
          <p>{data.info}</p>
        </div>
        {btn && <SecondaryBtn content={btn.content} theme={btn.theme} /> }
      </div>
    </div>
  );
}

function Vision({ data }) {
  return (
    <div className="vision">
      <DetailsSction data={data} />
      <div className="show">
        <img
          src="https://static.wixstatic.com/media/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg/v1/fill/w_913,h_840,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Vision;
