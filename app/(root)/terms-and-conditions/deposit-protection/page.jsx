import React from "react";
import SideBarPolicy from "../../../components/SideBarPolicy";
import { Container } from "@mui/system";

const Page = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-16 text-default max-lg:px-7">
        <div className="max-lg:order-2 lg:border-r lg:border-dashed pe-5 max-lg:pt-8">
          <SideBarPolicy />
        </div>
        <div className="lg:col-span-2 lg:ps-7">
          <h1 className="text-4xl font-bold">Deposit Protection</h1>
          <p className="mt-10">
            1. All clients are eligible for Deposit Protection, as long as they
            meet the criteria specified in this agreement.
          </p>
          <p className="mt-5">
            2. The No Deposit, Easy Deposit, and Points Bonus are not compatible
            with the Deposit Protection Program. Customers using those deposits
            are not eligible for compensation.
          </p>
          <p className="mt-5">
            3. The Customer must have suffered a 90% or more loss on their
            deposit during the duration of the Deposit Protection program in
            order to be eligible for compensation.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            4. The duration of the Deposit Protection depends on the amount of
            the deposit and the distribution is as follows:
          </h1>
          <p className="mt-5">
            4.1. Deposits from $50 to $100 - 1 day deposit protection;
          </p>
          <p className="mt-5">
            4.2. From $101 to $500 - 5 days deposit protection;
          </p>
          <p className="mt-5">
            4.3. From $501 to $1000 - 10 days deposit protection;
          </p>
          <p className="mt-5">
            4.4. From $1001 to $5000 - 14 days deposit protection;
          </p>
          <p className="mt-5">4.5. Above $5001 - 20 days deposit protection.</p>

          <h1 className="text-2xl font-bold mt-10">5. Withdrawals:</h1>
          <p className="mt-5">
            5.1. The compensation itself works like a bonus and cannot be
            withdrawn, but can be traded on.
          </p>
          <p className="mt-5">
            5.2. Profit earned from trading using the deposit compensation can
            be withdrawn as long as it does not exceed the amount of the
            deposit.
          </p>
          <p className="mt-5">5.3. The minimal withdrawal amount is $10.</p>
          <p className="mt-5">
            5.4. The number of withdrawal operations is unlimited.
          </p>
          <p className="mt-5">
            5.5. In order to withdraw profit, the Customer must unblock it
            according it to the following proportion: $2 per 1 traded lot (2:1).
            For example, to withdraw $10 the Customer must have at least 5
            traded lots.
          </p>
          <p className="mt-5">
            5.6. Upon withdrawal some amount of the compensation will be
            cancelled. The amount cancelled is determined by the following
            formula:
          </p>
          <p className="mt-5">
            C = (X/Y) * (the amount of the bonus on the deposit)
          </p>
          <p className="mt-5">Where:</p>
          <p className="mt-5">C = cancelled amount</p>
          <p className="mt-5">
            X = the amount that is requested for withdrawal
          </p>
          <p className="mt-5">
            Y = the current available balance in the account after the 40% bonus
            and other types of bonuses, if available, have been deducted.
          </p>
          <p className="mt-5">
            5.7. Superforex reserves the right not to count deals with results
            from minus 0.05 USD to plus 0.05 USD/EQ when counting the amount of
            traded lots. In case such trades are detected, the company reserves
            the right to recalculate the amount of lots upon withdrawal of the
            profit and adjust the amount of withdrawal money funds, in
            accordance with the terms of the bonus (1 traded lot = $2/EQ). The
            rest of the money funds will be returned to the trading account of
            the client.
          </p>
          <p className="mt-5">
            5.8. To withdraw their profit, the Client should make a deposit
            equal to or greater than the credited compensation itself within 30
            days from the moment of getting the compensation. Before this moment
            withdrawing any profit is not possible. In the absence of such a
            deposit, the compensation together with all profit earned on it will
            be cancelled 30 days after the date of receiving the compensation.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            6. The company has the right to refuse to refund the Customer’s
            deposit in the following instances:
          </h1>
          <p className="mt-5">
            6.1. If the client systematically violates the rules of the User
            Agreement during the active period of the Deposit Protection
            program.
          </p>
          <p className="mt-5">
            6.2. If during the last 30 days there have been two or more
            violations of the User Agreement by this client.
          </p>
          <p className="mt-5">
            6.3. If more than 70% of the closed deals on the client’s account
            within the last 90 days have had negative results.
          </p>
          <p className="mt-5">
            6.4. If the customer has one or more of these bonuses on their
            account: No Deposit Bonus, Easy Deposit Bonus, Point Bonus. These
            are not compatible with the Deposit Protection program.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Page;
