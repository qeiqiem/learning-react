import { func } from "prop-types";
import React from "react";
import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true); // 로딩 데이터
    const [coins, setCoins] = useState([]); // 코인 리스트를 잠시 홀딩하기 위함

    const [money, setMoney] = useState("");
    const [selectedCoin, setSelectedCoin] = useState(0);

    const onChange = (e) => {
        setMoney(e.target.value);
    };
    const onSelect = (e) => {
        setSelectedCoin(e.target.value);
    };

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json.slice(0, 20));
                setLoading(false);
            });
    }, []);
    // console.log(coins);

    return (
        <div>
            <div>
                <h1>The Coins Ranking TOP {coins.length}</h1>
                {loading ? (
                    <strong>Loading...</strong> //로딩이면
                ) : (
                    //로딩이 끝나면
                    <select onChange={onSelect}>
                        <option>
                            ====== Choose what u want ! ======
                        </option>
                        {coins.map((coin) => (
                            // coin이 id값을 가지고 있기 때문에 index가 아니라 id를 활용해서 만들어줌
                            <option
                                key={coin.id}
                                id={coin.name} // ??????왜 도대체 안되는거임
                                value={coin.quotes.USD.price}
                            >
                                {coin.name} ({coin.symbol}) : $
                                {coin.quotes.USD.price.toFixed(3)} USD
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <br /> <hr />
            <div>
                <label htmlFor="have">
                    <h1>YOU HAVE</h1> $
                </label>
                <input
                    id="have"
                    onChange={onChange}
                    value={money}
                    placeholder="Money.."
                    type="number"
                ></input>
                <label htmlFor="buy">
                    <h1>YOU CAN BUY</h1>
                </label>
                <input
                    // onChange={onChange}
                    id="buy"
                    value={
                        money === ""
                            ? "0"
                            : Math.floor(money / selectedCoin)
                    }
                    disabled
                ></input>
                Coins !
            </div>
        </div>
    );
}

export default App;
