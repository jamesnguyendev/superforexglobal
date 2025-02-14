"use client";
import React, { useState } from "react";
import { Container, Stack, Typography, Card, Divider } from "@mui/material";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import CardItem from "./cardItem";

import { useTranslations } from "next-intl";

const Client = () => {
  return (
    <>
      <CardItem
        ques={
          "What is account verification? Can I trade on an unverified account?"
        }
        ans={
          "Verification is the identification of a client. It protects your trading account in case hostile parties attempt to steal your password or other confidential data. It is possible to trade on an unverified account. However, some SuperForex special offers, such as the Bonus Program, are available only to fully verified accounts. The account verification procedure does not affect operations with your funds. You are welcome to verify your account at any time."
        }
      />
      <CardItem
        ques={"Where can I verify my account?"}
        ans={
          "You can verify your account from the Client’s Cabinet, under Client Summary, in the section Personal Details."
        }
      />
      <CardItem
        ques={"How long does it take to verify an account?"}
        ans={"Account verification can take up to 48 working hours."}
      />
      <CardItem
        ques={"Are deposits and withdrawals available to unverified accounts?"}
        ans={
          "Yes, you can deposit and withdraw funds from your unverified accounts without any obstacles."
        }
      />
      <CardItem
        ques={"What documents are required for account verification?"}
        ans={
          "Upload and submit a soft copy of your passport (ID) or driver’s license and address registration documents. We only accept uncropped, centered, clear-color scans/photos at a very good resolution. Please do not submit documents by fax or cropped, blurred, black and white or grayscale documents."
        }
      />
      <CardItem
        ques={"What file formats for the verification documents are accepted?"}
        ans={"The allowed files types are: jpeg, bmp, png, doc and docx."}
      />
      <CardItem
        ques={
          "I received a letter informing me that my document was not accepted for verification. What should I do?"
        }
        ans={
          "Your document might not be accepted for verification in the following cases: the scanned document copy is of low quality you sent a document that is unsuitable for verification (it does not contain your photo or your full name) the document you sent was already used for the first level of verification"
        }
      />
      <CardItem
        ques={
          "An error occurred when I was trying to upload the document. What should I do?"
        }
        ans={
          "If you get an error message and your document fails to be uploaded, please send detailed information about the error to info@superforex.global, specify your account number, and attach screenshots of the error page. You can also try to verify your account using another Internet browser."
        }
      />
      <CardItem
        ques={"What are the advantages of account verification?"}
        ans={
          "If you passed all verifications steps, you can use additional services offered by SuperForex that are not available to unverified accounts."
        }
      />
      <CardItem
        ques={
          "I have already verified my account. Will this verification be valid for a new trading account?"
        }
        ans={
          "If a new trading account is opened using the main website according to the standard registration procedure, documents for verification should be submitted again. In case you open a new trading account via the Cabinet of the verified account in the Open Account section, the verification will be done automatically."
        }
      />
      <CardItem
        ques={"What is the minimum deposit amount?"}
        ans={"The minimum deposit is 1 US dollar."}
      />
      <CardItem
        ques={"What is the Superforex server for the MT4 platform?"}
        ans={
          "The server for MetaTrader 4 is SuperForex-Real Europe, 46.4.13.133:443"
        }
      />
      <CardItem
        ques={"What does leverage mean?"}
        ans={
          "Leverage is the ratio of the margin amount to the borrowed amount: 1:100, 1:200, 1:1000. A 1:100 leverage means that, to open a trade, you should have 100 times less than the amount of the trade. In SuperForex you may choose a leverage from 1:1 to 1:1000."
        }
      />
      <CardItem
        ques={"May I use expert advisors? Are there any restrictions?"}
        ans={"There are no restrictions on the use of advisors."}
      />
      <CardItem
        ques={"How can I change my leverage?"}
        ans={
          "Send an email to info@superforex.global with the following information: trading account number, phone password, and the desired leverage. You can also contact the Customer Support Service via chat and provide the same data."
        }
      />
      <CardItem
        ques={
          "I forgot my trader password (or I want to change it). What should I do?"
        }
        ans={
          "You can change your password from the Client’s Cabinet. If you forgot your password, you can recover it by email. You can also change the trader password by contacting the Customer Support Service and providing them with the following information: account number, phone password and a new trader password (Latin letters, from 6 to 12 symbols)."
        }
      />
      <CardItem
        ques={
          "I forgot my withdrawal password (or I want to change it). What should I do?"
        }
        ans={
          "If you forget or want to change your withdrawal password, contact us via email at info@superforex.global or via Live Chat, providing the following information: account number and phone password."
        }
      />
      <CardItem
        ques={"What types of bonuses do you have?"}
        ans={"You can preview all of our bonuses at this page"}
      />
      <CardItem
        ques={"I want to get the No Deposit Bonus, what should I do?"}
        ans={
          "To obtain the No Deposit Bonus you need to register a live trading account with us and verify it fully. After the verification is complete, you need to read the terms and conditions of the bonus and if you satisfy the requirements, submit the “Get the No Deposit Bonus” button from the Client’s Cabinet"
        }
      />
      <CardItem
        ques={
          "What is the correct account leverage in order to be able to receive the No Deposit Bonus?"
        }
        ans={
          "To get the No Deposit Bonus your leverage must be 1:200 or lower."
        }
      />
      <CardItem
        ques={"What are the terms and conditions for the No Deposit Bonus?"}
        ans={
          "Your account should be fully verified and non-affiliated. The maximum leverage should be 1:200 or lower. Your account should be fully verified and non-affiliated. The maximum leverage should be 1:200 or less. The profit derived from the No Deposit Bonus can be withdrawn. The minimum amount for withdrawal is $5, the maximum is $25. To unlock the withdrawable amount, you must have traded a certain volume, where $1 = 1 lot e.g. to withdraw $6 you must have traded at least 6 lots. In order to withdraw profit from No Deposit Bonus the client have to deposit amount that is equal or more and than requested amount for withdrawal. If Client withdraw profit from No Deposit Bonus with his deposit contemporaneously, then No Deposit Bonus and profit from it will be cancelled in full. The No Deposit Bonus and profit are cancelled upon withdrawal of the funds from the account."
        }
      />
      <CardItem
        ques={"How can I withdraw the profit over the No Deposit Bonus?"}
        ans={
          "You can withdraw your profit using payment systems such as Visa and MasterCard, or use other electronic payment systems such as WebMoney, Qiwi, Skrill, Neteller, etc. You can check the full list here"
        }
      />
      <CardItem
        ques={
          "Do I need to make a deposit before I withdraw the profit from the No Deposit Bonus?"
        }
        ans={
          "Yes, you need to make a deposit. In order to withdraw profit from No Deposit Bonus the client has to deposit amount that is equal or more and than requested amount for withdrawal."
        }
      />
    </>
  );
};

