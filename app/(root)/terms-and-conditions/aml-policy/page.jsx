import React from "react";
import SideBarPolicy from "../../../components/SideBarPolicy";
import { Container } from "@mui/system";

const Page = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-28 text-default max-lg:px-7">
        <div className="max-lg:order-2 lg:border-r lg:border-dashed pe-5 max-lg:pt-8">
          <SideBarPolicy />
        </div>
        <div className="lg:col-span-2 lg:ps-7">
          <h1 className="text-4xl font-bold">AML policy</h1>
          <p className="mt-10">
            The Anti-Money Laundering Policy of Superforex is a crucial part of
            the company’s code of ethics. Its purpose is to ensure that
            customers who choose to engage in illegal activities are held up to
            a moral standard, while the rest of our clients who do not engage in
            illegitimate actions feel safe using our products. Money laundering
            is defined as “the process of creating the appearance that large
            amounts of money obtained from serious crimes, such as drug
            trafficking or terrorist activity, originated from a legitimate
            source.”
          </p>
          <p className="mt-5">
            By presenting illegally obtained funds as legitimate, one commits a
            crime as they intentionally obscure the illegitimate source of that
            money. Both domestic and international laws condemn money laundering
            and make it illegal for companies that provide financial services,
            such as Superforex, as well as its customers, employees or agents to
            knowingly engage or attempt to engage in this type of criminal
            transactions.
          </p>

          <h1 className="text-2xl font-bold mt-10">Procedures</h1>
          <p className="mt-5">
            Superforex has implemented a highly sophisticated system for the
            detection of any signals that might suggest a customer is engaging
            in such illegal activities.This system keeps a record of and
            verifies all client identification materials, and tracks and
            maintains detailed records of all transactions.
          </p>
          <p className="mt-5">
            Superforex dedicates its keen attention to tracking suspicious and
            significant transaction activities, and reports such activities
            along with comprehensive information to the relevant law enforcement
            bodies. To maintain the integrity of reporting systems and to
            safeguard businesses, the legislative framework provides legal
            protection to the providers of such information.
          </p>
          <p className="mt-5">
            A key step to preventing and discouraging money laundering using our
            platforms is the fact that Superforex does not accept cash deposits.
            Superforex has the right to refuse to process a transfer at any
            stage where it believes the transfer to be connected in any way to
            money laundering or criminal activity. Superforex cannot inform
            customers that they have been reported for suspicious activity.
          </p>

          <h1 className="text-2xl font-bold mt-10">Requirements</h1>
          <p className="mt-5">
            In order to comply with anti-money laundering laws, Superforex
            requires a number of different documents to verify the identity of
            each customer.
          </p>
          <p className="mt-5">
            The first document required is a legal government-issued document of
            identification that contains a picture of the customer. This may be
            a government-issued passport, a local ID card, or a driver's license
            (for countries where the driver's license is accepted as a primary
            identification document). Company, student or other cards are not
            acceptable forms of identification.
          </p>
          <p className="mt-5">
            The second step is to verify your address. This may be done through
            your document of identification if it includes it. Other acceptable
            records are bills paid in the past three months that include your
            name and address, bank statements or any other document with the
            customer’s name and address issued from an internationally
            recognized organization.
          </p>
          <p className="mt-5">
            Any documents in non-Latin letters must be translated into English
            by an official interpreter; the translation must be stamped and
            signed by the translator and a notary, and sent together with the
            original document with a clear picture of the customer on it.
          </p>
          <p className="mt-5">
            Superforex requires that all deposits where the name of the
            originating customer is present be made from the same name of the
            customer in our records. Third-party payments are not accepted.
          </p>
          <p className="mt-5">
            Withdrawing money may be done from the same account and by the same
            way it was received. For withdrawals where the name of the recipient
            is present, the name must be an exact match for the name of the
            customer in our records. For example, if the deposit was made by a
            wire transfer, funds may be withdrawn only by a wire transfer to the
            same bank and to the same account from which it originated. If the
            deposit was made via an electronic currency transfer, funds may be
            withdrawn only via an electronic currency transfer through the same
            system and to the same account it originated from.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Page;
