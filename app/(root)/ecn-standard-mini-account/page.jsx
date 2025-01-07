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
import AccountForm from "../../components/accountForm";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import StyledTable from "./table";
import StyledGridImg3 from "../crypto-account/gridImg3";

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

export default function ECNStandardMiniAccount() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container maxWidth="lg">
        <Stack className="py-12 text-default items-center">
          <p className="px-2 font-bold text-5xl">
            ECN Standard-Mini Account
          </p>
          <p className="p-2 font-bold text-xl">
            As an ordinary ECN Account, only smaller
          </p>
        </Stack>
      </Container>

      <Container maxWidth="lg" className="my-10 text-default">
        <Grid container spacing={10}>
          <Grid item size={{ sm: 12, md: 6 }}>
            <StyledTable />
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
                "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-ecn-standard-mini.d99a9e4f.png&w=640&q=75"
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
            <div onClick={handleOpen}>
              <Button name={"Open Account"} background />
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className="my-10 text-default">
        <Grid container spacing={3}>
          <StyledGridImg3
            img={
              "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadvantage-illustration-1.1b80be5c.jpg&w=256&q=75"
            }
            name={"Licensed broker"}
            text={
              "SuperForex is a regulated Forex broker with 7+ years of experience."
            }
          />
          <StyledGridImg3
            img={
              "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadvantage-illustration-2.956a7267.jpg&w=256&q=75"
            }
            name={"Tight spreads"}
            text={
              "We offer accounts with fixed or floating spreads and fast order execution."
            }
          />
          <StyledGridImg3
            img={
              "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadvantage-illustration-3.7f969609.jpg&w=256&q=75"
            }
            name={"Broad bonus program"}
            text={
              "People who prefer trading with bonuses can choose one to suit their needs."
            }
          />
          <StyledGridImg3
            img={
              "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadvantage-illustration-4.4de931ce.jpg&w=256&q=75"
            }
            name={"Variety of assets"}
            text={"We have a large selection of trading tools to make profits"}
          />
        </Grid>
      </Container>

      <Container>
        <div className={"grid grid-cols-1 items-center gap-24 lg:grid-cols-2"}>
          <span className="flex justify-center">
            <img
              src="https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-user.82eee720.png&w=640&q=75"
              loading="lazy"
              width="446"
              height="462"
              decoding="async"
              data-nimg="1"
              className=""
              alt="background round"
            />
          </span>
          <div className="flex flex-col items-start gap-y-6">
            <h2 className={"text-5xl font-semibold text-default"}>
              ECN Standard-Mini account: perfect for beginners
            </h2>
            <p className={"m-0 font-normal text-default"}>
              Opening an ECN account is a great way to take advantage of all the
              benefits of electronic trading. With an ECN account, you have
              direct access to the world's largest liquidity pools, giving you
              unparalleled opportunities for price discovery and execution.
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
                  Get ECN pricing and floating spreads on a smaller account size
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
                  Trade the most popular currency pairs
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
                  Benefit from the tightest spreads in the market
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
                  No requotes or rejections
                </div>
              </div>
            </div>
            <div onClick={handleOpen}>
              <Button name={"Open Account"} />
            </div>
          </div>
        </div>
      </Container>

      <Container maxWidth="lg" className="my-10 text-default">
        <Grid container spacing={10} className="justify-center items-center">
          <Grid item size={{ sm: 12, md: 6 }}>
            <p className="font-bold text-5xl">
              Why open an ECN Standard-Mini Account
            </p>
            <br />
            <Typography>
              Moreover, ECN accounts are known for their superior order handling
              and tight spreads, making them a market leader in terms of
              liquidity, reliability, and performance. So if you're looking for
              a robust trading platform that can help you grow your portfolio
              faster without big trading volumes, then an ECN Standard-Mini
              Account account is definitely the way to go.
            </Typography>
            <br />
            <Typography>
              ECN (Electronic Communications Network) technology is one of the
              most preferred methods for trading on the Forex market. Especially
              when paired with Expert Advisors, ECN accounts prove to be one the
              fastest ways to execute profitable orders, even outside the
              regular working hours of the financial markets. Our ECN Standard
              Mini account is ideal for traders who want to give ECN a try but
              prefer trading with smaller volumes.
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
                "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-trading-instruments.dbf7128d.png&w=640&q=75"
              }
              alt={"img"}
            />
          </Grid>
        </Grid>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AccountForm data={["ECN Standrad Mini"]} />
        </Box>
      </Modal>
    </>
  );
}
