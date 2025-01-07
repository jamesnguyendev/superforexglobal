import React from "react";
import Image from "next/image";

const chooseCard = ({ img, title, content }) => {
  return (
    <div className={"flex flex-col gap-y-4 items-center p-6 text-center"}>
      <img
        src={img}
        alt={title}
        className={"object-cover w-fit"}
        loading="lazy"
      />
      <h1 className="font-semibold text-default text-lg">{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default chooseCard;
