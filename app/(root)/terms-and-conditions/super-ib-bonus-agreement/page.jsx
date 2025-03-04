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
          <h1 className="text-5xl font-semibold">Super IB Bonus Agreement</h1>
          <div className="flex flex-col gap-6 font-normal">
            <div className="mt-16">
              1. The SuperForex provides this Bonus for new Clients.
            </div>

            <div>
              2. The Super IB Bonus is credited on the client's trading account
              within 3 (three) working days after the client make a deposit and
              provided his information to Partner.{" "}
            </div>

            <div>
              3. Exclusivity and compatibility: The Super IB Bonus cannot be
              combined with any other bonuses, including the Welcome+ Bonus, the
              Energy Bonus, and the Hot Bonus.{" "}
            </div>

            <div>
              4. The Super IB Bonus cannot be withdrawn. Profit over the bonus
              can be withdrawn.{" "}
            </div>

            <div>
              5. Withdrawals and bonus cancellation: The profit over the Super
              IB Bonus can be withdrawn only after all buy or sell trades are
              completed. Profit is allowed for withdrawal to completely verified
              accounts only.{" "}
            </div>

            <div>
              6. The profit derived from the Super IB Bonus can be withdrawn if
              the following conditions are fulfilled:{" "}
            </div>

            <div>
              6.1. Upon withdrawal, a proportion of the bonus funds will be
              cancelled. The proportion is calculated based on the following:{" "}
            </div>

            <div>
              C = (X/Y) * (the amount of the 100% bonus on the deposit){" "}
            </div>

            <div>Where: </div>

            <div>C = cancelled amount </div>

            <div>X = the amount that is requested for withdrawal </div>

            <div>
              Y = the current available balance in the account after the 100%
              bonus and other types of bonuses, if available, have been
              deducted.{" "}
            </div>

            <div>
              7. The customer agrees that in the event that SuperForex suspects
              a fraudulent activity involving the Super IB Bonus, the latter can
              be declared void and the results of the trading can be annulled.{" "}
            </div>

            <div>
              8. SuperForex reserves the right to cancel the Super IB Bonus
              without any prior notice to its customers. Therefore, we strongly
              recommend that customers should not use the bonus funds in
              calculation of profit in their trading strategy.{" "}
            </div>

            <div>
              9. SuperForex is not responsible for any consequences that may
              arise as a result of cancelling the bonus, including but not
              limited to Stop Out, as the bonus is the ownership of SuperForex.{" "}
            </div>

            <div>
              10. The Company reserves the right to amend or modify the Bonus
              Agreement terms without prior notice.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
