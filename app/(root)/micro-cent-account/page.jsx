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

import Button from "../../components/buttonCustomize";
import AccountForm from "../../components/accountForm";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

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

const StyledGridImg3 = ({ name, text, img }) => {
  return (
    <Grid
      item
      size={{ xs: 12, sm: 6, md: 3 }}
      className="rounded-lg border-solid border-2 border-sky-light_grey hover:shadow-2xl"
      style={{ justifyContent: "space-between" }}
    >
      <Stack
        className="text-default"
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <img src={img} alt={img} className="m-10" />

        <p className="font-bold mb-3 mx-3 text-2xl">
          {name}
        </p>

        <p className="mb-3 mx-3">{text}</p>
      </Stack>
    </Grid>
  );
}

const StyledTable = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: "#35465B",
      border: 0,
    },
    [`&.${tableCellClasses.body}`]: {
      color: "#35465B",
      width: "50%",
      // border: 0,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      border: 0,
    },
    // hide last border
    "&:last-child td, &:last-child th ": {
      border: 0,
    },
  }));

  function createData(name, text) {
    return { name, text };
  }

  const rows = [
    createData("Account currency", "USD, EUR, ZAR"),
    createData("Minimum deposit", "1 USD"),
    createData("Maximum deposit", "Unlimited"),
    createData("Recommended deposit", "10 USD"),
    createData("Compatible with bonuses", "Welcome, Energy, Hot"),
    createData("Lot size", "10,000 cents"),
    createData("Maximum leverage", "1:1000"),
    createData("Swaps", "Yes"),
    createData("Spreads", "Fixed"),
    createData("Compatible with Forex Copy", "No"),
  ];

  return (
    <TableContainer>
      <Table aria-label="customized table">
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                <div className="font-bold">
                  {row.name}
                </div>
              </StyledTableCell>
              <StyledTableCell>{row.text}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function MicroCentAccount() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container maxWidth="lg">
        <Stack className="py-12 text-default items-center">
          <p className="px-2 font-bold text-5xl">
            Micro Cent Account
          </p>
          <p className="p-2 font-bold text-xl">
            Ideal for those who are just starting their Forex career
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
                "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-micro-cent.186e8d33.png&w=640&q=75"
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
              Work with small investments on a cent account
            </h2>
            <p className={"m-0 font-normal text-default"}>
              You don't have to deposit large amounts of money or keep a lot of
              it on your account to meet equity requirements.
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
                  Helps traders who want to trade with minimum risk
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
                  Get started with trading for as little as $1
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
                  Perfect learning environment
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
                  No volume or free margin worries
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
              Trade on a Cent account without risking much money
            </p>
            <br />
            <Typography>
              Many beginner traders find the financial markets too whimsical and
              unpredictable, which exposes them to more risk and might
              discourage them from trading altogether. In order to help you get
              started with minimum risk, we developed our special Micro Cent
              Account - the perfect solution for traders who prefer a careful
              path to success.
            </Typography>
            <br />
            <Typography>
              The Micro Cent Account is created to work with small investments,
              so you don’t have to deposit large amounts of money or keep a lot
              of it on your account to meet equity requirements. This provides
              the perfect learning environment where you can become more
              experienced and confident in your skills, while still making a
              profit.
            </Typography>
            <br />
            <Typography>
              You are able to recharge your Micro Cent Account with a small
              deposit which would be displayed in cents and would appear 100
              times bigger. This way you can trade without worrying about volume
              and free margins.
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
          <AccountForm data={["Micro Cent"]} />
        </Box>
      </Modal>
    </>
  );
}
