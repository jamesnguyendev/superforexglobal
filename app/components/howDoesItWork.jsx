import React from "react";
import Button from "../components/buttonCustomize";
import Image from "next/image";
import { Container } from "@mui/material";

const howDoesItWork = ({
  title,
  subTitle,
  titleOption,
  topicTitle,
  topicContent,
  topicTitleNd,
  topicContentNd,
  topicTitleRd,
  topicContentRd,
}) => {
  return (
    <Container className={"py-20"}>
      <h2 className={"mb-7 text-center text-5xl font-semibold text-default"}>
        {title}
      </h2>
      <p
        className={
          "m-0 mx-auto mb-7 max-w-3xl text-xl font-normal text-default text-center"
        }
      >
        {subTitle}
      </p>
      {titleOption ? (
        <p
          className={
            "m-0 mx-auto mb-20 max-w-3xl text-xl font-normal text-default"
          }
        >
          {titleOption}
        </p>
      ) : null}
      <div className="grid grid-cols-1 items-center gap-20 pt-28 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-y-8">
          <div className="flex gap-x-4">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
              1
            </span>
            <div className="flex flex-col items-start gap-y-2">
              <h4 className={"mt-1 text-xl font-semibold text-default"}>
                {topicTitle}
              </h4>
              <div className="font-normal text-default">{topicContent}</div>
              <div className="flex flex-row justify-center items-center">
                <a href="#register">
                  <Button name={"Open Account"} background={false} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
              2
            </span>
            <div className="flex flex-col items-start gap-y-2">
              <h4 className={"mt-1 text-xl font-semibold text-default"}>
                {topicTitleNd}
              </h4>
              <div className="font-normal text-default">{topicContentNd}</div>
            </div>
          </div>
          <div className="flex gap-x-4">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
              3
            </span>
            <div className="flex flex-col items-start gap-y-2">
              <h4 className={"mt-1 text-xl font-semibold text-default"}>
                {topicTitleRd}
              </h4>
              <div className="font-normal text-default">{topicContentRd}</div>
            </div>
          </div>
        </div>
        <Image
          src={"/Image/illustration-present-box.jpg"}
          alt={"illustration-present-box"}
          width={442}
          height={442}
          className={"w-full"}
        />
      </div>
    </Container>
  );
};

export default howDoesItWork;
