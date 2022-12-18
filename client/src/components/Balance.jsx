import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <section>
      <h4>Your Balance</h4>
      <h1 id="balance">£{numberWithCommas(total)}</h1>
    </section>
  );
};

export default Balance;
