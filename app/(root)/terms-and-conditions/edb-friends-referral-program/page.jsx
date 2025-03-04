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
          <h1 className="text-4xl font-bold">EDB Friends referral program</h1>
          <h1 className="text-2xl font-bold mt-10">
            1. General conditions, terminology.
          </h1>
          <p className="mt-5">
            1.1. Referrer is a person owned by the SuperForex trading account,
            they will be eligible to receive reward as a payment for invited
            friend to trade with Easy deposit bonus and the SuperForex Company.
          </p>
          <p className="mt-5">
            1.2. Referred person is a trader invited by the referrer to start
            trading with SuperForex and the Easy deposit bonus.
          </p>
          <p className="mt-5">
            1.3. Reward is a virtual deposit granted to the Referrer’s trading
            account within “EDB referral links program” and the Easy deposit
            bonus program. It can be used within Easy deposit bonus program only
            and can’t be withdrawn being an integral part of the Easy deposit
            bonus.
          </p>
          <p className="mt-5">
            1.4. For those referrers who are ready to invite more than 3 friends
            to trade with SuperForex, instead of the “EDB referral links”
            program the Company researched a special “Partnership affiliate
            program” with more possibilities by earnings without limitations. If
            you are one of them, follow the link and register a special account
            https://superforex.com/partnership-program
          </p>

          <h1 className="text-2xl font-bold mt-10">
            2. Rights and obligations.{" "}
          </h1>
          <p className="mt-5">
            2.1. Every Client can receive its own referral link to invite
            friends and become a referrer. One referrer can have only one
            referral link.
          </p>
          <p className="mt-5">
            2.2. Invited person eligible to become a referrer to invite their
            own friends within the current program.
          </p>
          <p className="mt-5">
            2.3. The SuperForex Company is obligated to grant rewards for
            referred persons for maximum 3 times and provide the Easy deposit
            bonus immediately.
          </p>
          <p className="mt-5">
            2.4. Both referrer and referred person are obligated to follow the
            terms and conditions of the Easy deposit bonus related with current
            “EDB referral links” program.
          </p>
          <p className="mt-5">
            2.5. The SuperForex Company is eligible to set the amount of reward
            for the invited trader at the discretion of the company and
            currently it’s 50% over the first deposit made by the referred
            person for the first account registered with SuperForex for the
            first time, within Easy deposit bonus program.
          </p>
          <p className="mt-5">
            2.6. The referrer is obligated to follow the terms and conditions of
            the Easy deposit bonus granted with reward. As soon as the bonus is
            granted, further disputes related to accrued funds are considered
            according to the terms and conditions of the Easy deposit bonus
            Agreement.
          </p>
          <p className="mt-5">
            2.7. The referrer cannot receive rewards over its own account
            registered by its own referral link.
          </p>
          <p className="mt-5">
            2.8. The referrer is not eligible to receive reward over accounts
            registered by their relatives.
          </p>
          <p className="mt-5">
            2.9. The referrer is obligated to register 3 accounts compatible
            with Easy deposit bonus (ECN Standard-mini USD/EUR/GBP) in the
            client cabinet, with aim to be awarded, otherwise instant award
            crediting isn’t guaranteed.
          </p>
          <p className="mt-5">
            2.10. The Superforex Company isn’t responsible for cases of reward
            losses due to unsuccessful trading with Easy deposit bonus.
          </p>
          <p className="mt-5">
            2.11. The SuperForex Company is eligible to reconsider and change
            terms and conditions of the current agreement without prior
            notifications of the participants.
          </p>
          <p className="mt-5">
            2.12. If referred friend's deposit is less than $2 then the Company
            isn't obligated to make a reward to the referrer for this friends.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            3. Using, withdrawal and cancellation of the reward.
          </h1>
          <p className="mt-5">
            3.1. Reward can only be used together with an Easy deposit bonus.
          </p>
          <p className="mt-5">
            3.2. The procedure for withdrawing funds received with use of
            granted reward is regulated by the terms and conditions of the Easy
            deposit bonus granted on the reward.
          </p>
          <p className="mt-5">
            3.3. The SuperForex Company is eligible to cancel provided reward
            if:
          </p>
          <p className="mt-5">
            3.3.1. A Referrer abused the granted funds or violated the terms and
            conditions of the current agreement;
          </p>
          <p className="mt-5">
            3.3.2. If a referred person violated terms and conditions of the
            User Agreement or requested cancellation of the Easy deposit bonus
            as soon as it’s granted (mistaken request);
          </p>
          <p className="mt-5">
            3.3.3. In case if “EDB referral links program” is over;
          </p>
          <p className="mt-5">
            3.3.4. In other cases stipulated by the basic client agreement.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Page;
