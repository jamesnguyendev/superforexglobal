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
          <h1 className="text-4xl font-bold">Account Packages</h1>
          <p className="my-10">
            Special packages are a unique offer on the Forex market for our new
            clients, which allows you to get a full set of accounts ready for
            active trading immediately after the first deposit. Each package was
            made for our traders, with the involvement of leading experts in the
            field of trading and taking into account the wishes of clients.
            After a period of extensive testing and preparation, Superforex has
            accommodated the maximum of opportunities and bonuses in one set of
            accounts, with a minimum deposit, and all this in one package of
            accounts - to ensure your unlimited opportunities on the Forex
            market.
          </p>

          <h1 className="text-2xl font-bold">
            Chapter 1. General conditions, terminology.
          </h1>
          <p className="mt-5">
            1.1. Special account packages are sets of services provided to the
            trader after registration and a specified deposit.
          </p>
          <p className="mt-5">
            1.2. Each package has its own fixed set of accounts. It is not
            possible to change the set of accounts selected during registration.
          </p>
          <p className="mt-5">
            1.3. The rules for the withdrawal of funds are regulated by the
            general Terms and Conditions of the Client Agreement or Bonus
            Agreement.
          </p>
          <p className="mt-5">
            1.4. All accounts provided within account packages are swap-free,
            but there may be exceptions, depending on the region.
          </p>
          <p className="mt-5">
            1.5. Package of services are not renewable: subsequent deposits are
            not considered as payment for the package of services and relate
            only to every particular account. Clients can continue to use the
            accounts at their own discretion.
          </p>
          <p className="mt-5">
            1.6. The list of instruments available for trading, spreads, and
            commissions are regulated by the settings of accounts provided
            within the service package.
          </p>

          <h1 className="text-2xl font-bold my-10">
            Chapter 2. Rights and obligations.
          </h1>
          <p className="mt-5">
            2.1. SuperForex (further referred to as ‘the Company’) undertakes to
            provide the customer the selected account package (‘service
            package’). Each package contains 3 trading accounts and a fixed
            number of bonuses as part of the package of services and provides a
            certain number of trading lots with reduced spreads, in accordance
            with the selected account package.
          </p>
          <p className="mt-5">
            2.2. The first deposit made to the account is distributed among all
            accounts within the service package. Subsequent deposits are
            credited to each account separately, according to the customer's
            choice.
          </p>
          <p className="mt-5">
            2.3. Bonuses provided within the service package are valid in
            accordance with the bonus terms. If the bonus accrual contradicts
            the rules of its provision, the Company undertakes to replace it
            with another bonus, at the Company's discretion.
          </p>
          <p className="mt-5">
            2.4. The Company reserves the right to change the terms and
            conditions of account packages without prior notice to the client.
          </p>
          <p className="mt-5">
            2.5. The Company has the right to limit or cancel some of the
            services, such as bonuses or the number of trading lots with reduced
            spreads, in case it detects an abuse of the Company's services or
            use of prohibited trading strategies.
          </p>
          <p className="mt-5">
            2.6. After opening the service package, the Client undertakes to
            make a deposit in accordance with the selected service package.
          </p>
          <p className="mt-5">
            2.7. Clients have the right to request the cancellation of bonuses
            provided within service packages or transfer funds between accounts
            at their discretion.
          </p>
          <p className="mt-5">
            2.8. Changing the service package by deleting or adding trading
            accounts is not possible. However, clients have the right to open
            new accounts outside of the service package, in an unlimited number,
            or to claim new service packages.
          </p>
          <p className="mt-5">
            2.9. Other rights and obligations are regulated by the general
            Client agreement.
          </p>

          <h1 className="text-2xl font-bold my-10">
            Account package “Learner”
          </h1>
          <p className="mt-5">
            1. Within the Learner account package the Client receives:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>3 trading accounts:</li>
              <ul className="list-disc ms-8">
                <li>
                  1 Microcent account with a leverage of 1:1000.
                  <br />
                  Currency: USD or EUR, depending on the region;
                </li>
                <li>
                  1 Microcent account with a leverage of 1:1000.
                  <br />
                  Currency: USD or EUR, depending on the region;
                </li>
                <li>
                  1 Standard STP account with a leverage of 1:100.
                  <br />
                  Currency: USD, EUR, or GBP, depending on the region;
                </li>
                <li>
                  1 Standard STP account with a leverage of 1:1000.
                  <br />
                  Currency: depending on the region.
                </li>
              </ul>
              <li>
                10 micro lots with decreased spread for the currency pairs in
                the group Basic 1, including the EUR/USD with a spread of 0.5
                pips;
              </li>
              <li>1 Easy Deposit Bonus (based on the Standard STP account);</li>
              <li>2 * 120% Hot Bonuses.</li>
            </ul>
          </p>
          <p className="mt-5">
            2. The first deposit shouldn’t be less than 25 USD/EUR/GBP,
            depending on the region. This deposit is distributed between the
            three accounts in the following manner:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>
                The account with an Easy Deposit Bonus receives 5 USD/EUR/GBP as
                a deposit. In total, the funds become 55 USD/EUR/GBP, including
                the bonus;
              </li>
              <li>
                The Microcent account will have 1000 USD/EUR cents. In total,
                the account balance becomes 2200 USD/EUR Cents, including the
                bonus;
              </li>
              <li>
                The Standard STP account will receive the equivalent to 10 USD.
              </li>
            </ul>
          </p>
          <p className="mt-5">
            2.1. If the first deposit is less than 25 USD/EUR/GBP, the service
            package will not be provided. This deposit remains on the initial
            account. Clients can get the service package with a second deposit
            in this case.
          </p>
          <p className="mt-5">
            2.2. If the first deposit is more than 25 USD/EUR/GBP, the service
            package will be provided. The amount exceeding the default required
            deposit set according to the terms and conditions of the package
            will remain on the Standard STP account.
          </p>

          <h1 className="text-2xl font-bold my-10">Account package “Trader”</h1>
          <p className="mt-5">
            1. Within the Trader account package the client receives:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>3 trading accounts:</li>
              <ul className="list-disc ms-8">
                <li>
                  1 ECN Standard mini account with a leverage of 1:1000.
                  <br />
                  Currency: USD/EUR/GBP, depending on the region;
                </li>
                <li>
                  1 Standard STP account with a leverage of 1:100.
                  <br />
                  Currency: USD/EUR/GBP, depending on the region;
                </li>
                <li>
                  1 Standard STP account with a leverage of 1:1000.
                  <br />
                  The currency will be set depending on the region;
                </li>
              </ul>
              <li>
                10 mini lots with decreased spread for the currency pairs in the
                group Basic 1, including the EUR/USD with an average spread of
                1.0 pip (based on the ECN Standard Mini account)
              </li>
              <li>
                1 Easy Deposit Bonus (on the basis of the Standard STP account)
              </li>
              <li>2 * 120% HOT bonuses</li>
              <li>5 + 2 days of the deposit protection.</li>
            </ul>
          </p>
          <p className="mt-5">
            2. The first deposit shouldn’t be less than 125 USD/EUR/GBP,
            depending on the region. This deposit is distributed in the
            following manner:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>
                The account with an Easy Deposit Bonus receives 25 USD/EUR/GBP.{" "}
              </li>
              <li>
                In total, the account balance becomes 525 USD/EUR/GBP, including
                the bonus;
              </li>
              <li>50 USD/EUR/GBP goes to the ECN Standard Mini account.</li>
              <li>
                In total, the account balance becomes 110 USD/EUR/GBP, including
                the bonus;
              </li>
              <li>
                The equivalent to 50 USD goes for the Standard STP account, as
                would any remaining bonus funds.
              </li>
            </ul>
          </p>
          <p className="mt-5">
            2.1. If the first deposit is less than 125 USD/EUR/GBP, the service
            package will not be provided. This deposit remains on the initial
            account. Clients can get the service package with a second deposit
            in this case.
          </p>
          <p className="mt-5">
            2.2. If the first deposit is more than 125 USD/EUR/GBP, the service
            package will be provided. The amount exceeding the default required
            deposit set according to the terms and conditions of the package
            will remain on the Standard STP account.
          </p>

          <h1 className="text-2xl font-bold my-10">Account package “Pro”</h1>
          <p className="mt-5">
            1. Within the Pro account package the client receives:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>3 trading accounts:</li>
              <ul className="list-disc ms-8">
                <li>
                  1 ECN Standard account with a leverage of 1:1000.
                  <br />
                  Currency: USD/EUR/GBP, depending on the region;
                </li>
                <li>
                  1 No Spread account with a leverage of 1:200.
                  <br />
                  Currency: USD or EUR, depending on the region;
                </li>
                <li>
                  1 Standard STP account with a leverage of 1:1000.
                  <br />
                  The currency will be set depending on the region.
                </li>
              </ul>
              <li>
                10 Standard lots with decreased spread for the currency pairs in
                the group Basic 1, including the EUR/USD with an average spread
                of 1.0 pip (based on the ECN Standard account);
              </li>
              <li>2 * 202% HOT bonuses;</li>
              <li>1 * 40% Welcome bonus on every next deposit;</li>
              <li>10 + 2 days of deposit protection.</li>
            </ul>
          </p>
          <p className="mt-5">
            The first deposit by default shouldn’t be less than 550 USD/EUR/GBP
            depending on the region. This deposit is distributed in the
            following manner:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>
                The Standard ECN account receives 220 USD/EUR/GBP. The total
                balance becomes 664 USD/EUR/GBP, including bonus funds;
              </li>
              <li>
                The No spread account receives 220 USD/EUR/GBP. The total
                balance becomes 664 USD/EUR/GBP, including bonus funds;
              </li>
              <li>
                The equivalent to 110 USD is sent to the Standard STP account,
                as are any remaining bonus funds.
              </li>
            </ul>
          </p>
          <p className="mt-5">
            2.1. If the first deposit is less than 550 USD/EUR/GBP, the service
            package will not be provided. This deposit remains on the initial
            account. Clients can get the service package with a second deposit
            in this case.
          </p>
          <p className="mt-5">
            2.2. If the first deposit is more than 550 USD/EUR/GBP, the service
            package will be provided. The amount exceeding the default required
            deposit set according to the terms and conditions of the package
            will remain on the Standard STP account.
          </p>

          <h1 className="text-2xl font-bold my-10">
            Account package “Investor”
          </h1>
          <p className="mt-5">
            1. Within the Investor account package the client receives:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>3 trading accounts:</li>
              <ul className="list-disc ms-8">
                <li>
                  1 ECN Standard account with a leverage of 1:500.
                  <br />
                  Currency: USD/EUR/GBP, depending on the region;
                </li>
                <li>
                  1 Crypto account with a leverage of 1:1000.
                  <br />
                  Currency: USD;
                </li>
                <li>
                  1 Profi-STP account with a leverage of 1:500.
                  <br />
                  Currency: USD/EUR/GBP/ZAR, depending on the region;
                </li>
              </ul>
              <li>
                15 standard lots with decreased spread in the group Basic 1,
                including the EUR/USD with an average spread of 1.0 pip (based
                on the ECN standard account);
              </li>
              <li>3 * 40% Welcome bonuses on every next deposit;</li>
              <li>
                3 * 20% Dynamic bonuses on every next deposit (the percentage
                can be changed depending on the amount of the deposit);
              </li>
              <li>14 + 6 days of deposit protection.</li>
            </ul>
          </p>
          <p className="mt-5">
            2. The first deposit by default shouldn’t be less than 1500
            USD/EUR/GBP, depending on the region. This deposit is distributed in
            the following manner:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>
                The equivalent to 500 USD goes to the Profi-STP account. The
                balance on this account will be 800 USD in total.
              </li>
              <li>
                500 USD/EUR/GBP (depending on the region) goes to the ECN
                Standard account. In total, the balance on this account will be
                800 USD/EUR/GBP;
              </li>
              <li>
                The remaining 500 USD go to the Crypto account. The total
                balance for that account will be 800 USD.
              </li>
            </ul>
          </p>
          <p className="mt-5">
            2.1. If the first deposit is less than 1500 USD/EUR/GBP, the service
            package will not be provided. This deposit remains on the initial
            account. Clients can get the service package with a second deposit
            in this case.
          </p>
          <p className="mt-5">
            2.2. If the first deposit is more than 1500 USD/EUR/GBP, the service
            package will be provided. The amount exceeding the default required
            deposit set according to the terms and conditions of the package
            will remain on the Profi-STP account.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Page;
