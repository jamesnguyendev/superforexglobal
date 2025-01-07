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
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-10">
            At SuperForex we strive to deliver quality products and services to
            our users. We value their business and recognize that privacy is an
            important issue. The information contained in this Privacy Policy
            explains the practices of SuperForex, and its subsidiaries and
            affiliates (collectively, "SuperForex," "we," or "us") regarding the
            personal or non-personal information that we collect from you or
            about you through this Site.
          </p>
          <p className="mt-5">
            “The Site” shall refer collectively to superforex.com website and
            its available language versions and domain names.
          </p>
          <p className="mt-5">
            “User” shall refer to any person or entity visiting, using or
            otherwise accessing the Site. Although we aim to ensure the safety
            and confidentiality of all information received by our clients,
            please note that this Privacy Policy does not apply to processing of
            personal information by third parties such as payment service
            providers.
          </p>
          <p className="mt-5">
            If you have any questions about our Privacy Policy, please contact
            us at
            <span className="ms-2 underline text-primary font-bold hover:text-default">
              support@superforex.com
            </span>
          </p>

          <h1 className="text-2xl font-bold mt-10">Non-Personal Data</h1>
          <p className="mt-5">
            SuperForex collects non-personal information about Users when they
            visit The Site unless Users choose to provide that information to us
            by registering an account.
          </p>
          <p className="mt-5">
            SuperForex may record and analyse all User activities on the Site
            for the purposes of security, system monitoring, management, and
            marketing in compliance with legal and regulatory obligations
            incumbent on SuperForex. We undertake to store such information
            using adequate security measures and for a limited period of time.
          </p>

          <h1 className="text-2xl font-bold mt-10">Log Files</h1>
          <p className="mt-5">
            Log files allow us to record visitors' use of the Site. We put
            together log file information from all our visitors and use it to
            improve our understanding of Users’ patterns of behaviour and needs,
            and to make improvements to the Site, based on the way users move
            around it. Log files do not contain any personal information about
            the User. We automatically collect non-personal information such as:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>
                the type and version of the operating system of User’s computer;
              </li>
              <li>the date and time of User’s access to the Site;</li>
              <li>
                the type and version of the browser used to access the Site;
              </li>
              <li>the IP address from which User accesses the Site;</li>
              <li>the pages the user has visited;</li>
              <li>
                if User linked to the Site from another website, the address of
                that other website; etc.
              </li>
            </ul>
          </p>
          <p className="mt-5">
            Regularly reviewing this page ensures that Users are always aware of
            what information we collect and how we use it.
          </p>
          <p className="mt-5">
            As the activation of certain links on the Site may cause Users to
            leave the Site, we encourage Users to read the privacy statements on
            the linked websites as we have no control over the information that
            is submitted to, or collected by, or used by these linked websites.
          </p>

          <h1 className="text-2xl font-bold mt-10">Cookies</h1>
          <p className="mt-5">
            Cookies are small text files sent by a web server and stored on a
            visitor's browser which are read by the server when Users re-visit a
            website. Cookies are used to store information such as passwords
            (encrypted), user-names, interests, shopping preferences, etc.,
            allowing Users to re-visit a website without having to enter the
            same information again. Cookies are not used to determine the
            personal identity of visitors to the Site.
          </p>

          <h1 className="text-2xl font-bold mt-10">Personal Data</h1>
          <p className="mt-5">
            To open a demo or a trading account with SuperForex, Users need to
            provide certain information (hereinafter referred to as “Personal
            Data”) about themselves. The Personal Data that we collect may
            include:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>
                information provided on applications and other forms on the
                Site, such as full name, address, date of birth, passport data,
                or other identification information;
              </li>
              <li>personal phone number;</li>
              <li>
                financial information that may include investment experience;
              </li>
              <li>
                documentation made available to us to confirm identity, such as
                ID card, passport, bank statement, etc., for individual
                customers;
              </li>
              <li>company incorporation information for business clients;</li>
              <li>
                payment documents, such as money transfer orders, bank
                statements, etc.
              </li>
            </ul>
          </p>

          <h1 className="text-2xl font-bold mt-10">Use of Personal Data</h1>
          <p className="mt-5">
            SuperForex may use a User's Personal Data for one or more of the
            purposes below:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>to verify User's identity;</li>
              <li>to process trading or non-trading operations;</li>
              <li>to perform anti-money laundering procedures;</li>
              <li>
                to keep an accurate and up-to-date record of User’s account
                data;
              </li>
              <li>
                to provide information to the User about specific products and
                services of SuperForex that we believe will be most suitable for
                him.
              </li>
            </ul>
          </p>

          <h1 className="text-2xl font-bold mt-10">
            Confidentiality in Respect of User IDs and Passwords
          </h1>
          <p className="mt-5">
            Users are obliged to keep user IDs, passwords and other means of
            identification secret. Users shall not store their user IDs,
            passwords or other means of identification in their browsers and
            shall delete all temporary files stored in their cache memory as
            well as surfing history. Users are solely responsible should such
            means of identification be communicated to, discovered or misused by
            a third party, and for any and all losses and damages that may
            result therefrom.
          </p>
          <p className="mt-5">
            Users have taken note of the fact that they should disconnect from
            the identification services proposed by SuperForex before leaving
            their Internet station.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            Confidentiality and Encryption
          </h1>
          <p className="mt-5">
            The data exchanged between Users and SuperForex is transmitted via
            open, public networks (such as the Internet) that are not subject to
            any controls or reviews. Even if the data transmitted is encrypted,
            it may not necessarily stay encrypted for the entire duration of the
            transmission, nor may it necessarily remain encrypted at User’s end:
            it is possible that data may be intercepted.
          </p>
          <p className="mt-5">
            Furthermore, Users hereby declare that they have taken note that the
            legislation applicable in their country may prohibit or restrict the
            importing, exporting or use of encryption logarithms. In no event
            shall SuperForex be responsible for any violations of measures
            governing the importing, exporting or use of encryption logarithms.
            User alone shall be responsible in the event of any such violation.
          </p>
          <p className="mt-5">
            Lastly, User attention is drawn to the fact that information
            transmitted electronically, e.g. by e-mail, SMS, etc., is in
            principle not encrypted and may be intercepted.
          </p>
          <p className="mt-5">
            If you have any questions about this Privacy Policy or how
            SuperForex processes your personal information, please contact us by
            email at
            <span className="ms-2 underline text-primary font-bold hover:text-default">
              support@superforex.com
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Page;
