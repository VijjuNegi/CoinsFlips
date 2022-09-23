import React, { useState } from "react";
import classes from "../../utils/css/components/Home.module.css";

const Home = (props) => {
  const [coins, setCoins] = useState();
  const [currencies, setCurrencies] = useState([
    "OS SOL",
    "0.1 SOL",
    "25 SOL",
    "0.5 SOL",
    "1 SOL",
    "2 SOL",
  ]);
  const [activeButton, setActiveButton] = useState(null);

  const coinsHandle = (event) => {
    setCoins(() => {
      console.log(event.target.value);
    });
  };

  const buttonHandler = (event) => {
    setActiveButton(event.target.getAttribute("data-index"));
    setCoins(event.target.getAttribute("data-coin"));
  };

  const CurrencyComponent = ({ currencies, activeButton }) => {
    return (
      <React.Fragment>
        {currencies.map((currency, index) => {
          const isActive = index == activeButton;
          return (
            <div key={index} className="col-6 mt-2 text-center">
              <button
                onClick={buttonHandler}
                data-index={index}
                data-coin={currency}
                className={classes.mainButton}
                style={{ background: isActive ? "#4f005f" : "#741188" }}
              >
                {currency}
              </button>
            </div>
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <div>
      <div className="container" className={classes.topMargin}>
        <div className="row">
          <div className="col"></div>
          <div className="col text-center">
            <div className="row"></div>
            <div className="row">
              <h2 className="text-center">I LIKE</h2>
              <div className="col text-center">
                <button
                  onClick={coinsHandle}
                  value={coins}
                  className={classes.mainButton}
                >
                  HEADS
                </button>
              </div>
              <div className="col text-center">
                <button className={classes.mainButton}>TAILS</button>
              </div>
            </div>
            <div className="row mt-2">
              <h2 className="text-center">FOR</h2>
              <CurrencyComponent
                currencies={currencies}
                activeButton={activeButton}
              />
            </div>
            <div className="row mt-4">
              <div className="col text-center">
                <button className={classes.mainButton}>
                  DOUBLE OR NOTHING
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
