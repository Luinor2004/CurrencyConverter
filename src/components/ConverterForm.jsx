import React, { useEffect, useState } from 'react';
import "../assets/App.css";
import { FaExchangeAlt } from "react-icons/fa";
import CurrencySelect from './CurrencySelect';

const ConverterForm = () => {

    const [amount, setAmount] = useState(100);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [result, setResult] = useState("");

    const handleSwapCurrency = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    const getExchangeRate = async () => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Something went wrong!");

            const data = await response.json();
            const rate = (data.conversion_rate * amount).toFixed(2);
            setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        getExchangeRate();
    };

    useEffect(() => {
        getExchangeRate();
    }, []);

    return (
        <form id="converter-form" className="" onSubmit={handleFormSubmit}>
            <div className="form-group flex flex-col pb-4">
                <label htmlFor="form-input" className=" text-[1.1rem]">Enter the amount:</label>
                <input
                    type="number"
                    name="form-input"
                    id="form-input"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    required
                    className=" h-[40px] rounded-md px-2 outline-none border-solid border-[1px] border-gray-400 bg-[#ffffff1a]"
                />
            </div>

            <div id="" className="form-group pb-4 flex justify-between items-center">
                <div id="" className="form-section ">
                    <label htmlFor="from">From:</label>
                    <CurrencySelect
                        selectedCurrency={fromCurrency}
                        handleCurrency={e => setFromCurrency(e.target.value)}
                    />
                </div>

                <div onClick={handleSwapCurrency} className=" bg-[#ffffff1a] mt-7 w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
                    <FaExchangeAlt />
                </div>

                <div id="" className="form-section">
                    <label htmlFor="to">To:</label>
                    <CurrencySelect
                        selectedCurrency={toCurrency}
                        handleCurrency={e => setToCurrency(e.target.value)}
                    />
                </div>
            </div>
            <button type="submit" id="btn" className="h-[40px] w-full mt-3 bg-white text-black rounded-md font-semibold">Get exchange rate</button>
            <p className="flex justify-center items-center h-[40px] w-full mt-3 bg-[#ffffff1a] text-white rounded-md font-medium">
                {result}
            </p>
        </form>
    );
};

export default ConverterForm;
