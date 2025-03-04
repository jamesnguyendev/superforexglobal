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
          <h1 className="text-5xl font-semibold">Welcome Bonus Agreement</h1>
          <div className="flex flex-col gap-6 font-normal mt-16">
            <h3 className="text-3xl font-semibold">1. General Provisions</h3>
            <div>
              1.1. The Company and the Partner undertake obligations to attract
              Customers who would carry out trading operations with the
              instruments the Company offers.
            </div>
            <div>
              1.2. The Partner undertakes rights and obligations described in
              this Agreement with regard to the attraction of Customers for
              entering into brokerage service contracts with the Company. The
              Partner also undertakes other rights and obligations hereinafter
              set forth. Honoring the commitments stipulated in the present
              Agreement, the Partner attracts Customers for the Company on its
              behalf.
            </div>
            <div>
              1.3. The Partner unconditionally acknowledges that all Customers
              attracted are the Company’s Customers.
            </div>
            <div>1.4. Language</div>
            <div>
              1.4.1. The official language of this Agreement is English.
            </div>
            <div>
              1.4.2. For partners' convenience, the Company may provide the
              translation of the present Agreement into another language. The
              function of that translation is purely informative.
            </div>
            <div>
              1.4.3. If there is a discrepancy between the English version and
              the translation of the present Agreement into another language,
              the English version shall be viewed as the one with more
              authority.
            </div>
            <div>1.5. Partner’s identity verification</div>
            <div>
              1.5.1. The Company has a right to request confirmation of any
              information the Partner provides during registration for the
              affiliate program. For this purpose, the Company shall be entitled
              to request a scanned copy or a notarized copy of the Partner's ID
              document, at the Company's discretion.
            </div>
            <div>
              1.5.2. If the Partner has not received the Company's request for a
              scanned copy or a notarized copy of the ID document, the
              verification of the affiliate account shall be deemed
              nonobligatory. However, the Company reserves the right to restrict
              access of non-verified accounts to certain services. In this case,
              the Partner may optionally pass the verification procedure.
            </div>
            <div>
              1.5.3. In the event that any information provided by the Partner
              during registration (name, residential address or telephone
              number) changes, the Partner must immediately inform the Partner
              Relations Department of the Company about these changes and
              request that the Company updates the information.
            </div>
            <div>
              1.5.4. The Partner acknowledges and agrees that any information
              provided during registration for the affiliate program may be
              employed by the Company in an anti-money laundering campaign.
            </div>
            <div>
              1.5.5. The Partner is responsible for the authenticity of their ID
              documents (copies included). The Partner acknowledges the
              Company's right to contact law enforcement agencies of the country
              where the ID document was issued to confirm its authenticity if it
              is questionable. Should the ID document be found to be a forgery,
              the Company shall be entitled to bring the Partner to justice in
              accordance with legislation in the country where the ID document
              was issued.
            </div>
          </div>
          <div className="flex flex-col gap-6 font-normal mt-6">
            <h3 className="text-3xl font-semibold">
              2. Rights and obligations of the parties
            </h3>
            <div>
              2.1. The Company undertakes to provide for an indefinite period,
              the bonus, in the amount of 100% of each deposit, as soon as the
              deposit is credited, except in cases where automatic accrual is
              impossible.
            </div>

            <div>
              2.2. The Client has the right to receive a 100% Welcome bonus for
              an unlimited number of times, to an unlimited number of accounts,
              as well as to benefit from the received bonuses in trading at his
              discretion, within trading strategies not prohibited by the
              current clauses of the Client Agreement.
            </div>

            <div>
              2.3. Client has the right to request the bonus, if it was
              previously requested, but was not granted automatically, within a
              week after the deposit.
            </div>

            <div>
              2.4. The Company has no right under this Agreement to establish
              additional requirements, such as the volume of traded lots or time
              frames of trading.
            </div>

            <div>
              2.5. The maximum amount of the Welcome Bonus that can be received
              is not set. Also, the Company does not have the right to change
              the leverage of the client, depending on the amount of the bonus
              received.
            </div>

            <div>
              2.6. The Company has the right to cancel the bonus if the client
              violates the terms of the Client Agreement and abuses the bonuses.
              The customer agrees that in case the SuperForex company finds
              facts of a fraud activity involving the bonus, the client's deals
              can be declared void and the results of the trading can be
              abolished. In this case, the Company is not responsible for the
              consequences, such as Stop out and related losses.
            </div>

            <div>
              2.7. The Company has the right to change the bonus terms at its
              discretion, without prior notice to the client.
            </div>
          </div>
          <div className="flex flex-col gap-6 font-normal mt-6">
            <h3 className="text-3xl font-semibold">
              3. Withdrawals, cancellation of the bonus and termination of the
              Agreement
            </h3>
            <div>
              3.1. In order to ensure the correct operation of the bonus and
              profit distribution, the Company strongly recommends closing all
              deals before withdrawing some money.
            </div>

            <div>
              3.2. Upon withdrawal, a proportion of the bonus funds will be
              cancelled. The proportion is calculated based on the following:{" "}
            </div>

            <div>
              C = (X/Y) * (the amount of the 100% bonus on the deposit){" "}
            </div>

            <div>Where: </div>

            <div>C = cancelled amount</div>

            <div>X = the amount that is requested for withdrawal</div>

            <div>
              Y = the current available balance in the account after the Welcome
              bonus and other types of bonuses, if available, have been
              deducted.{" "}
            </div>

            <div>
              For example, you claimed the Welcome Bonus and made the first
              deposit of $50 to activate it. The bonus will be 100% of $50 =
              $50. In total you have $100 on your account. Let’s say you make
              some trades and get to $200 and you want to make a withdrawal of
              $50. Let’s use the formula to see how much money will be cancelled
              from your account: X = $50 Y= 200 - 50 = $150 =&gt; C =
              (50/150)*100 = 33.33 So $33.33 of the Welcome bonus will be
              cancelled from your account after you make your withdrawal.
            </div>

            <div>
              3.3. Withdrawal of the entire balance may be the basis for the
              complete cancellation of the bonus. At the same time, all
              obligations of the parties are considered fulfilled.{" "}
            </div>

            <div>
              3.4. Both parties may declare early termination of this Agreement.
              The Company undertakes to cancel the bonus, at the request of the
              Client, without providing them with any reasons for this. The
              Company, in turn, also reserves the right to cancel the bonus and
              withdraw from this agreement since the bonus is the property of
              the Company.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
