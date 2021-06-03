import React from "react";
import "./_videos.scss";
import { AiFillEye } from "react-icons/ai";

const Videos = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/DQ4r7HegRQw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmT1_wHw2AQZl0az_-Adxewd5suQ"
          alt=""
        />
        <span>05:43</span>
      </div>

      <div className="video__title">
        Created by Hannah Baker welcome to your tapes{" "}
      </div>
      <div className="video__detials">
        <span>
          <AiFillEye className="ans" /> 10m Views • 5days ago
        </span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwnhe7O9GvvpT9Xpju21bHY9He61Tpv-GT56cKVipzjs=s176-c-k-c0x00ffffff-no-rj-mo"
          alt=""
        />
        <p> Marvel </p>
      </div>
    </div>
  );
};

export default Videos;
