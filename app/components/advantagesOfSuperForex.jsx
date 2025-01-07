import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

const WhyChoose = ({
  maintitle,
  firsticon,
  firsttitle,
  firstcontent,
  secondicon,
  secondtitle,
  secondcontent,
  thirdicon,
  thirdtitle,
  thirdcontent,
}) => {
  return (
    <Container className={"py-20"}>
      <h2 className={"text-center text-5xl font-semibold text-default"}>
        {maintitle}
      </h2>
      <div className="grid grid-cols-1 gap-8 py-14 lg:grid-cols-3">
        <div className="flex flex-col gap-y-4 rounded-lg transition duration-150 hover:shadow-xl p-12">
          <Image src={firsticon} alt="global" width={50} height={50} />
          <h4 className="text-lg font-semibold text-default">{firsttitle}</h4>
          <div className="font-normal text-default">{firstcontent}</div>
        </div>
        <div className="flex flex-col gap-y-4 rounded-lg transition duration-150 hover:shadow-xl p-12">
          <Image src={secondicon} alt="global" width={50} height={50} />
          <h4 className="text-lg font-semibold text-default">{secondtitle}</h4>
          <div className="font-normal text-default">{secondcontent}</div>
        </div>
        <div className="flex flex-col gap-y-4 rounded-lg transition duration-150 hover:shadow-xl p-12">
          <Image src={thirdicon} alt="global" width={50} height={50} />
          <h4 className="text-lg font-semibold text-default">{thirdtitle}</h4>
          <div className="font-normal text-default">{thirdcontent}</div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
