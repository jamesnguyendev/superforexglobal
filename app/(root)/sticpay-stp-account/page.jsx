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
import Image from "next/image";

import Button from "../../components/buttonCustomize";
import AccountForm from "../../components/accountForm";

import SuperforexIcon from "../../../public/svg-sticpay-stp-account/superforex.svg";
import XIcon from "../../../public/svg-sticpay-stp-account/x.svg";
import SticpayIcon from "../../../public/svg-sticpay-stp-account/sticpay.svg";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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

        <p className="font-bold mb-3 mx-3 text-center text-2xl">
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
    createData("Account currency", "USD, EUR"),
    createData("Minimum deposit", "50 USD / 50 EUR"),
    createData("Maximum deposit", "Unlimited"),
    // createData("Recommended deposit", "1000 USD"),
    createData("Compatible with bonuses", "No"),
    createData("Lot size", "100,000 USD"),
    createData("Maximum leverage", "1:1000"),
    createData("Swaps", "No"),
    createData("Spreads", "0"),
    createData("Compatible with Forex Copy", "No"),
  ];

  return (
    <TableContainer>
      <Table aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
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

export default function SticpaySTPAccount() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLinkClick = (event) => {
    event.preventDefault();
    window.open("https://sticpay.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack className="py-12 text-default items-center">
          <p  className="px-2 font-bold text-5xl">
            Sticpay Super STP Account
          </p>
          <p className="p-2 font-bold text-xl">
            Greater advantages than you can imagine
          </p>
        </Stack>
      </Container>

      <Container maxWidth="md">
        <Card className="py-12 px-10 text-default items-center">
          <Stack direction="row" spacing={4} className="justify-center mb-5">
            <Image src={SuperforexIcon} alt="img" />
            <Image src={XIcon} alt="img" />
            <Image src={SticpayIcon} alt="img" />
          </Stack>
          <Typography>
            The account has been developed in collaboration with Sticpay,
            exclusively for&nbsp;
            <span
              className="text-primary font-bold cursor-pointer hover:text-default"
              onClick={handleLinkClick}
            >
              Sticpay wallet
              <OpenInNewIcon fontSize="small" />
            </span>
            &nbsp;owners, which is unique and unparalleled in the market. By
            using this account, you will get more than you think.
          </Typography>
        </Card>
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
                "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-card.346df4ae.png&w=640&q=75"
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
              "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-zero-spread.e727bafa.jpg&w=256&q=75"
            }
            name={"Zero spread"}
          />
          <StyledGridImg3
            img={
              "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-zero-commission.9f8e827a.jpg&w=256&q=75"
            }
            name={"Zero commission on Deposit & Withdrawals"}
          />
          <StyledGridImg3
            img={
              "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-double-bonus.9f3c26af.jpg&w=256&q=75"
            }
            name={"Double Welcome Bonus"}
          />
          <StyledGridImg3
            img={
              "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-rebate-commission.96d8098f.jpg&w=256&q=75"
            }
            name={"Up to 100% rebate on spent commissions"}
          />
        </Grid>
      </Container>

      <Container maxWidth="lg" className="my-10 text-default">
        <Grid container spacing={10} className="justify-center items-center">
          <Grid item size={{ sm: 12, md: 6 }}>
            <p className="font-bold text-5xl">
              Fixed commission fees instead of spreads
            </p>
            <br />
            <Typography>
              Both new and existing customers are welcome to register this type
              of account where spreads have been replaced by fixed commission
              fees.
            </Typography>
            <br />
            <Typography>
              Due to the lack of spreads with this account, the full cost of
              every order is available in advance and can be checked in
              MetaTrader 4, which would help you make accurate calculations
              about your funds and orders.
            </Typography>
            <br />
            <Typography>
              If you’re looking for a Forex trading account that can help you
              make the most accurate calculations and trades, then look no
              further than the Sticpay Super STP account from SuperForex. With
              no spreads to worry about, you can focus on what’s really
              important – making profitable trades. So why not open a Sticpay
              Super STP account today and start trading with confidence?
            </Typography>
            <br />
            <div onClick={handleOpen}>
              <Button name={"Open Account"} background />
            </div>
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
                "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-user.c3d87053.png&w=640&q=75"
              }
              alt={"img"}
            />
          </Grid>
          <Grid item size={{ sm: 12, md: 6 }}>
            <p className="font-bold text-5xl">
              How to Start?
            </p>
            <br />
            <Typography>
              To open a Sticpay Super STP account you must make a deposit of 50
              USD or EUR. The commission applied to Sticpay Super STP accounts
              is up to 25% less than our regular rates. fees.
            </Typography>
            <br />
            <Typography>
              If you don't have a Sticpay wallet yet, you can&nbsp;
              <span
                className="text-primary font-bold cursor-pointer hover:text-default"
                onClick={handleLinkClick}
              >
                open one right now
                <OpenInNewIcon fontSize="small" />
              </span>
              &nbsp;and receive this trading account with the best trading
              conditions as early as tomorrow.
            </Typography>
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
          <AccountForm data={["Sticpay STP"]} />
        </Box>
      </Modal>
    </>
  );
}