const Partner = () => {
  return (
    <>
      <CardItem
        ques={"What commission will I receive if I become your partner?"}
        ans={
          "You can earn up to 75% from the spread. You can find more detailed information on the conditions we offer to our partners here"
        }
      />
      <CardItem
        ques={"How can I get an affiliate link?"}
        ans={
          "Your affiliate link is created in your Partner`s Cabinet after registration. It consists of the company’s web address, followed by a question mark and the affiliate code assigned to you at the time of registration."
        }
      />
      <CardItem
        ques={"How can I refer customers?"}
        ans={
          "After you open an affiliate account (which is also available for trading), you can refer customers by sending them your affiliate link. When they click the affiliate link and open a trading account, they are recorded as your referrals. You can also spread the information among your friends. Another way is to give them your affiliate code, which your friend should enter when registering a trading account. You can also use a wide range of promo materials including banners, tracking links, ready-made websites, certificates and seals developed by the SuperForex design team to attract new clients. You can learn more about the affiliate programs of the company in a special section on our website."
        }
      />
      <CardItem
        ques={
          "Is there any restriction on the withdrawal of the affiliate commission?"
        }
        ans={"No, there is no restriction."}
      />
      <CardItem
        ques={
          "What are the requirements for registering for the SuperForex affiliate program?"
        }
        ans={
          "There are no specific requirements. You can refer customers by spreading information among your friends, as well as working as a SuperForex representative in your region. Check here for more detailed information on what type of partnership is right for you."
        }
      />
      <CardItem
        ques={
          "What is auto-referral? Can I receive a reward for my own transactions?"
        }
        ans={
          "Auto-referral is a system in which a client acts as his own agent without signing up any other clients. The Partner shall not be entitled to receive affiliate commissions from his own accounts and those owned by his close relatives if the Partner is an individual; commissions can also not be received from the private accounts of founders or accounts of their close relatives if the Partner is a legal entity."
        }
      />
      <CardItem
        ques={
          "What commission will I receive if I become a Sub-Introducing Broker?"
        }
        ans={
          "As a Sub-Introducing Broker you can attract not only users who intend to be traders, but other partners (brokers) as well. You will receive an additional bonus of about 0.1 pips as commission from every trade of the sub-partner’s new customers."
        }
      />
      <CardItem
        ques={"How can I withdraw the profit from my Partner account?"}
        ans={
          "You can withdraw partner profit using any of the methods listed in your Partner`s Cabinet. You can choose among a great variety of payment methods - bank wires, credit and debit cards, Skrill, Neteller, PayCo, Bitcoin, AstroPay, and SorexPay, among others."
        }
      />
      <CardItem
        ques={"What opportunities does the Local Transfer give me?"}
        ans={
          "The Local Transfer allows you to help your clients deposit and withdraw funds - if they require assistance. Local Transfers can be made both ways and there are no charges or hidden fees incurred for making a transfer."
        }
      />
      <CardItem
        ques={"When can I receive my bonus?"}
        ans={
          "Once the successful trade of your user is finished the bonus will be charged immediately and will be represented in your Partner Cabinet."
        }
      />
      <CardItem
        ques={"How do I get a banner?"}
        ans={
          "You can download any of the banners here. Just be sure to fill in the special form at the bottom of the page for your affiliate link generation."
        }
      />
    </>
  );
};

export default function FAQ() {
  const t = useTranslations("FAQ");
  const [tab, setTab] = useState("client");

  return (
    <Container maxWidth="lg">
      <Stack className="py-12 text-default items-center">
        <Typography variant="h3" className="px-2 font-bold">
          {t()}
        </Typography>
      </Stack>

      <Stack className="py-10 text-default">
        <Stack direction="row" className="justify-center mb-5">
          <Typography
            className={`font-bold px-4 py-1 rounded-full cursor-pointer ${
              tab == "client" && "bg-default text-white"
            }`}
            onClick={() => setTab("client")}
          >
            Client
          </Typography>
          <Typography
            className={`font-bold px-4 py-1 rounded-full cursor-pointer ${
              tab == "partner" && "bg-default text-white"
            }`}
            onClick={() => setTab("partner")}
          >
            Partner
          </Typography>
        </Stack>

        {tab == "client" && <Client />}
        {tab == "partner" && <Partner />}
      </Stack>
    </Container>
  );
}
