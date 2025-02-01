"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Stack,
  Typography,
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  tableCellClasses,
  Modal,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

import Button from "../../components/buttonCustomize";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import CardItem from "./cardItem";
import StyledGridImg3 from "./gridImg3";
import StyledTable from "./table";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function DemoAccount() {
  return (
    <>
      <Container maxWidth="lg">
        <Stack className="py-12 text-default items-center">
          <p className="px-2 font-bold text-5xl">
            Demo Account for Free Trading
          </p>
          <p className="p-2 font-bold text-xl">
            Trade Forex, gold, shares and more for free without risks. Get
            started in the Forex market today with our free demo account.
          </p>
        </Stack>
      </Container>

      <Container maxWidth="lg" className="my-10 text-default">
        <Grid container spacing={10}>
          <Grid item size={{ sm: 12, md: 6 }}>
            <StyledTable />
            <Stack className="bg-[#f6f9fc] p-2 mt-5 rounded-lg">
              <p className="font-bold">
                Notice: You cannot withdraw profit from this type of account.
              </p>
            </Stack>
          </Grid>
          <Grid
            item
            size={{ sm: 12, md: 6 }}
            className="items-center"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/card-demo.png?updatedAt=1735637927200"
              }
              alt={"img"}
            />
          </Grid>
          <Grid
            item
            size={12}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link href={"https://my.superforex.global"}>
              <Button name={"Open Account"} background />
            </Link>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className="my-10 text-default">
        <Grid container spacing={3}>
          <StyledGridImg3
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/advantage-illustration-1.jpg?updatedAt=1735631471582"
            }
            name={"Licensed broker"}
            text={
              "SuperForex is a regulated Forex broker with 7+ years of experience."
            }
          />
          <StyledGridImg3
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/advantage-illustration-2.jpg?updatedAt=1735631471575"
            }
            name={"Tight spreads"}
            text={
              "We offer accounts with fixed or floating spreads and fast order execution."
            }
          />
          <StyledGridImg3
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/advantage-illustration-3.jpg?updatedAt=1735631471648"
            }
            name={"Broad bonus program"}
            text={
              "People who prefer trading with bonuses can choose one to suit their needs."
            }
          />
          <StyledGridImg3
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/advantage-illustration-4.jpg?updatedAt=1735631471609"
            }
            name={"Variety of assets"}
            text={"We have a large selection of trading tools to make profits"}
          />
        </Grid>
      </Container>

      <Container>
        <div className={"grid grid-cols-1 items-center gap-24 lg:grid-cols-2"}>
          <div className="flex flex-col items-start gap-y-6">
            <h2 className={"text-5xl font-semibold text-default"}>
              Try a Forex demo account and get started in the exciting world of
              currency trading
            </h2>
            <p className={"m-0 font-normal text-default"}>
              One great way to improve your Forex skills is to practice in a
              demo account. Forex demo accounts allow you to trade in a
              risk-free environment, which is great for beginners. Forex demo
              accounts also give you the opportunity to try out different
              strategies without using any real money. This can be a great way
              to learn more about Forex trading and to test out new strategies.
            </p>
            <div className="flex flex-col gap-y-2">
              <div className="inline-flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mt-[2px] shrink-0 text-primary"
                >
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="ms-2 font-sohne text-sm font-semibold text-default">
                  Perfect for beginners – learn the basics of Forex trading
                  without risking your own money
                </div>
              </div>
              <div className="inline-flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mt-[2px] shrink-0 text-primary"
                >
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="ms-2 text-sm font-semibold text-default">
                  Opportunity to try out new strategies in a safe environment
                </div>
              </div>
              <div className="inline-flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mt-[2px] shrink-0 text-primary"
                >
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="ms-2 text-sm font-semibold text-default">
                  Get comfortable with the trading terminal and its functions
                  before you start risking your own money
                </div>
              </div>
              <div className="inline-flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mt-[2px] shrink-0 text-primary"
                >
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="ms-2 text-sm font-semibold text-default">
                  Gain a better understanding of how the Forex market works
                  before investing any real money
                </div>
              </div>
            </div>
            <Link href={"https://my.superforex.com/demo/register"}>
              <Button name={"Open Account"} />
            </Link>
          </div>
          <span className="flex justify-center">
            <img
              src="https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-trading-instruments.jpg?updatedAt=1735631477392"
              loading="lazy"
              width="446"
              height="462"
              decoding="async"
              data-nimg="1"
              className=""
              alt="background round"
            />
          </span>
        </div>
      </Container>

      <Container maxWidth="lg" className="my-10 text-default">
        <Grid container spacing={10} className="justify-center items-center">
          <Grid
            item
            size={{ sm: 12, md: 6 }}
            className="items-center"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-user.png?updatedAt=1735638124129"
              }
              alt={"img"}
            />
          </Grid>
          <Grid item size={{ sm: 12, md: 6 }}>
            <p className="font-bold text-5xl">How to open a demo account?</p>
            <br />
            <Typography>
              Trade with real-time prices, no risk and see how to make money on
              the Forex market. Click the Open Account button and fill in the
              registration form to practice trading on a SuperForex demo
              account.
            </Typography>
            <br />
            <Typography>
              Opening a Forex demo account is a great way to get started in
              Forex trading. A demo account allows you to practice Forex trading
              in a risk-free environment, which is perfect for beginners who are
              just starting out. Forex demo accounts also allow you to try out
              different strategies without using any real money.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className="my-10 text-default">
        <Grid container spacing={10} className="justify-center items-center">
          <Grid item size={{ sm: 12, md: 6 }}>
            <p className="font-bold text-5xl">
              Demo account for experienced traders
            </p>
            <br />
            <Typography>
              Forex demo accounts can also be helpful for experienced traders.
              Sometimes, experienced traders need to try out a new strategy in
              practice without using any real money. Forex demo accounts allow
              them to do this without risking any of their own money.
            </Typography>
            <br />
            <Typography>
              Use the free Forex demo account to practice trading with virtual
              money until you feel comfortable enough to start trading with real
              money. Sign up for a demo account and begin practicing before
              starting your journey!
            </Typography>
          </Grid>
          <Grid
            item
            size={{ sm: 12, md: 6 }}
            className="items-center"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-chart.png?updatedAt=1735638174283"
              }
              alt={"img"}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
