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
          <h1 className="text-5xl font-semibold">CryptoMania Contest</h1>
          <div className="flex flex-col gap-6 font-normal mt-16">
            <h3 className="text-3xl font-semibold">
              1. General conditions, terminology
            </h3>
            <div>
              1.1. Contest is an event organized by the Company, the purpose of
              which is to increase the trading activity of customers, gain new
              experience and draw prizes.
            </div>

            <div>
              1.2. Super-round is a special round formed based on the results of
              bidding of all rounds during the year. The winner of the super
              round is the client who has achieved the maximum trading result
              during all rounds in the the period from January to December.
            </div>

            <div>
              1.3. Round itself is a trading period during which traders
              registered in the context trade with a set of trading instruments
              established by the rules. The winner of the round is the trader
              who has achieved the maximum trading result.
            </div>
          </div>
          <div className="flex flex-col gap-6 font-normal mt-6">
            <h3 className="text-3xl font-semibold">
              2. Details of the contest
            </h3>
            <div>
              2.1. The duration of each round is 1 month: the winner is
              determined automatically within 3 days after the end of the round.
              The duration of the super-round is 12 months: the winner is
              determined automatically within 10 days after the completion of
              the super-round.
            </div>

            <div>
              2.2. Only clients registered in the context, who receive a special
              trading account with a strictly defined number of trading
              instruments and a virtual deposit, are considered as participants
              of the contest. A client registered within a month is allowed to
              participate in the round next month. For example, if the client
              registered on January 2, he starts trading within the contest on
              February 1. To move to a new round, a new registration in the
              context is not required: the account automatically moves to a new
              round and receives a certain amount of deposit for each round.
            </div>

            <div>
              2.3. The prize at the end of each round can be received to a
              special account opened by the winner. The amount of the reward for
              winning the round is $ 100, which is credited to the client in the
              form of a bonus. The amount of the reward for winning the Super
              Round is $ 1000, which is also credited as a bonus.
            </div>

            <div>
              2.4. If, at the end of the round, several trading accounts gain
              the same maximum profit amount at once, several clients receive
              the prize, but no more than 3 in each round.
            </div>

            <div>
              2.5. A balance of $2,000 is issued for each round. This is virtual
              money that cannot be withdrawn or transferred to another trading
              account.
            </div>

            <div>
              2.6 . Number of accounts: Each client can register up to 3
              accounts per context. At the same time, any of the 3 accounts can
              be declared the winner. At the same time, registration of a large
              number of accounts, including under different names, will be
              considered fraud, so such clients may be disqualified.
            </div>
          </div>
          <div className="flex flex-col gap-6 font-normal mt-6">
            <h3 className="text-3xl font-semibold">
              3. Rights and obligations
            </h3>
            <div>
              3.1. The Client has the right to refuse to participate in the
              contest at any stage and refuse to receive a prize. If the winner
              of the round refuses the prize, the new winner of the round is not
              set by the Company.
            </div>

            <div>
              3.2. The Client has the right to use any trading strategies and
              trade with any cryptocurrencies available for trading at his
              discretion.{" "}
            </div>

            <div>
              3.3. The Company may require the winning client to write a
              positive review about the Company, based on the fact that the
              client has received a successful trading result and a positive
              experience using the Company's services, and other traders who are
              still in search of a reliable brokerage company should find out
              about it.
            </div>

            <div>
              3.4. The Company may require an interview from a client who wins a
              significant number of rounds (more than 3 within 12 months), as
              well as participation in other marketing activities.
            </div>

            <div>
              3.4. The Company undertakes to notify the client of the victory in
              the round by publishing the winner's name on the website or
              sending a special message by e-mail specified during registration,
              and to provide the prize at the first request of the client
              declared the winner of the round, if the client fulfills clause
              3.3 or 3.4 of this agreement.
            </div>

            <div>
              3.5. The Company has the right to change the terms of the contest
              at its discretion without prior notice to the contest
              participants.
            </div>

            <div>
              3.6. The Company has the right to unilaterally suspend the
              validity of this contest, if necessary.
            </div>

            <div>
              3.7. The Company is not responsible for the negative consequences
              for the participant of the contest, in case of suspension of the
              rates by the decision of the liquidity provider, as well as in
              case of forced closure of the deal after reaching the stop-out
              level.
            </div>

            <div>
              3.8. The Company reserves the right to disqualify the client
              during the contest, in case of abuse of the company's services,
              leaving negative reviews and other activities that harm the
              reputation of the Company.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
