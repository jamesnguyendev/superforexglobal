import { Container } from "@mui/material";
import React from "react";
import ChooseCard from "../components/chooseCard";

const whyChoose = ({ data, title }) => {
  return (
    <div>
      <section
        className={"text-center text-[2.5rem] font-semibold text-default"}
      >
        <h2>{title}</h2>
      </section>
      <Container className={"pb-20"}>
        <section className={"grid grid-cols-1 gap-8 py-14 lg:grid-cols-3"}>
          {data.map((item, index) => (
            <div
              key={index}
              className={
                "border rounded-lg transition duration-150 hover:shadow-2xl hover:border-transparent"
              }
            >
              <ChooseCard
                img={item.img}
                title={item.title}
                content={item.content}
              />
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
};

export default whyChoose;
