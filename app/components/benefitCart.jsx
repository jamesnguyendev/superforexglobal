import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

const BenefitCart = ({ data, title, option }) => {
  return (
    <Container className="my-12 text-default">
      <h2 className="text-3xl mb-6">{title}</h2>
      <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((item, index) => (
          <div
            className="flex flex-col overflow-hidden h-full bg-white rounded-lg z-10 shadow-2xl"
            key={index}
          >
            <div className="p-6 w-full flex items-center justify-center bg-cover bg-no-repeat bg-center bg-benefit">
              <div className="inline-flex overflow-hidden items-center justify-center bg-white p-4 size-32 rounded-full shadow-md">
                <Image
                  src={item.icon}
                  alt="bagMoney"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="py-3 px-6 text-center">
              {option ? (
                <>
                  <h4 className="text-[23px] font-normal mb-4">{item.title}</h4>
                  <p className="text-[1rem] ">{item.content}</p>
                </>
              ) : (
                <h4 className="text-[23px] font-normal">{item.content}</h4>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BenefitCart;
