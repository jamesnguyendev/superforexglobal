import React from "react";
import SideBarPolicy from "../../../components/SideBarPolicy";
import { Container } from "@mui/system";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Link from "next/link";

const Page = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-16 text-default max-lg:px-7">
        <div className="max-lg:order-2 lg:border-r lg:border-dashed pe-5 max-lg:pt-8">
          <SideBarPolicy />
        </div>
        <div className="lg:col-span-2 lg:ps-7">
          <h1 className="text-4xl font-bold">KYC policy</h1>

          <h1 className="text-2xl font-bold mt-10">
            KYC (KNOW YOUR CUSTOMER) POLICY
          </h1>
          <p className="mt-5">
            Know your customer policies have become increasingly important on a
            worldwide basis,especially among banks and other financial
            institutions, in order to prevent identity theft, money laundering,
            financial fraud and terrorist activity.
          </p>
          <p className="mt-5">
            Superfin Corp. holds a zero tolerance fraud policy, and is taking
            all measures possible to prevent it. Any fraudulent activity will be
            documented and all accounts related to it will be immediately
            closed. All funds in these accounts will be forfeited.
          </p>

          <h1 className="text-2xl font-bold mt-10">Prevention</h1>
          <p className="mt-5">
            Superfin Corp. aims to ensure the integrity of any sensitive data it
            obtains, such as your account information and the transactions you
            make, using a variety of security measures and fraud controls.
            Securing your electronic transactions requires us to be provided
            with certain data from you, including your preferred deposit method.
          </p>
          <p className="mt-5">
            When you deposit funds we will require the following documents:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              {/* <li>
                E-mail:
                <span className="ms-2 underline text-primary font-bold hover:text-default">
                  support@superforex.com
                </span>
              </li> */}
              <li>a copy of your valid passport with the signature page;</li>
              <li>
                copies of your credit cards, used to make the deposit, one or
                more (if available) of the following options to confirm
                possession of the card by the owner:
              </li>
              <ul className="list-disc ms-8">
                <li>
                  recent copy of a bank statement containing cardholder's full
                  name, first 6 and last 4 digits of card number (sensitive data
                  must be covered), and the payment in question. If screeenshots
                  are provided the page URL muast be visible.
                </li>
                <li>
                  authorization code for the payment in question (AUTH code) –
                  it is usually contained in the transaction data when the
                  client accesses their bank account.
                </li>
                <li>
                  clear color copies of both sides of the card. The middle of
                  the card number should be covered on both sides, leaving the
                  first 6 and last 4 digits visible; on the back side, CVC/CVV
                  code should be covered.
                </li>
              </ul>
              <li>a copy of a recent utility bill in your name and address.</li>
            </ul>
          </p>
          <p className="mt-5">
            If you have any questions please don’t hesitate to contact our
            customer support:
            <span className="ms-2 underline text-primary font-bold hover:text-default">
              support@superforex.com
            </span>
          </p>

          <h1 className="text-2xl font-bold mt-10">
            When do I need to provide these documents?
          </h1>
          <p className="mt-5">
            We highly appreciate you taking the time to provide us with all the
            necessary documents as soon as you can, in order to avoid any delays
            in processing your transactions. We require the receipt of all the
            necessary documents prior to making any cash transactions from your
            account. Documents be checked within 48 working hours after
            submission.
          </p>
          <p className="mt-5">
            Some circumstances may require us to request these documents before
            allowing any other activities in your account, such as deposits or
            trades.
          </p>
          <p className="mt-5">
            Please note that if we do not receive the required documents on
            file, your pending withdrawals will be canceled and credited back to
            your trading account. We will notify you of such an event via our
            system. To avoid pending transaction cancellation we recommend to
            provide documents within 24 hours after request.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            How can I send you these documents?
          </h1>
          <p className="mt-5">
            Please scan your documents, or take a high quality digital camera
            picture, save the images as jpeg,bmp,png,doc and docx, then send it
            to us via mail to
            <span className="ms-2 underline text-primary font-bold hover:text-default">
              support@superforex.com
            </span>
          </p>

          <h1 className="text-2xl font-bold mt-10">
            How do I know my documents are safe with you?
          </h1>
          <p className="mt-5">
            Superfin Corp. holds the security of documentation at the highest
            priority, and treats all documents it receives with utmost respect
            and confidentiality. All files we obtain are fully protected using
            the highest possible level of encryption at every step of the review
            process.
          </p>
          <p className="mt-5">
            We thank you for your cooperation in helping us make Superfin Corp.
            a safer place to trade.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Page;
