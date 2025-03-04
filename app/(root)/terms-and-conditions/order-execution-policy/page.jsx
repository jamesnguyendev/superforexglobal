import React from "react";
import SideBarPolicy from "../../../components/SideBarPolicy";
import { Container } from "@mui/system";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Link from "next/link";

const Page = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-28 text-default max-lg:px-7">
        <div className="max-lg:order-2 lg:border-r lg:border-dashed pe-5 max-lg:pt-8">
          <SideBarPolicy />
        </div>
        <div className="lg:col-span-2 lg:ps-7">
          <h1 className="text-4xl font-bold">Order Execution Policy</h1>

          <h1 className="text-2xl font-bold mt-10">1. Introduction</h1>
          <p className="mt-5">
            Superfin Corp., operating under the trading name SuperForex, having
            its registered address at Second Floor No 24, Albert Hoy Avenue,
            Belize City, Belize. , registration number 137723, hereinafter
            collectively referred to as “SuperForex”, we”, or “us”, is
            authorised and regulated by International Financial Services
            Commission (IFSC).
          </p>
          <p className="mt-5">
            “The Site” shall refer collectively to superforex.com website and
            its available language versions and domain names.
          </p>
          <p className="mt-5">
            “Client” shall refer to any person or entity who registered an
            account at the Site.
          </p>
          <p className="mt-5">
            SuperForex has established its Order Execution Policy (hereinafter
            referred to as the “Policy”) in order to take all reasonable steps
            to achieve the best possible results for its clients (“Best
            Execution”) either when executing client orders or receiving and
            transmitting orders for execution in relation to financial
            instruments.
          </p>
          <p className="mt-5">
            SuperForex shall apply the Policy upon acceptance of an order and
            also when a client gives no specific instruction on the method of
            execution. Nevertheless, when the client gives a specific
            instruction on an order, SuperForex will execute the order following
            such instruction. If SuperForex receives a specific instruction on
            an order, this may prevent SuperForex from implementing the Policy
            to achieve the best possible result for the execution of the order.
          </p>

          <h1 className="text-2xl font-bold mt-10">2. Scope and Services</h1>
          <p className="mt-5">
            The Policy shall apply whenever SuperForex executes an order on
            behalf of its clients. SuperForex will always act as principal
            (counterparty) when executing orders by clients. Although SuperForex
            takes every reasonable step to achieve the best possible result for
            its clients, we cannot guarantee that when executing a transaction
            the client’s price will be more favourable than one which might be
            available elsewhere.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            3. Order Execution Factors
          </h1>
          <p className="mt-5">
            SuperForex shall take all reasonable steps to achieve the best
            possible result for its clients taking into account the following
            factors when executing clients’ orders against SuperForex’ quoted
            prices:
          </p>

          <h1 className="text-xl font-bold mt-10">3.1. Price</h1>
          <p className="mt-5">
            SuperForex produces its own tradable prices from information
            obtained from third party external sources (such as banks, etc.)
            that generally provide liquidity to the global market.
          </p>
          <p className="mt-5">
            For any given Financial Instrument SuperForex will quote two prices:
            the higher price (ASK) at which the client can buy (go long) that
            Financial Instrument, and the lower price (BID) at which the client
            can sell (go short) that Financial Instrument; The difference
            between the lower and the higher price of a given Financial
            Instrument is the SPREAD.
          </p>
          <p className="mt-5">
            SuperForex will ensure that the client is given the best execution
            by ensuring that the calculation of the bid /ask spread is made with
            reference to a selection of underlying price providers and data
            sources.
          </p>
          <p className="mt-5">
            SuperForex updates its prices as frequently as the limitations of
            technology and communication links allow. SuperForex reviews the
            independent third party external SuperForex Order Execution Policy
            reference sources it uses at least once a year, to ensure that the
            pricing it offers continue to be correct and competitive.
          </p>
          <p className="mt-5">
            SuperForex will not quote any price outside its operations time (see
            Execution Venue(s) below) therefore no orders can be placed by the
            client during that time.
          </p>

          <h1 className="text-xl font-bold mt-10">3.2. Costs</h1>
          <p className="mt-5">
            For opening a position in some types of Financial Instruments
            clients may be required to pay a financing fee or a commission that
            may be charged in the form of a percentage of the overall value of
            the trade or as a fixed amount.
          </p>
          <p className="mt-5">
            We make every effort to ensure that clients are informed of such
            costs before they chose to trade. We further ensure that there are
            not any unknown to the client variables in place.
          </p>
          <p className="mt-5">
            For all types of Financial Instruments we offer, the commission and
            financing fees are not incorporated into SuperForex’ quoted price
            and are charged explicitly to the client account.
          </p>

          <h1 className="text-xl font-bold mt-10">3.3. Speed of Execution</h1>
          <p className="mt-5">
            Prices change in the course of time and the frequency of the change
            depends on the different financial instruments and market
            conditions.
          </p>
          <p className="mt-5">
            SuperForex is committed to providing the highest possible speed of
            execution within the limitations of technology and communication
            links.
          </p>
          <p className="mt-5">
            SuperForex acts as principal and not as agent on the client’s
            behalf. Therefore, SuperForex is the sole Execution Venue for the
            execution of clients’ orders for the Financial Instruments provided
            by SuperForex.
          </p>
          <p className="mt-5">
            In case clients undertake transactions on an electronic system, they
            may be exposed to risks in relation to the system, including but not
            limited to the failure of hardware and software (Servers/Internet).
            The result of any system failure may be that clients’ orders are
            either not executed or are not executed according to their
            instructions.
          </p>
          <p className="mt-5">
            SuperForex does not accept any liability in the case of such a
            failure. The use of wireless or dial-up connection or any other form
            of unstable connection at the client’s end, may result in poor or
            interrupted connectivity or lack of signal strength causing delays
            in the data transmission between the us and the client when using
            SuperForex’ Electronic Trading Platform. The delay may cause sending
            to SuperForex orders that are out of date (on old prices). In this
            case SuperForex will update the price and execute the order at the
            market price available.
          </p>

          <h1 className="text-xl font-bold mt-10">3.4. Nature of the Order</h1>
          <p className="mt-5">
            The type of the order can affect its execution. Below are given the
            different types of orders that client can place with us:
          </p>
          <p className="mt-5">
            3.4.1. Market order (also “Instant order”) - an order to buy or sell
            at the price available at a given time. The order will usually be
            filled at the price the client sees on SuperForex’ trading platform
            screen. There may be cases that the price will be different: if the
            market has moved while the client is placing his order, the price
            will differ. The client may place a Stop Loss to limit his loss or a
            Take Profit to limit his profit.
          </p>
          <p className="mt-5">
            3.4.2. Pending order - clients are allowed to buy and sell a
            financial instrument at a predefined price in the future, i.e. place
            the order at the best available price once a given price is reached.
            We offer are four types of pending orders available in SuperForex’
            trading platform: SuperForex Order Execution Policy
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>Buy Limit</li>
              <li>Buy Stop</li>
              <li>Sell Limit</li>
              <li>Sell Stop</li>
            </ul>
          </p>
          <p className="mt-5">
            Clients may also attach a Stop Loss and/or Take Profit on pending
            orders.
          </p>
          <p className="mt-5">
            3.4.3. Trailing order – to close a position, clients may use the
            following orders:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>
                Stop Loss - the order closes a position at a price less
                profitable for the client as compared to the current price when
                making the order
              </li>
              <li>
                Take Profit – the order closes a position at a price more
                profitable for the client as compared to the price when making
                the order.
              </li>
            </ul>
          </p>

          <h1 className="text-xl font-bold mt-10">3.5. Size of the Order</h1>
          <p className="mt-5">
            All orders are placed in lot sizes. A lot is a unit measuring the
            transaction amount and it is different per each financial
            instrument. Details of the lot sizes are available on the Site.
          </p>
          <p className="mt-5">
            If the client wishes to execute a large size order, in some cases
            the price may become less favourable considering the liquidity in
            the market. SuperForex reserves the right not to accept a client’s
            order, in case the size of the order is large and cannot be filled
            by SuperForex.
          </p>

          <h1 className="text-xl font-bold mt-10">
            3.6. Likelihood of Execution
          </h1>
          <p className="mt-5">
            SuperForex strives to provide its clients with the fastest execution
            reasonably possible. We execute clients’ orders at the requested
            price. However, there may be trading conditions causing orders not
            be filled at the requested price but at the best available price.
            This may occur, for example, during periods of volatile market
            conditions; when trading session starts or on possible gaps where
            the underlying financial instruments have been restricted or
            suspended on a particular market.
          </p>
          <p className="mt-5">
            Although SuperForex executes all orders placed by the client, it
            reserves the right to decline an order of any type or execute the
            order at the first available market price.
          </p>
          <p className="mt-5">
            SuperForex reserves the right to modify its spread. The client may
            experience widened spreads and execution at the best available price
            considering the current market conditions.
          </p>
          <p className="mt-5">
            In the case of any technical communication failure, as well as any
            incorrect reflection on the quotes feed, SuperForex may at its sole
            discretion not execute a certain order or change the opening and/or
            closing price of the order.
          </p>

          <h1 className="text-xl font-bold mt-10">3.7. Market Impact</h1>
          <p className="mt-5">
            Some factors may affect the price of the underlying financial
            instruments from which the price, quoted by SuperForex, is derived.
            These factors may influence the criteria that SuperForex takes into
            consideration in order to ensure the best possible result for its
            clients. Clients hereby fully and irrevocably accept all risks
            related to the formation of the SuperForex’ price, including without
            limitation unfavourable changes in the market conditions, and
            acknowledge that SuperForex has taken all reasonable steps to ensure
            the best possible result for its clients under the current
            circumstances.
          </p>

          <h1 className="text-xl font-bold mt-10">
            3.8. Best Execution Criteria
          </h1>
          <p className="mt-5">
            SuperForex will generally consider the following best execution
            criteria for determining the relative importance of the execution
            factors:
          </p>
          <p className="mt-5">
            <ul className="list-disc ms-8">
              <li>the kind of the order</li>
              <li>the record of the client with SuperForex</li>
              <li>the specifics of the execution venue</li>
              <li>
                the specifics of the financial instruments that are the subject
                of the order
              </li>
            </ul>
          </p>
          <p className="mt-5">
            The best possible result shall be determined in terms of the total
            consideration (unless the objective of the order execution dictates
            otherwise), representing the price of the financial instrument and
            the costs directly or indirectly related to the execution of the
            order, including execution venue fees, clearing and settlement fees
            and any other fees paid to third parties involved in the execution
            of the order (if applicable).
          </p>
          <p className="mt-5">
            Other factors that may affect the execution of an order include
            without limitation speed, likelihood of execution, order size, order
            nature.
          </p>

          <h1 className="text-2xl font-bold mt-10">4. Specific Instructions</h1>
          <p className="mt-5">
            If the client gives a specific instruction to SuperForex as to how
            to carry out an order and SuperForex has accepted this instruction,
            SuperForex shall arrange – to the extent possible – for the
            execution of the client order strictly in accordance with the given
            instruction.
          </p>
          <p className="mt-5">
            However, the specific instruction may prevent SuperForex from taking
            the steps in this Policy to achieve the best possible result for the
            client.
          </p>
          <p className="mt-5">
            Certain trading conditions may prevent SuperForex from strictly
            following the client's instructions. This may result in being unable
            to apply this Policy.
          </p>

          <h1 className="text-2xl font-bold mt-10">5. Execution Venue(s)</h1>
          <p className="mt-5">
            Execution venues are the entities with which the orders are placed
            or to which SuperForex transmits orders for execution. SuperForex
            will enter into all transactions with the client as principal
            (counterparty) and act as the sole execution venue for all client
            orders. The client shall open and close a position of any particular
            financial instrument with SuperForex through its trading platform.
          </p>
          <p className="mt-5">
            Provided that there is only one possible venue, best execution is
            achieved by execution on that venue. Clients note that best
            execution is a process, which considers a variety of factors, not an
            outcome. When SuperForex is carrying out a client’s order,
            SuperForex shall execute the order following its execution policy,
            however SuperForex does not guarantee that the exact requested price
            will be obtained at all times and, in any event, the factors may
            lead to a different result in a particular transaction.
          </p>
          <p className="mt-5">
            The client hereby fully and irrevocably accept that all transactions
            entered in any particular financial instrument with SuperForex are
            executed outside a regulated market or a multi-lateral trading
            facility (MTF) and the client is exposed to a greater risk of a
            possible default of the counterparty (i.e. SuperForex).
          </p>

          <h1 className="text-2xl font-bold mt-10">6. Monitoring and Review</h1>
          <p className="mt-5">
            SuperForex shall monitor on a regular basis the effectiveness of its
            order execution arrangements and execution policy to deliver the
            most favourable result to its clients and to identify and correct
            any errors or problems that may occur. SuperForex reserves the right
            to correct any deficiencies in this Policy and to make improvement
            to its relevant execution arrangements wherever deemed necessary by
            SuperForex.
          </p>
          <p className="mt-5">
            It should be noted that SuperForex will not notify clients
            separately of changes, other than substantial material changes (a
            substantial material change may include a change of execution
            venues, considerable delay in carrying out orders, etc.) to the
            Policy and clients should refer to the Site for the most up-to-date
            version of the Policy.
          </p>

          <h1 className="text-2xl font-bold mt-10">7. Client Consent</h1>
          <p className="mt-5">
            The Policy is made available to every existing or potential client
            of SuperForex. When establishing a business relationship with the
            client, SuperForex is required to obtain the client’s prior consent
            to this Policy. Additionally, SuperForex is required to obtain the
            client’s prior consent before executing client’s orders or receiving
            and transmitting orders to carry out outside a regulated market or a
            multi-lateral trading facility (MTF). The client is informed and
            acknowledges that SuperForex always acts as principal (counterparty)
            and is the sole execution venue, which is not a regulated market or
            a multi-lateral trading facility (MTF).
          </p>
          <p className="mt-5">
            By entering into the Public Offer Agreement with SuperForex for
            providing services of conversion arbitrage operations at the
            international currency market and derivatives markets, the client is
            consenting to an application of this Policy on him.
          </p>

          <h1 className="text-2xl font-bold mt-10">
            8. Terms and Interpretations
          </h1>
          <p className="mt-5">In this Policy or any Regulations:</p>
          <p className="mt-5">
            Execution venue - shall mean a regulated market, an MTF, a
            systematic internaliser, or a market maker or other liquidity
            provider or an entity that performs a similar function in a third
            country to the functions performed by any of the foregoing.
          </p>
          <p className="mt-5">
            Multilateral trading facility (MTF) - shall mean a multilateral
            system operated by an investment firm or market operator, which
            brings together multiple third-party buying and selling interests in
            financial instruments in the system, in accordance with
            non-discretionary rules, in a way that results in a contract in
            accordance with the provisions of Title II of the Markets in
            Financial Instruments Directive (MiFID).
          </p>
          <p className="mt-5">
            Regulated market - shall mean a multilateral system operated and/or
            managed by a market operator, which brings together or facilitates
            the bringing together of multiple third-party buying and selling
            interests in financial instruments – in the system and in accordance
            with its nondiscretionary rules – in a way that results in a
            contract, in respect of the financial instruments admitted to
            trading under its rules and/or systems, and which is authorised and
            functions regularly and in accordance with the provisions of Title
            III of MiFID.
          </p>
          <p className="mt-5">
            Systematic internaliser - shall mean an investment firm which, on an
            organised, frequent and systematic basis, deals on own account by
            executing client orders outside a regulated market or an MTF.
          </p>
          <p className="mt-5">
            Should you require any additional information about the Order
            Execution Policy of SuperForex,
          </p>
          <p className="mt-5">
            please contact us at
            <span className="ms-2 underline text-primary font-bold hover:text-default">
              info@superforex.global
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Page;
