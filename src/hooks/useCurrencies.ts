import { useState } from "react";
import data from "@/localData.json";

const currencies = data.currencies;

const useCurrencies = ()=>{
    const [currencyOpen, setCurrencyOpen] = useState(false);
    const [currencyValue, setCurrencyValue] = useState("usd");
    return{currencies , currencyOpen , setCurrencyOpen , currencyValue ,setCurrencyValue};
};
export default useCurrencies;