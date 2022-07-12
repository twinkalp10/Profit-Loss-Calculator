import React from "react";
import "./style.css";

export default function Result(props) {
  let sell = Number(props.sell);
  let buy = Number(props.buy);
  let quantity = Number(props.quantity);

  let totalsell = sell * quantity;
  let totalbuy = buy * quantity;

  const [answer, setAnswer] = React.useState();
  const [percent, setPercent] = React.useState();
  const [profitOrLoss, setProfitOrLoss] = React.useState("");

  function handleClick() {
    if (totalsell > totalbuy) {
      let profit = totalsell - totalbuy;
      let profit_percent = ((profit / totalbuy) * 100).toFixed(2);
      setAnswer(profit);
      setPercent(profit_percent);
      setProfitOrLoss("Profit");
      console.log("profit:", profit);
    }
    if (totalbuy > totalsell) {
      let loss = totalbuy - totalsell;
      const loss_percent = ((loss / totalbuy) * 100).toFixed(2);
      setAnswer(loss);
      setPercent(loss_percent);
      setProfitOrLoss("Loss");
      console.log("loss:", loss);
    }
    if (totalbuy === totalsell) {
      setAnswer(0);
      setProfitOrLoss("No Profit No Loss");
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
        className="btn--calculate"
      >
        Calculate
      </button>
      <p className="result--text">It's {profitOrLoss}</p>
      <p className="result--text">
        Total {profitOrLoss} is {answer}
      </p>
      <p className="result--text">Percentage is : {percent}</p>
    </div>
  );
}
