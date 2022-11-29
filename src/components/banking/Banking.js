import "./Banking.css";
import bananaLogo from "../../img/banana-logo.png"
import { useState } from "react";

function Banking() {

    const [amount, setAmount] = useState(0);

    const [enteredValue, setEnteredValue] = useState(0);

    const [color, setColor] = useState("#ffffff");

    const colorHandler = (amount) => {
        if (amount < 0) {
            setColor("red");
        } else {
            setColor("#ffffff");
        }
    }

    const einzahlenHandler = () => {
        setAmount(amount + Number(enteredValue));
        document.getElementById("inputAmount").value = "";
        setEnteredValue(0);
        colorHandler(amount + Number(enteredValue));
    };

    const auszahlenHandler = () => {
        setAmount(amount - Number(enteredValue));
        document.getElementById("inputAmount").value = "";
        setEnteredValue(0);
        colorHandler(amount - Number(enteredValue));
    };

    return (
        <div className="bankingWrapper">
            <img id="logoImg" src={bananaLogo} alt="banana-bank-logo"></img>
            <h1 id="title">Banana Bank</h1>
            <section className="konto">
                <h2>Dein Girokonto</h2>
                <p className="saldo" id="saldo" style={{ color: color }}>{amount}€</p>
                <input id="inputAmount" className="geldbetrag" type="number" placeholder="Gib einen Geldbetrag ein" onChange={(event) => { setEnteredValue(event.target.value) }}></input>
                <button className="einzahlen" type="button" onClick={einzahlenHandler}>Einzahlen</button>
                <button className="auszahlen" type="button" onClick={auszahlenHandler}>Auszahlen</button>

            </section>

        </div>
    )
};

export default Banking;