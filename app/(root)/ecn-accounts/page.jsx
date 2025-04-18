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
  TableHead,
  tableCellClasses,
  Modal,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

import Banner from "../../components/banner";
import Button from "../../components/buttonCustomize";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import AccountForm from "../../components/accountForm";

import StyledGrid3 from "./grid3";
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

export default function ECNAccounts() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Banner
        imgDesktop={"/Image/hero-desktop-ecn-ltr.webp"}
        imgMobile={"/Image/hero-ecn-mobile.webp"}
        buttonName={"Open Account"}
        titleBanner={"ECN Technology"}
        subTitleBanner={"The fastest way to execute profitable trades"}
        textBannerColor={true}
        link={"#register"}
      />

      <Container maxWidth="lg">
        <Grid container spacing={3} className="my-5">
          <StyledGrid3 name={"0,5pips"} text={"Spreads from"} />
          <StyledGrid3 name={"1:500"} text={"Leverage"} />
          <StyledGrid3 name={"50 US$"} text={"Minimum Deposit"} />
          <StyledGrid3 name={"12+"} text={"Account currencies"} />
        </Grid>
      </Container>

      <Container
        maxWidth="lg"
        className="my-10 text-default"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="font-bold mb-10 max-w-4xl text-center text-5xl">
          Why do traders choose ECN accounts?
        </p>

        <Grid container spacing={3}>
          <StyledGridImg3
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/floating-spreads.jpg?updatedAt=1735631474609"
            }
            name={"Floating Spreads"}
            text={
              "Due to the extensive number of participants in the ECN network, spread values are highly variable and react quickly to any events."
            }
          />
          <StyledGridImg3
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/transparency.jpg?updatedAt=1735631471645"
            }
            name={"Transparency"}
            text={
              'Any trade offer that enters the system immediately becomes accessible to all participants, ensuring transparency and efficiency. Additionally, the usual "order book" will be available to you, providing a comprehensive view of all open buy and sell orders in the market. This allows you to make informed trading decisions based on the most current market data.'
            }
          />
          <StyledGridImg3
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/openness.jpg?updatedAt=1735631478044"
            }
            name={"Openness"}
            text={
              "Your transaction instantly appears on the Forex market, allowing you to influence its condition directly and independently. This real-time visibility empowers you to make informed decisions and react swiftly to market changes."
            }
          />
          <StyledGridImg3
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/reliability.jpg?updatedAt=1735631480361"
            }
            name={"Reliability"}
            text={
              "You can rest assured that your funds will be completely safe with SuperForex, as we are a regulated and award-winning broker. Our commitment to security and excellence ensures that your investments are protected and managed with the highest standards."
            }
          />
        </Grid>
      </Container>

      <Container maxWidth="lg" className="my-10 text-default">
        <Grid container spacing={10} className="justify-center items-center">
          <Grid item size={{ sm: 12, md: 6 }}>
            <p className="font-bold text-5xl">
              Benefit from low commissions and fast order execution speeds
            </p>
            <br />
            <Typography>
              SuperForex, as a regulated ECN broker, offers new types of
              accounts for professional currency trading. With our ECN accounts,
              trading operations are displayed directly on the Forex exchange,
              bypassing intermediary banks. This allows market participants to
              interact without intermediaries and requotes. Your execution
              requests are processed instantly, providing a seamless trading
              experience.
            </Typography>
            <br />
            <p className="font-bold">
              ECN accounts offer increased transparency and low latency,
              ensuring that your trades are executed quickly and with minimal
              slippage. This means you can take advantage of market
              opportunities with greater efficiency and confidence.
            </p>
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
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/technology-1.png?updatedAt=1735637384713"
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
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/trading.jpg?updatedAt=1735631471661"
              }
              alt={"img"}
            />
          </Grid>
          <Grid item size={{ sm: 12, md: 6 }}>
            <p className="font-bold text-5xl">ECN Technology</p>
            <br />
            <Typography>
              ECN (Electronic Communications Network) technology is highly
              favored for Forex trading. When combined with Expert Advisors, ECN
              accounts offer one of the fastest ways to execute profitable
              orders. Opening an ECN account allows you to engage in the dynamic
              world of financial markets while maintaining your independence and
              control. This approach offers speed, transparency, and efficiency,
              making it an excellent choice for traders looking to maximize
              their potential in the market.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className="my-10 text-default">
        <Grid container spacing={10} className="justify-center items-center">
          <Grid item size={{ sm: 12, md: 6 }}>
            <p className="font-bold text-5xl">
              A super-convenient trading account for investors and traders
            </p>
            <br />
            <Typography>
              You have the flexibility to choose from a wide variety of ECN
              accounts, each offering unique conditions tailored to different
              strategies and goals. This allows you to find the perfect fit for
              your trading needs.
            </Typography>
            <br />
            <Typography>
              No matter which option you select, you can be confident that
              you're always getting the tightest spreads possible, ensuring
              optimal trading conditions and peace of mind. Explore the options
              and select the account that best aligns with your trading
              objectives.
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
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/trading-instruments.jpg?updatedAt=1735637207436"
              }
              alt={"img"}
            />
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth="lg"
        className="my-10 text-default"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="font-bold mb-10 max-w-4xl text-center text-5xl">
          ECN Accounts
        </p>
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
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/card-ecn-standard.webp?updatedAt=1735637273682"
              }
              alt={"img"}
            />
          </Grid>
        </Grid>
      </Container>

      {/* <Container maxWidth="lg" className="my-10 text-default">
        <Grid
          container
          spacing={10}
          className="justify-center items-center"
          style={{ display: "flex", flexDirection: "row-reverse" }}
        >
          <Grid item size={{ sm: 12, md: 6 }}>
            <Typography variant="h3" className="font-bold">
              Online Trading on MetaTrader 4
            </Typography>
            <br />
            <Typography variant="h6" className="font-bold">
              A User-Friendly Platform for Forex Trading
            </Typography>
            <br />
            <Typography>
              MetaTrader 4 is the platform on which SuperForex traders execute
              their orders. MT4 is a well-known Forex trading software that
              leading currency brokers utilize. It's user-friendly and has all
              of the features you'd expect in a forex trading platform. These
              include charting capabilities, technical analysis tools, and the
              ability to trade directly from the charts.
            </Typography>
            <br />
            <Button name={"Learn more"} background />
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
                "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmt4.94666909.png&w=750&q=75"
              }
              alt={"img"}
            />
          </Grid>
        </Grid>
      </Container> */}

      <Container
        maxWidth="lg"
        className="my-10 text-default"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="font-bold mb-10 max-w-4xl text-center text-5xl">
          Sign up today and enjoy all the benefits ECN trading has to offer!
        </p>

        <Stack onClick={handleOpen}>
          <Button name={"Open Account"} background />
        </Stack>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AccountForm
            data={[
              "ECN Standard",
              "ECN Standard Mini",
              "ECN Swap-Free",
              "ECN Swap-Free Mini",
              "ECN Crypto",
              "Sticpay STP",
            ]}
          />
        </Box>
      </Modal>
    </>
  );
}
