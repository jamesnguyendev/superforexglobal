import SideBarPolicy from "@/app/components/SideBarPolicy";
import { Container } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-28 text-default max-lg:px-7">
        <div className="max-lg:order-2 lg:border-r lg:border-dashed pe-5 max-lg:pt-8 ">
          <SideBarPolicy />
        </div>
        <div className="lg:col-span-2 lg:ps-7">
          <h1 className="text-5xl font-semibold">
            Local Depositor service Agreement
          </h1>
          <div className="flex flex-col gap-6 font-normal">
            <h3 className="text-3xl font-semibold mt-16">
              1. General Conditions and Terminology
            </h3>
            <div>
              1.1 Local Depositor - an individual or legal entity officially
              authorized to perform financial transactions for clients
              registered with SuperForex.{" "}
            </div>

            <div>
              1.2 SF-money - a certain discount that the Local Depositor
              receives as a payment for their services for transferring funds to
              or from customer accounts.
            </div>

            <div>
              1.3 Special account - an account that is intended for financial
              transactions. It is issued to each Local Depositor upon receiving
              the Local Depositor status.
            </div>

            <div>
              1.4 Net Cash Flow - measured as the sum of local transfers from a
              special account to a trading account minus the sum of local
              transfers from a trading account to a special account. Net cash
              flow is calculated on a monthly basis. Every first day of the
              month, the parameter is reset to zero and a new billing period
              begins.
            </div>
            <div>
              1.5 In order to become a Local Depositor, you must be registered
              with SuperForex (hereinafter referred to as the Company) as a
              partner, fully verify the partner account and successfully
              cooperate with the Company following the Affiliate Partnership
              Program.
            </div>

            <div>
              1.6 The activity of the Local Depositor is limited to the specific
              region in which they are registered and operate as a Partner.
            </div>

            <div>
              1.7 SuperForex considers each Local Depositor as a separate
              payment system, which is fully responsible to its clients for the
              funds received for transactions until they are credited to the
              bank account or e-wallet of customers or the bank account/e-wallet
              of SuperForex.
            </div>

            <div>
              1.8 A third-party payment system is a payment system that the
              Company cooperates with for external transfers, and on the side of
              which the account/e-wallet of the Local Depositor is registered.
            </div>
          </div>
          <div className="flex flex-col gap-6 font-normal mt-6">
            <h3 className="text-3xl font-semibold">
              2. Relationship with Junior Affiliates
            </h3>
            <div>
              2.1. The Master may provide advertising of the Company referring
              to the corresponding section of the Company’s website and
              information confirmed to be authentic by the Company to
              prospective Junior Affiliates.
            </div>
            <div>
              2.2. The Master warrants the authenticity and legal validity of
              all documents and contracts which the Master submits to the
              Company on behalf of a Junior Affiliate.
            </div>
            <div>
              2.3. The Master shall provide Junior Affiliates with essential
              reliable information relevant to entering into brokerage service
              contracts with the Company and explanations regarding the content
              of the contracts and the Company’s services.
            </div>
            <div>
              2.4. The Master is obliged to notify a Junior Affiliate of any
              risks related to currency trading before the Junior Affiliate
              Agreement is signed.
            </div>
            <div>
              2.5. Providing recommendations and information to motivate a
              Junior Affiliate to trade is not part of the Company’s service
              plan. In exceptional cases, the Company has a right to provide
              information, recommendations and advice to a Junior Affiliate at
              its discretion, however, the Company shall not bear responsibility
              for the consequences of such recommendations.
            </div>
            <div>
              2.6. The Master shall refrain from giving a Junior Affiliate
              recommendations or advice concerning trading operations on the
              trading account. In case the Master does not comply with this, the
              Company shall not bear responsibility for the consequences of the
              recommendations or advice provided.
            </div>
          </div>
          <div className="flex flex-col gap-6 font-normal mt-6">
            <h3 className="text-3xl font-semibold">
              3. The Company’s Rights and Obligations
            </h3>
            <div>
              3.1 The Company undertakes to review each application for
              obtaining the status of a Local Depositor and make a decision
              within 5 working days from the date of receipt of the application.
            </div>
            <div>
              3.2 When granting the status of Local Depositor, the Company
              undertakes to place the relevant information about the Local
              Depositor in the Client Cabinet, as well as to organize a news
              mailing about the new Local Depositor in a certain region.
            </div>
            <div>
              3.3 The Company undertakes to process requests for a local
              transfer of funds between a client's account and the "Special
              account" of a Local Depositor within 24 hours from the date of
              receipt of this application, excluding weekends and public
              holidays. For local transfers from the client’s account to the
              Local Depositor's Special account, the transfer period can be
              extended to 48 hours if the trading account is subject to checking
              by the Risk and Trading Department.
            </div>
            <div>
              3.4 The Company undertakes to promptly transfer funds received
              from third-party payment systems and intended for customers to the
              Special account of the Local Depositor. At the same time, the
              timeframe of deposits and withdrawals to the account of the Local
              Depositor depends on the third-party payment system.
            </div>
            <div>
              3.5 The Company undertakes to promptly provide SuperForex Money
              (or SF money) vouchers within 1 business hour from the moment of
              the request for its provision, excluding weekends and public
              holidays.
            </div>
            <div>
              3.6 The Company is not responsible for delays in
              transfers/refunds/withdrawals or any illegal actions by
              third-party payment systems in relation to the Partner (Local
              Depositor), including cases of non-payment of funds with undefined
              reasons, as long as the Company has fulfilled its obligation to
              send funds to the Partner's or Local depositor’s account
              registered in the payment system, and has received confirmation
              from the third-party payment system about the successful transfer
              of these funds to the partner’s account, wallet, or transit
              account of the payment system.
            </div>
            <div>
              3.7 The Company is not responsible for delays or illegal actions
              by third-party payment systems in relation to the Partner (Local
              Depositor), including cases of fund loss on the side of the
              third-party payment system/bank while transferring funds to the
              Partner's SuperForex account, until the Company receives those
              funds in its corporate account in the respective payment
              system/bank or corporate e-wallet.
            </div>
            <div>
              3.8 The Company is eligible, upon receiving a request for the
              status of a Local Depositor, to set certain requirements for each
              partner, depending on the terms of cooperation with that partner,
              their activity, the number of registered affiliated clients,
              turnover, and other indicators of effective cooperation, with the
              aim to determine the partner's reliability and possibility of
              further development in the status of a Local Depositor. Also, when
              making a decision, the Company evaluates the demand for Local
              Transfer services in the region by looking at the number of
              clients in the region and the number of other Local Depositors
              working in the same region.{" "}
            </div>
            <div>
              3.9 The Company is eligible to reject a Partner’s request to
              receive Local Depositor status if there are significant violations
              of the Partner's Agreement terms and conditions and if the Partner
              does not meet certain parameters in accordance with{" "}
            </div>
            clause 3.8.
            <div>
              3.10 The Company is eligible to cancel the Local Depositor
              permission and deactivate the Special account in case of systemic
              violations of this agreement, the Partner's Agreement, as well as
              in case of a large number of complaints from customers about the
              improper performance of the Partner’s obligations on money
              transfers and bad service.{" "}
            </div>
            <div>
              3.11 The Company has the right to cancel the provided SF-money
              discount in the event of manipulation with SF-Money or improper
              performance of the Local Depositor’s obligations described in the
              clause 3.10.
            </div>
          </div>
          <div className="flex flex-col gap-6 font-normal mt-6">
            <h3 className="text-3xl font-semibold">
              4. SuperForex Money (SF Money) Vouchers and Discounts
            </h3>
            <div>
              4.1 SF money is provided to each Local Depositor, and the discount
              provided is considered as the fee (commission) for financial
              transactions. Example: the Local Depositor receives $1,000 from
              the client to be credited to their trading account. The Local
              Depositor replenishes their Special account in the amount of $900
              and receives an SF Money voucher in the amount of $1,000 and
              transfers it to the client. As a result, the difference of $100 is
              considered an SF money discount and the Partner receives this
              money as a reward for their services as a Local Depositor.{" "}
            </div>

            <div>
              4.2 An SF money voucher is provided to the partner on condition
              that the account is topped up via a defined payment system
              available for receiving a discount. The current list of payment
              systems that can be used to receive the SF Money can be clarified
              by contacting the Partnership Department at
              partners@superforex.com.
            </div>

            <div>
              4.3 By default, the SF money discount depends on the Net cash flow
              parameter and can be calculated in the following way:
            </div>

            <div className="ps-10 *:pb-4">
              <li>Net Cash Flow &lt; $1000 - Available Discount 7%</li>
              <li>Net Cash Flow $1000 – $3000 - Available Discount 8%</li>
              <li>Net Cash Flow $3000 – $4000 - Available Discount 9%</li>
              <li>Net Cash Flow &gt; $4000 - Available Discount 10%</li>
            </div>

            <div>
              4.4 In case manipulations with SF money such as withdrawals right
              after deposits without any trading activity (Reversive
              transactions), financial transactions from/to the Partner’s own
              trading accounts, accounts registered by their relatives and other
              trading accounts managed by the Local Depositor are detected, the
              Company may cancel the provided SFvmoney voucher which was used
              improperly, and deduct the appropriate amount from the Partner’s
              "Special account."
            </div>
          </div>
          <div className="flex flex-col gap-6 font-normal mt-6">
            <h3 className="text-3xl font-semibold">
              5. Dispute Resolution and Timeframe of the Agreement
            </h3>
            <div>
              5.1. In the event of a dispute, in particular a disagreement
              regarding the actions of the Company, the Local Depositor has the
              right to file a complaint and open a dispute, indicating all
              claims and possible solutions to the issue, and send them in the
              form of a letter to{" "}
              <a className="text-primary underline">dealer@superforex.com</a>,
              which the Company undertakes to consider within 10 working days.{" "}
            </div>

            <div>
              5.2 This agreement is valid indefinitely, from the moment of
              providing a Special account to the Local Depositor with the
              ability to make transactions between SuperForex accounts.
            </div>

            <div>
              5.3 Both parties (the Local Depositor and SuperForex) have the
              right to refuse cooperation within the Local Depositor service,
              unilaterally, by notifying the other party in advance via an email
              to{" "}
              <a className="text-primary underline">partners@superforex.com</a>{" "}
              no later than 14 calendar days before the desired date of
              termination of services.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
