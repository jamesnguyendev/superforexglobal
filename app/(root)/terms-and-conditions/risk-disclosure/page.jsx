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
          <h1 className="text-4xl font-bold">Risk Disclosure</h1>
          <p className="mt-10">
            Trading Leveraged Products such as Forex and Derivatives may not be
            suitable for all investors as they carry a high degree of risk to
            your capital. Please ensure that you fully understand the risks
            involved, taking into account your investments and level of
            experience, before trading, and if necessary, seek independent
            advice. Trading Forex, CFDs, and any financial derivative
            instruments on margin carries a high level of risk and may not be
            suitable for all investors, as you could sustain losses. The Company
            under no circumstances shall be liable to any persons or entity for
            any loss or damage in the whole or part caused by, resulting from,
            or relating to any transactions related to CFDs. Botanica Glow (Pty)
            Ltd. assumes no liability for errors, inaccuracies, or omissions,
            does not warrant the accuracy, completeness of information, text,
            graphics, links, or other items within these materials. Botanica
            Glow (Pty) Ltd. does not offer and does not provide services to
            residents and citizens of certain jurisdictions, including
            Australia, Canada, Japan, Thailand, the United States of America and
            countries sanctioned by the EU.
          </p>
          <p className="mt-5">
            “The Site” shall refer collectively to Superforex.com website and
            its available language versions and domain names.
          </p>
          <p className="mt-5">
            “Client” shall refer to any person or entity who registered an
            account at the Site, or who is using, visiting or otherwise
            accessing the Site.
          </p>
          <p className="mt-5">
            This document is a disclosure by SuperForex, of the potential risks
            involved in trading on financial markets. The document cannot and
            does not disclose all risks and all other considerable aspects
            inherent in trading on financial markets. The client should first
            and foremost be aware of the potential losses related to this
            activity.
          </p>
          <p className="mt-5">
            The client hereby acknowledges, understands and agrees that:
          </p>

          <h1 className="text-2xl font-bold mt-10">
            Trading is highly speculative and risky{" "}
          </h1>
          <p className="mt-5">
            Trading CFDs or any other derivate product is highly speculative,
            involves a high-degree of risk of loss and may not be appropriate
            for all clients, but only for those clients who:
          </p>
          <div className="mt-5">
            <ul className="list-disc ms-8">
              <li>
                understand and are willing to assume the economic, legal and
                other risks and costs involved;
              </li>
              <li>
                have knowledge and experience in trading in derivatives and in
                underlying asset types, as well as enough time to manage their
                investment in an active basis; and
              </li>
              <li>
                are able to assume financial losses significantly in excess of
                margin or deposits as clients may lose the total value of the
                contract not just the margin or the deposit.
              </li>
            </ul>
          </div>
          <p className="mt-5">
            The client is the only responsible person for all the losses
            suffered in his account. Therefore, the client should be prepared
            that he may lose all of his investments. Clients are advised not to
            invest money they cannot afford to lose.
          </p>
          <p className="mt-20 font-bold">
            Through SuperForex clients can trade CFDs on forex (FX), spot
            metals, futures and shares.
          </p>

          <h1 className="text-2xl font-bold mt-10">1. Product description </h1>
          <p className="mt-5">
            A Contract for Difference (CFD) is an agreement to buy or sell a
            contract that reflects the performance of, including among others,
            FX, precious metals, futures and shares; the profit or loss of is
            determined by the difference between the price the CFD is bought at
            and the price the CFD is sold at and vice versa. CFDs are traded on
            margin and no physical delivery of either the CFD or the underlying
            asset is occurring. When buying, for instance, CFDs on shares,
            clients are just speculating on the value of the share to either
            increase or decrease.
          </p>
          <p className="mt-5">
            The types of CFDs include, but are not limited to FX CFDs, Futures
            CFDs, Option CFDs, Share CFDs and Stock Index CFDs.
          </p>
          <p className="mt-5">
            CFDs fluctuate in value during the day. The price fluctuations of
            CFDs depend on a number of factors including but not limited to
            availability access to market information.
          </p>
          <p className="mt-5">
            CFDs are leveraged products. They offer exposure to the markets
            while requiring clients to only put down a small margin (‘deposit’)
            of the total value of the trade. CFDs allow traders to take benefit
            from prices moving up (take ‘long positions’) or prices moving down
            (take ‘short positions’) on underlying assets.
          </p>

          <h1 className="text-2xl font-bold mt-10">2. Performance</h1>
          <p className="mt-5">
            Past performance of CFDs does not constitute a reliable indicator of
            future results.
          </p>

          <h1 className="text-2xl font-bold mt-10">3. Leverage (Gearing)</h1>
          <p className="mt-5">
            When executing trading operations under margin trading conditions,
            even a small market movement may have a great impact on client’s
            trading account due to the effect of leverage (or ‘gearing’ as it is
            also referred to). This means that a relatively small market change
            may lead to a proportionately much larger change in the value of
            client’s position either favourably or unfavourably. Greater
            leverage involves greater risk. The size of leverage therefore
            partly determines the result of the investment.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            4. Major Risks Associated with CFDs Transactions
          </h1>
          <p className="mt-5">
            As CFDs are leveraged products, they carry a higher level of risk to
            client’s capital as compared to other financial products and can
            result in large losses. The value of CFDs may increase or decrease
            depending on the market conditions.
          </p>
          <p className="mt-5">
            The client hereby acknowledges, warrants and agrees that he
            understands these risks, is willing and is able, financially and
            otherwise, to assume the risks of trading CFDs. The client shall
            hold full responsibility for all risks and financial resources used,
            as well as the chosen trading strategy.
          </p>
          <p className="mt-5">
            We recommend maintaining a Margin Level no lower than 1,000%, as
            well as placing Stop Loss orders to limit potential losses.
            SuperForex reserves the right to decrease the leverage depending on
            client’s trading volume.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            5. Off-Exchange Transactions in Derivatives
          </h1>
          <p className="mt-5">
            When clients trade CFDs with SuperForex, clients will be entering
            into an off-exchange (OTC) derivative transaction, by placing their
            orders through the trading platform of SuperForex. These OTC
            transactions could involve greater risk than investing in
            on-exchange derivatives as there is no exchange market on which to
            close out an open position. The client must open and close a
            position with SuperForex that is not transferable to any other
            person. In this case, the client may be exposed to the risk of
            SuperForex default.
          </p>

          <h1 className="text-2xl font-bold mt-10">6. Counterparty Risk</h1>
          <p className="mt-5">
            A counterparty risk refers to the risk of default of one party in a
            particular transaction and its inability to meet its financial
            obligations. SuperForex holds clients’ money in an account that is
            segregated from other clients’ and SuperForex’ money, in compliance
            with current regulations but this may not afford complete
            protection.
          </p>

          <h1 className="text-2xl font-bold mt-10">7. Stop Loss Limit </h1>
          <p className="mt-5">
            Clients understand that there may be cases in which a Stop Loss
            limit is ineffective, for example, where there are rapid price
            movements or market closure, and Stop Loss limits cannot always
            prevent clients from losses.
          </p>

          <h1 className="text-2xl font-bold mt-10">8. Liquidity Risk </h1>
          <p className="mt-5">
            Clients should take into consideration that some financial
            instruments may not become immediately liquid due, for example, to
            reduced demand and clients may not be able to trade them quickly
            enough to prevent a possible loss, or to easily obtain information
            on the value of these financial instruments or the extent of the
            associated risks.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            9. Execution Risk and Underlying Market Volatility{" "}
          </h1>
          <p className="mt-5">
            CFDs and other financial derivative products are instruments that
            allow clients to trade on price movements in underlying
            instruments/markets. Although we offer our own prices at which
            clients trade CFDs, SuperForex’ prices are derived based on the
            underlying instruments/markets.
          </p>
          <p className="mt-5">
            Clients should understand and take into consideration that the
            fluctuation of the underlying instrument may have effect on the
            value of the derivative product and can affect client profitability.
          </p>
          <p className="mt-5">
            Under certain circumstances clients’ trades may not take place
            immediately. Clients should be aware of “gapping” (time lag) where
            such events can result in a significant profit or loss on their
            accounts. Such “gapping” may occur when the underlying instrument/
            market is open and when it is closed, or if there is a time lag
            between the moment the client places its order and the moment the
            order is carried out. During this period, the market conditions
            might have moved unfavourably for the client. That is, the order is
            not carried out at the requested price.
          </p>

          <h1 className="text-xl font-bold mt-10">9.1. Technical Risk </h1>
          <p className="mt-5">
            9.1.1. Clients shall assume the risk of financial loss caused by the
            failure of information, communication, electronic and other systems.
          </p>
          <p className="mt-5">
            9.1.2. When executing trading operations through the Site, the
            client shall assume the risk of financial loss or damage from any
            cause or fault whatsoever, including but not limited to the failure
            of hardware and software (Servers/ Internet), improper functioning
            and operation of client’s equipment, delayed client terminal
            updates, wrong settings in client’s terminal, client’s ignorance of
            the applicable rules described in the MetaTrader User Guide. The
            result of any such failure may be that client’s orders are either
            not executed or are not executed according to his instructions.
          </p>
          <p className="mt-5">
            SuperForex does not accept any liability in the case of such a
            failure. The use of wireless or dial-up connection or any other form
            of unstable connection at the client’s end, may result in poor or
            interrupted connectivity or lack of signal strength causing delays
            in the data transmission between us and the client when using
            SuperForex’ Electronic Trading Platform. The delay may cause sending
            to SuperForex orders that are out of date (at old prices).
          </p>

          <h1 className="text-xl font-bold mt-10">9.2. Communication </h1>
          <p className="mt-5">
            We bear no responsibility for any loss that arises as a result of
            delayed or un-received communication sent to clients by SuperForex.
          </p>
          <p className="mt-5">
            In addition, we bear no responsibility for any loss that arises as a
            result of unencrypted information sent to clients by SuperForex that
            has been accessed via unauthorised means.
          </p>
          <p className="mt-5">
            We bear no responsibility for any un-received or unread internal
            messages sent to clients through the trading platform.
          </p>
          <p className="mt-5">
            The client is solely responsible for the privacy of any information
            contained within the communication received by SuperForex.
          </p>
          <p className="mt-5">
            Additionally, the client accepts that any loss that arises as a
            result of unauthorised access of a third party to his trading
            account is not the responsibility of SuperForex.
          </p>

          <h1 className="text-xl font-bold mt-10">
            9.3. Force Majeure Events{" "}
          </h1>
          <p className="mt-5">
            In case of a Force Majeure event the client shall accept any loss
            arising.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            10. Costs and Other Considerations{" "}
          </h1>
          <p className="mt-5">
            All applicable costs, commissions and fees will be provided to
            clients by SuperForex or published on the Site. Clients should be
            aware of such costs, commissions and fees that may be charged and
            influence the account profitability of the client. All such costs,
            commissions and fees may be complex to calculate and may be more
            significant than the gross profits from a trade.
          </p>
          <p className="mt-5">
            Not all costs are represented in monetary terms (for instance, costs
            may appear as a percentage of the value of a CFD). SuperForex
            reserves the right to change, from time to time, any of the costs
            applicable to trading CFDs and clients understand and agree that the
            most up-to-date information in relation to costs is available online
            at the Site.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            11. Swap Values and Charges{" "}
          </h1>
          <p className="mt-5">
            A swap is the interest added or deducted for holding a position open
            overnight. Depending on the position held and the interest rates of
            the currency pair involved in the transaction a client’s trading
            account may either be credited or debited, accordingly. Clients’
            trading accounts are reconciled every day at 23:59:31 (our server
            time) and the resulting amount shall be automatically converted into
            the currency that client’s trading account is denominated in.
          </p>
          <p className="mt-5">
            SuperForex reserves the right to change the level of the swap rate
            on each financial instrument at any time and clients understand and
            acknowledge that they shall stay informed about that through the
            Site. Clients further agree that they will stay informed of the
            applicable swap value by regularly checking the Site. In addition,
            clients are responsible for checking the applicable swap value prior
            to placing an instruction for trading.
          </p>

          <h1 className="text-2xl font-bold mt-10">12. Taxation </h1>
          <p className="mt-5">
            Although investing in CFDs does not involve taking physical delivery
            of the underlying financial instrument independent tax advice should
            be sought, if necessary, to establish whether the client is subject
            to any tax, including stamp duty. It is client’s sole responsibility
            to obtain such information and comply with it accordingly.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            13. Client’s Acknowledgement and Consent
          </h1>
          <p className="mt-5">
            The client hereby acknowledges and declares that he has read,
            understood and accepts without any reservation all the information
            herein including without limitation the following:
          </p>
          <p className="mt-5">
            Financial instruments in foreign markets could involve risks
            different from the usual risks in the market at the client’s country
            of residence. The prospect of profit or loss from transactions in
            foreign markets is also influenced by fluctuations of the exchange
            rate.
          </p>
          <p className="mt-5">
            When a financial instrument is negotiated in a currency other than
            the currency of the client’s country of residence, any changes in an
            exchange rate may affect in a negative way the value, price and
            performance of the financial instrument.
          </p>
          <p className="mt-5">
            The value of a financial instrument may decrease and the client may
            receive less money than invested or the value of the financial
            instrument may be highly fluctuating. There is a possibility that
            client’s investment become of no value.
          </p>
          <p className="mt-5">
            Should you require any additional information about the Risk
            Disclosure of SuperForex, please contact us at
            <span className="ms-2 underline text-primary font-bold hover:text-default">
              support@superforex.com
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Page;
