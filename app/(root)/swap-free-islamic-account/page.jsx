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

const CardItem = ({ ques, ans }) => {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Card
      className="my-2 text-default bg-white cursor-pointer shadow-md w-100"
      onClick={() => setShow(!show)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Stack direction="row" className="justify-between p-5">
        <Typography className="font-bold">{ques}</Typography>

        {!hover && !show && <ArrowCircleDownIcon className="text-default" />}
        {hover && !show && <ArrowCircleDownIcon className="text-primary" />}
        {!hover && show && <ArrowCircleUpIcon className="text-default" />}
        {hover && show && <ArrowCircleUpIcon className="text-primary" />}
      </Stack>

      {show && (
        <>
          <Divider />
          <Stack className="p-5">
            <Typography>{ans}</Typography>
          </Stack>
        </>
      )}
    </Card>
  );
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

        <p className="font-bold mb-3 mx-3 text-2xl">{name}</p>

        <p className="mb-3 mx-3">{text}</p>
      </Stack>
    </Grid>
  );
};

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
    createData(
      "Account currency",
      "USD, EUR, GBP, CNY, AED, MYR, IDR, RUB, ZAR, NGN, INR, PKR, BDT, EGP, CHF, JPY, TRY, PHP, HKD, SGD, ILS, TZS, KES, GHS, UGX, ZMW, RWF"
    ),
    createData("Minimum deposit", "5 USD"),
    createData("Maximum deposit", "Unlimited"),
    createData("Recommended deposit", "50 USD"),
    createData("Compatible with bonuses", "Welcome, Energy, Hot, No deposit"),
    createData("Lot size", "10,000 USD"),
    createData("Maximum leverage", "1:1000"),
    createData("Swaps", "No"),
    createData("Spreads", "Fixed"),
    createData("Compatible with Forex Copy", "Yes"),
  ];

  return (
    <TableContainer>
      <Table aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <div className="font-bold">{row.name}</div>
              </StyledTableCell>
              <StyledTableCell>{row.text}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function SwapFreeIslamicAccount() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container maxWidth="lg">
        <Stack className="py-12 text-default items-center">
          <p className="px-2 font-bold text-5xl">
            Swap-Free Account
          </p>
          <p className="p-2 font-bold text-xl">
            For fans of the long-term trading strategies
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
                "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-swap-free.5d8b3a93.png&w=640&q=75"
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
              We provide the perfect Islamic account for all your Forex needs
            </h2>
            <p className={"m-0 font-normal text-default"}>
              For traders who want to avoid swaps, we recommend registering a
              Swap-free account. This type of account is ideal for anyone who
              would like to eliminate swaps from their trading strategy.
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
                  Avoid swaps and their associated fees
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
                  Ideal for religious traders or anyone looking to avoid
                  interest rates
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
                  Get a tailored account to fit your needs
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
                  Perfect for long term deals
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
              Why open an Islamic account for trading?
            </p>
            <br />
            <Typography>
              The swap-free account is also perfect for traders from religious
              backgrounds (especially Muslim), as the conditions agree with
              religious practices by not charging interest rates - that is the
              reason these accounts are often called ‘Islamic.’
            </Typography>
            <br />
            <Typography>
              Swaps are fees that can be both positive or negative and are
              charged by banks on deals that stay open overnight. The type of
              order (buy/sell) and the asset are the determining factors for the
              type of swap charged. You can check the specific amounts of the
              swap by browsing the list of trading instruments. The lack of
              swaps with our Islamic accounts is compensated with a fixed
              commission, which is perfect for traders who tend to make
              long-term deals.
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
          <AccountForm data={["Swap-Free"]} />
        </Box>
      </Modal>
    </>
  );
}
