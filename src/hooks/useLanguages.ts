import data from "@/localData.json";
import { useState } from "react";

const languages = data.languages;
const useLanguages =()=>{
    const [langOpen, setLangOpen] = useState(false);
    const [langValue, setLangValue] = useState("en");
    return{languages , langOpen , setLangOpen ,langValue , setLangValue};
}
export default useLanguages;