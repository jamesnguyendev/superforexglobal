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
        <p className="font-bold">{ques}</p>

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

const StyledGrid3 = ({ name, text }) => {
  return (
    <Grid
      item
      size={{ xs: 12, sm: 6, md: 3 }}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Stack
        className="text-center flex flex-col items-center text-default"
        style={{
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <p className="font-bold pb-3 text-4xl">{name}</p>

        <p>{text}</p>
      </Stack>
    </Grid>
  );
};

const StyledGridImg3 = ({ name, text, img }) => {
  return (
    <Grid
      item
      size={{ xs: 12, sm: 6, md: 3 }}
      className="rounded-lg border-solid border-2 border-sky-light_grey hover:shadow-2xl"
    >
      <div
        className="text-default"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <img src={img} alt={img} className="my-5" />
        <p className="font-bold mb-5 mx-3 text-xl flex-grow">{name}</p>
        <p className="mb-5 mx-5 flex-grow">{text}</p>
      </div>
    </Grid>
  );
};

// const StyledTable = () => {
//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       color: "#35465B",
//       width: "calc(100% / 7)",
//       border: 0,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       color: "#35465B",
//       border: 0,
//     },
//   }));

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(even)": {
//       backgroundColor: "#f6f9fc",
//       border: 0,
//     },
//     // hide last border
//     "&:last-child td, &:last-child th ": {
//       border: 0,
//     },
//   }));

//   function createData(
//     name,
//     Standard,
//     SwapFree,
//     NoSpread,
//     MicroCent,
//     ProfiSTP,
//     Crypto
//   ) {
//     return { name, Standard, SwapFree, NoSpread, MicroCent, ProfiSTP, Crypto };
//   }

//   const rows = [
//     createData(
//       "Account currency",
//       "USD, EUR, GBP, CNY, AED, MYR, IDR, RUB, ZAR, NGN, INR, THB, BRL, BDT, EGP, CHF, MXN, JPY, PHP, HKD, SGD, PEN, TZS, KES, GHS, UGX, ZMW, RWF, VND, XAF, PLN, AUD, CAD, JOD",
//       "USD, EUR, GBP, CNY, AED, MYR, IDR, RUB, ZAR, NGN, INR, PKR, BDT, EGP, CHF, JPY, TRY, PHP, HKD, SGD, ILS, TZS, KES, GHS, UGX, ZMW, RWF",
//       "USD, EUR",
//       "USD, EUR, ZAR",
//       "USD, EUR, GBP",
//       "USD"
//     ),
//     createData(
//       "Minimum deposit",
//       "5 USD",
//       "5 USD",
//       "50 USD",
//       "1 USD",
//       "500 USD",
//       "50 USD"
//     ),
//     createData(
//       "Maximum deposit",
//       "Unlimited",
//       "Unlimited",
//       "Unlimited",
//       "Unlimited",
//       "Unlimited",
//       "Unlimited"
//     ),
//     createData(
//       "Recommended deposit",
//       "50 USD",
//       "50 USD",
//       "500 USD",
//       "10 USD",
//       "1000 USD",
//       "1000 USD"
//     ),
//     createData(
//       "Compatible with bonuses",
//       "Welcome, Energy, Hot, No deposit",
//       "Welcome, Energy, Hot, No deposit",
//       "Welcome, Energy, Hot",
//       "Welcome, Energy, Hot",
//       "Welcome, Energy, Hot",
//       "Welcome, Energy, Hot"
//     ),
//     createData(
//       "Lot size",
//       "10,000 USD",
//       "10,000 USD",
//       "100,000 USD",
//       "10,000 cents",
//       "100,000 USD",
//       "10 BTC / LTC / ZEC / DASH / NEO / EOS / BCH / XMR"
//     ),
//     createData(
//       "Maximum leverage",
//       "1:1000",
//       "1:1000",
//       "1:1000",
//       "1:1000",
//       "1:3000",
//       "1:10"
//     ),
//     createData("Swaps", "Yes", "No", "No", "Yes", "No", "No"),
//     createData(
//       "Spreads",
//       "Fixed",
//       "Fixed",
//       "0",
//       "Fixed",
//       "from 0.01 pips",
//       "Fixed"
//     ),
//     createData(
//       "Compatible with Forex Copy",
//       "Yes",
//       "Yes",
//       "No",
//       "No",
//       "No",
//       "No"
//     ),
//   ];

//   return (
//     <TableContainer>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell></StyledTableCell>
//             <StyledTableCell align="center">
//               <p className="font-bold mb-3">Standard</p>
//               <Link
//                 href="/standard-account"
//                 className="flex justify-center items-center"
//               >
//                 <Button name={"More info"} />
//               </Link>
//             </StyledTableCell>
//             <StyledTableCell align="center">
//               <p className="font-bold mb-3">Swap-Free</p>
//               <Link
//                 href="/swap-free-islamic-account"
//                 className="flex justify-center items-center"
//               >
//                 <Button name={"More info"} />
//               </Link>
//             </StyledTableCell>
//             <StyledTableCell align="center">
//               <p className="font-bold mb-3">No Spread</p>
//               <Link
//                 href="/no-spread-account"
//                 className="flex justify-center items-center"
//               >
//                 <Button name={"More info"} />
//               </Link>
//             </StyledTableCell>
//             <StyledTableCell align="center">
//               <p className="font-bold mb-3">Micro Cent</p>
//               <Link
//                 href="/micro-cent-account"
//                 className="flex justify-center items-center"
//               >
//                 <Button name={"More info"} />
//               </Link>
//             </StyledTableCell>
//             <StyledTableCell align="center">
//               <p className="font-bold mb-3">Profi STP</p>
//               <Link
//                 href="/profi-stp-account"
//                 className="flex justify-center items-center"
//               >
//                 <Button name={"More info"} />
//               </Link>
//             </StyledTableCell>
//             <StyledTableCell align="center">
//               <p className="font-bold mb-3">Crypto</p>
//               <Link
//                 href="/crypto-account"
//                 className="flex justify-center items-center"
//               >
//                 <Button name={"More info"} />
//               </Link>
//             </StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row" className="font-bold">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="center">{row.Standard}</StyledTableCell>
//               <StyledTableCell align="center">{row.SwapFree}</StyledTableCell>
//               <StyledTableCell align="center">{row.NoSpread}</StyledTableCell>
//               <StyledTableCell align="center">{row.MicroCent}</StyledTableCell>
//               <StyledTableCell align="center">{row.ProfiSTP}</StyledTableCell>
//               <StyledTableCell align="center">{row.Crypto}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

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
      "USD, EUR, GBP, CNY, AED, MYR, IDR, RUB, ZAR, NGN, INR, THB, BRL, BDT, EGP, CHF, MXN, JPY, PHP, HKD, SGD, PEN, TZS, KES, GHS, UGX, ZMW, RWF, VND, XAF, PLN, AUD, CAD, JOD"
    ),
    createData("Minimum deposit", "50 USD"),
    createData("Maximum deposit", "Unlimited"),
    createData("Recommended deposit", "50 USD"),
    createData(
      "Compatible with bonuses",
      "Trade And Earn, 10% Bonus, Free Swap"
    ),
    createData("Lot size", "0.01 lot"),
    createData("Maximum leverage", "1:500"),
    createData("Swaps", "Yes"),
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

export default function STPAccounts() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Banner
        imgDesktop={"/Image/stp-card-desktop-ltr.webp"}
        imgMobile={"/Image/stp-card-mobile.webp"}
        buttonName={"Open Account"}
        titleBanner={
          "Choose the account that's right for you and get started today"
        }
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
        <p className="font-bold mb-10 max-w-4xl text-center text-4xl">
          Why do traders choose SuperForex trading accounts?
        </p>

        <Grid container spacing={3}>
          <StyledGridImg3
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/local-currencies.jpg?updatedAt=1735631477889"
            }
            name={"Local Currencies"}
            text={
              "SuperForex provides trading accounts in local currencies, helping you avoid unnecessary conversion fees. This allows you to concentrate on what truly matters—maximizing your profits."
            }
          />
          <StyledGridImg3
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/customer-support.jpg?updatedAt=1735631471435"
            }
            name={"Human Customer Service"}
            text={
              "Real people here, not robots! Our dedicated live support team is on hand 24/5 to assist you with any issues."
            }
          />
          <StyledGridImg3
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/openness.jpg?updatedAt=1735631478044"
            }
            name={"Openness"}
            text={
              "Once you make a transaction, it appears immediately on the Forex market. This means you have the power to influence its state directly."
            }
          />
          <StyledGridImg3
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/reliability.jpg?updatedAt=1735631480361"
            }
            name={"Reliability"}
            text={
              "Rest assured, your funds will be fully secured with SuperForex, a regulated and award-winning broker."
            }
          />
        </Grid>
      </Container>

      <Container maxWidth="lg" className="my-10 text-default">
        <Grid container spacing={10} className="justify-center items-center">
          <Grid item size={{ sm: 12, md: 6 }}>
            <p className="font-bold text-5xl">
              Tailor your account to get the most out of your trading
            </p>
            <br />
            <Typography>
              When choosing a SuperForex trading account, it's important to
              consider your investment goals and experience level. Here are some
              options: Micro Account: Ideal for beginner traders, with a
              starting balance of just $50. Standard Account: Suitable for
              experienced traders looking to trade larger volumes, featuring a
              larger lot size and support for the Forex Copy system. Profi-STP
              Account: Designed for those wanting to trade even larger volumes,
              offering a maximum leverage of 1:500.
            </Typography>
            <br />
            <Typography>
              Each account type provides different benefits, so it's essential
              to select the one that best fits your needs. For more detailed
              information on our account types, please check the account
              comparison table.
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
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/trading-instruments.jpg?updatedAt=1735631471579"
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
          Standard Accounts
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
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/card-standard.png?updatedAt=1735636862296"
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
            <p className="font-bold text-5xl">
              Online Trading on MetaTrader 4
            </p>
            <br />
            <p className="font-bold text-xl">
              A User-Friendly Platform for Forex Trading
            </p>
            <br />
            <p>
              MetaTrader 4 is the platform on which SuperForex traders execute
              their orders. MT4 is a well-known Forex trading software that
              leading currency brokers utilize. It's user-friendly and has all
              of the features you'd expect in a forex trading platform. These
              include charting capabilities, technical analysis tools, and the
              ability to trade directly from the charts.
            </p>
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

      <Container maxWidth="lg" className="my-10 text-default">
        <Grid container spacing={10} className="justify-center items-center">
          <Grid item size={{ sm: 12, md: 6 }}>
            <p className="font-bold text-5xl">
              Why choose SuperForex for your online currency trading needs?
            </p>
            <br />
            <Typography>
              Selecting the right broker is crucial for success in online
              trading. Since 2013, SuperForex has been providing global online
              currency trading services to clients worldwide. We offer a variety
              of account types, catering to both beginners and professionals,
              and our experienced team is always available to provide support
              and advice.
            </Typography>
            <br />
            <Typography>
              We take pride in our excellent customer service and offer a wide
              range of features and benefits that make us a top choice for
              currency traders. SuperForex is regulated by the International
              Financial Services Commission, ensuring a secure and safe trading
              environment. Our advanced technology helps to ensure that your
              trades are executed quickly and efficiently, and we offer
              competitive spreads and leverage. With SuperForex, you can be
              confident that you are receiving the best possible service and
              value for your money.
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
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/security-and-safety.jpg?updatedAt=1735636934927"
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
          Sign up today and enjoy all the benefits SuperForex has to offer!
        </p>

        <Stack onClick={handleOpen}>
          <Button name={"Open Account"} background />
        </Stack>
      </Container>

      <Container maxWidth="lg" className="my-10 text-default">
        <Typography variant="h3" className="font-bold mb-10 text-center">
          Frequently Asked Questions
        </Typography>
        <CardItem
          ques={"What is an online trading account?"}
          ans={
            "An online trading account is a type of brokerage account that allows you to buy and sell securities online. With an online trading account, you can place buy and sell orders for stocks, bonds, mutual funds, and other types of securities. One benefit of online trading is that it can be done from anywhere with an internet connection. This makes it convenient for investors who are constantly on the go or who live in remote areas."
          }
        />
        <CardItem
          ques={"How to open a Forex trading account?"}
          ans={
            "To open a forex trading account, you'll need to choose an account that suits your trading strategy and fill in the registration form. Account verification process will require some personal information, like your name and address. You'll also need to provide documentation that proves your identity and residency. This is an element of KYC regulations."
          }
        />
        <CardItem
          ques={"What markets can I access after opening a trading account?"}
          ans={
            "SuperForex offers its traders the opportunity to trade in over 300 financial instruments, including Forex, stocks, metals, commodities, and indices. With SuperForex you can trade on over 60 currency pairs as well as precious metals, energies and other options."
          }
        />
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
              "Standard",
              "Swap-Free",
              "No Spread",
              "Micro Cent",
              "Profi Stp",
              "Crypto",
            ]}
          />
        </Box>
      </Modal>
    </>
  );
}
