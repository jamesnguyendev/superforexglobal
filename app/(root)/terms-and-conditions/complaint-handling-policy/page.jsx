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
          <h1 className="text-4xl font-bold">Complaint Handling Policy</h1>
          <p className="mt-10">
            Superforex, hereinafter referred to as the “Company”, strives to
            provide top-quality brokerage services for trading on the Forex
            market.
          </p>
          <p className="mt-5">
            The Company has appointed a Compliance Officer who is responsible
            for efficiently handling any complaints from the Client. This would
            allow the Company to successfully deal with issues and prevent them
            from reoccurring in the future.
          </p>

          <h1 className="text-2xl font-bold mt-10">Definition</h1>
          <p className="mt-5">
            According to the Company, a complaint is any objection and/or
            dissatisfaction that the Client may have with regards to the
            provision of any financial service provided by the Company.
          </p>

          <h1 className="text-2xl font-bold mt-10">Procedure</h1>
          <p className="mt-5">
            The Compliance Officer is tasked with processing Client complaints,
            except in the case where the complaint involves the Compliance
            Officer; such complaints shall be handled by the Managing Director.
          </p>
          <p className="mt-5">
            Clients may register complaints using the following methods:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>
                E-mail:
                <span className="ms-2 underline text-primary font-bold hover:text-default">
                  info@superforex.global
                </span>
              </li>
              <li>Telephone: +65-3-1590282 (International format)</li>
              <li>Skype: client-support.superforex</li>
            </ul>
          </p>
          <p className="mt-5">
            The requests will be forwarded to the Compliance Officer within 48
            hours after being received. After he/she receives them, the Client
            will be sent a notification that their request is being processed
            within 48 hours.
          </p>
          <p className="mt-5">
            The Client will receive a final response or a holding response
            explaining the findings of the investigation up to 4 weeks from the
            date the Compliance Officer receives the Client’s complaint. If a
            holding response is sent to the Complainant, an explanation shall be
            given stating the reasons why the Company has not been able to
            resolve the complaint as well as giving a time estimate for the
            resolution of the issue.
          </p>
          <p className="mt-5">
            If after 8 weeks of receiving the complaint we are still unable to
            resolve the issue, the Compliance Officer will notify you in writing
            about the reasons for the delay and indicate an updated time
            estimate to resolve the issue.
          </p>
          <p className="mt-5">
            When the Client receives the final response, they will have 8 weeks
            to respond. If no response is received within that period from the
            complainant indicating that they are still dissatisfied with the
            explanation, the Complaint will be considered resolved.
          </p>
          <p className="mt-5">
            If the complainant is still not satisfied with the Company’s final
            response, they can refer their complaint with a copy of the
            Company’s final response to the competent authorities for further
            investigation within a period of 6 months.
          </p>
          <p className="mt-5">
            Superforex is regulated by the International Financial Services
            Commission. You can find more information
            https://www.belizefsc.org.bz/
          </p>

          <div className="flex mt-10">
            <Link
              href="https://cms-cdn.superfx.online/Client_Complaint_Form-fi9njhxu97r.pdf"
              target="_blank"
              download
            >
              <div className="rounded-md p-2 bg-white hover:shadow-lg border-2 border-light_grey flex gap-2">
                <TextSnippetIcon />
                <p>Client Complaint Form</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
