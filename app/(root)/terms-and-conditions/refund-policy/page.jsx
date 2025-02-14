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
          <h1 className="text-4xl font-bold">Refund Policy</h1>
          <p className="mt-10">
            SuperForex has implemented a highly sophisticated system for the
            detection of any signals that might suggest a customer is engaging
            in such illegal activities. This system keeps a record of and
            verifies all client identification materials, and tracks and
            maintains detailed records of all transactions.
          </p>

          <p className="mt-5">
            When customer request fund transaction we check the following
            documents:
          </p>
          <ul className="list-disc ms-8">
            <li>a copy of your valid passport with the signature page;</li>
            <li>
              copies of your credit cards, used to make the deposit, One or more
              (if available) of the following options to confirm possession of
              the card by the owner:
            </li>
            <ul className="list-disc ms-8">
              <li>
                recent copy of a bank statement containing cardholder's full
                name, first 6 and last 4 digits of card number (sensitive data
                must be covered), and the payment in question. If screenshots
                are provided the page URL must be visible.
              </li>
              <li>
                authorization code for the payment in question (AUTH code) – it
                is usually contained in the transaction data when the client
                accesses their bank account.
              </li>
              <li>
                clear color copies of both sides of the card. The middle of the
                card number should be covered on both sides, leaving the first 6
                and last 4 digits visible; on the back side, CVC/CVV code should
                be covered.
              </li>
              <li>a copy of a recent utility bill in your name and address.</li>
            </ul>
          </ul>
          <p className="mt-5">
            SuperForex dedicates its keen attention to tracking suspicious and
            significant transaction activities, and reports such activities
            along with comprehensive information to the relevant law enforcement
            bodies. To maintain the integrity of reporting systems and to
            safeguard businesses, the legislative framework provides legal
            protection to the providers of such information.
          </p>
          <p className="mt-5">
            A key step to preventing and discouraging money laundering using our
            platforms is the fact that SuperForex does not accept cash deposits.
            SuperForex has the right to refuse to process a transfer at any
            stage where it believes the transfer to be connected in any way to
            money laundering or criminal activity. SuperForex cannot inform
            customers that they have been reported for suspicious activity.
          </p>
          <p className="mt-5">
            Refunds can be applied within 24 hours after transaction made.
          </p>
          <p className="mt-5">
            Regarding refund issues, the customer can contact our support team:
          </p>
          <p className="mt-5 underline text-primary font-bold hover:text-default">
            info@superforex.global
          </p>
          <p className="mt-5">Refund timeframes 1-4 working hours.</p>
        </div>
      </div>
    </Container>
  );
};

export default Page;
