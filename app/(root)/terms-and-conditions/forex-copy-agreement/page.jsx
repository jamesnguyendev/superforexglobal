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
          <h1 className="text-4xl font-bold">Forex Copy Agreement</h1>
          <p className="mt-10">
            The Forex Copy service is available for all clients who have already
            opened a standard account and have made a deposit of at least $50.
          </p>
          <p className="mt-5">
            Each Master can have an unlimited number of followers.
          </p>
          <p className="mt-5">
            Followers can also be subscribed to an unlimited number of master
            accounts.
          </p>
          <p className="mt-5">
            The Forex Copy service is compatible with all bonus programs except
            the No Deposit and the Easy Deposit bonuses.
          </p>
          <p className="mt-5">
            Daily subscription means subscription on a daily basis.
          </p>
          <p className="mt-5">
            Commission will be counted every day in case of trading activity.
          </p>
          <p className="mt-5">
            A “Profit share subscription” means a percentage of the profit.
          </p>
          <p className="mt-5">
            This type of commission depends on the amount of profit and should
            be payed by the follower to the Master for the copied positive deal.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            The following clauses apply to users who act as Masters:
          </h1>
          <p className="mt-5">
            Upon registration the Master must specify both the amount of the
            daily commission which followers have to pay to copy his/her deals
            and the profit share - a percentage which followers should pay for
            the profit earned over the copied deal.
          </p>
          <p className="mt-5">
            Upon registration the Master must specify both the amount of the
            daily commission which followers have to pay to copy his/her deals
            and the profit share - a percentage which followers should pay for
            the profit earned over the copied deal.
          </p>
          <p className="mt-5">
            The Master cannot get both daily commission and a percentage over
            the copied deal (profit share) simultaneously per account, but both
            must be specified upon registration.
          </p>
          <p className="mt-5">
            One client can register an unlimited number of Master accounts but
            cannot be registered as a follower and a master simultaneously.
          </p>
          <p className="mt-5">
            The commission earned is credited to the Master account once a week
            on Sunday.
          </p>
          <p className="mt-5">
            The commission received from the subscribed accounts is a part of
            the Master’s profit which can be used in trading and can be
            withdrawn without limitations as real funds.
          </p>
          <p className="mt-5">
            If the Master doesn’t have any active deals in over 24 hours the
            daily commission will stop for the Master account until the moment
            when a new deal is opened.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            The following clauses apply to users who act as Followers:
          </h1>
          <p className="mt-5">
            The Forex Copy service is available for all clients who have already
            opened a standard account and have made a deposit of at least $50.
          </p>
          <p className="mt-5">
            Upon subscription to a Master, the follower must choose a type of
            subscription: either on a daily basis (paying daily for copying the
            Master’s deals) or based on the profit share (paying for every
            copied profitable deal).
          </p>
          <p className="mt-5">
            One client can register an unlimited number of Followers accounts
            and can be subscribed to an unlimited number of Masters but cannot
            be registered as a Follower and a Master simultaneously.
          </p>
          <p className="mt-5">
            Followers do not pay both daily and profit share. They choose which
            one of the two types of payments they prefer upon subscription.
          </p>
          <p className="mt-5">
            Followers do not pay daily commission if the Master does not have
            any active deals in over 24 hours.
          </p>
          <p className="mt-5">
            If a follower decides to close a copied deal with some profit
            himself, even if on the Master’s account the deal is still open, a
            profit share percentage will still be paid based on the fixed
            trading result.
          </p>
          <p className="mt-5">
            Superforex reserves its right to cancel the trading results of the
            copied deals if the Master made them in violation of the User
            Agreement. In such cases the commission paid for the cancelled deals
            will be returned back to the follower within one business day since
            the moment of cancellation.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            Superforex reserves its right to cancel the registration in the
            Forex Copy for a Master in the following cases:
          </h1>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>
                Based on the Master’s own request - within three (3) business
                days.
              </li>
              <li>In case of a systematic violation of the User Agreement.</li>
              <li>
                In case the Master abuses the Forex Copy service by registering
                as followers their own accounts and those owned by the Master’s
                close relatives.
              </li>
              <li>
                In case of active usage of limited strategies such as hedging
                and scalping.
              </li>
              <li>
                In case the Master’s account balance has been less than $50
                during the last 60 days.
              </li>
              <li>
                If the Master doesn’t trade on their account for more than 60
                days.
              </li>
            </ul>
          </p>
          <p className="mt-5">
            Superforex has a right to correct the received commission by
            deducting commission received for cancelled orders due to a
            violation of the User Agreement.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            Superforex has a right to cancel the registration in the Forex Copy
            service for a Follower in the following cases:
          </h1>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>
                Based on the Follower’s own request - within one (1) business
                day.
              </li>
              <li>In case of a systematic violation of the User Agreement.</li>
              <li>
                In case the Follower abuses the Forex Copy service by
                registering as Master’s accounts their own accounts and those
                owned by the Follower’s close relatives.
              </li>
              <li>
                In case the Follower’s account balance has been less than $50
                during the last 60 days.
              </li>
            </ul>
          </p>

          <h1 className="text-2xl font-bold mt-10">
            Subscription to a Master can be cancelled if:
          </h1>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>
                The Master has decided to cancel their registration in the Forex
                Copy service;
              </li>
              <li>
                The Company has decided to cancel the Master’s registration in
                the Forex Copy service.
              </li>
            </ul>
          </p>
          <p className="mt-5">
            Superforex is also entitled to block further registration in the
            Forex Copy service with other clients’ accounts in case of further
            systematic violations of the User Agreement and abuse of the Forex
            Copy service.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Page;
