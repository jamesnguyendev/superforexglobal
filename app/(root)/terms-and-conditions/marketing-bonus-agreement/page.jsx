import SideBarPolicy from "@/app/components/SideBarPolicy";
import { Container } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-16 text-default max-lg:px-7">
        <div className="max-lg:order-2 lg:border-r lg:border-dashed pe-5 max-lg:pt-8 ">
          <SideBarPolicy />
        </div>
        <div className="lg:col-span-2 lg:ps-7">
          <h1 className="text-5xl font-semibold">Marketing Bonus Agreement</h1>
          <div className="flex flex-col gap-6 font-normal">
            <div className="mt-16">
              1. The SuperForex provides this Bonus to winners of contests and
              lotteries, which can be carried out at various events.
            </div>
            <div>
              2. The Marketing bonus is credited on the client's trading account
              within three (3) working days after the announcement of the
              winners. The accepted account currency is only USD.
            </div>

            <div>
              3. Exclusivity and compatibility: The Marketing Bonus cannot be
              combined with any other bonuses, including the Welcome+ Bonus, the
              60% Energy Bonus, and the 120% HOT Bonus.
            </div>

            <div>
              4. The Marketing Bonus cannot be withdrawn. Profit over the bonus
              can be withdrawn.
            </div>

            <div>
              5. Withdrawals and bonus cancellation: The profit over the
              Marketing Bonus can be withdrawn only after all buy or sell trades
              are completed. Profit is allowed for withdrawal to completely
              verified accounts only.
            </div>

            <div>
              6. The profit derived from the Marketing Bonus can be withdrawn if
              the following conditions are fulfilled:
            </div>

            <div>
              6.1. The minimum amount for withdrawal is $10; the maximum amount
              equal to the amount provided by the bonus. To unlock the
              withdrawable amount, you must have traded a certain volume, where
              $2 = 1 lot e.g. to withdraw $10 you must have traded at least 5
              lots.
            </div>

            <div>
              6.2. The profit over Marketing Bonus can be withdrawn only after
              all buy or sell trades are completed. Upon withdrawal, a
              proportion of the bonus funds will be cancelled. The proportion is
              calculated based on the following:
            </div>

            <div>C = (X/Y) * (the amount of Marketing bonus)</div>

            <div>Where:</div>

            <div>C = cancelled amount; </div>

            <div>X = the amount that is requested for withdrawal; </div>

            <div>
              Y = the current available balance in the account after the
              Marketing bonus and other types of bonuses, if available, have
              been deducted.
            </div>

            <div>
              For example, you claimed the Marketing bonus and made got $50 on
              your trading account. Let’s
            </div>

            <div>
              say you make some trades and closed 6 lots (means $12 as a profit)
              and you want it to withdraw.
            </div>

            <div>
              Let’s use the formula to see how much money will be cancelled from
              your account:
            </div>

            <div>X = $12</div>

            <div>Y= 62 - 50 = $12</div>

            <div>C = (12/12)*50 = 50</div>

            <div>
              So $50 will be cancelled from your account after you make your
              withdrawal.
            </div>

            <div>
              7. Trading conditions - the maximum volume of deals when using the
              Marketing Bonus is 1 lot. The level of stop-outs is 50% and the
              margin call level is 80%.
            </div>

            <div>
              8. The maximum leverage for customers who received the Marketing
              Bonus is 1:200.
            </div>

            <div>
              9. Upon the traded lots calculations, the Company takes into
              account only the deals with a positive trading result of at least
              +5 pips per lot. Other deals will not be counted.
            </div>

            <div>
              10. Using hedging trading techniques is fully prohibited with the
              Marketing Bonus.
            </div>

            <div>
              11. The Marketing Bonus is provided to customers for a period of
              180 days from the moment it is credited to the trading account.
              Upon expiration of the validity period, the bonus and the profit,
              that was produced by using this bonus, will be completely
              cancelled.
            </div>

            <div>
              12. The customer agrees that in the event that SuperForex suspects
              a fraudulent activity involving the Marketing bonus, the latter
              can be declared void and the results of the trading can be
              annulled.
            </div>

            <div>
              13. SuperForex reserves the right to cancel the Marketing Bonus
              without any prior notice to its customers. Therefore, we strongly
              recommend that customers should not use the bonus funds in
              calculation of profit in their trading strategy.
            </div>

            <div>
              14. SuperForex is not responsible for any consequences that may
              arise as a result of cancelling the bonus, including but not
              limited to Stop Out, as the bonus is the ownership of SuperForex.
            </div>

            <div>
              15. The Company reserves the right to amend or modify the Bonus
              Agreement terms without prior n
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
