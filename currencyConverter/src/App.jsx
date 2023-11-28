import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
    const BackgroundImage="https://png.pngtree.com/thumb_back/fh260/background/20191120/pngtree-financial-fashion-simple-stock-market-webpage-advertising-banner-background-image_322675.jpg"
    
    const [amount,setAmount]=useState(0);
    const [from,setFrom]=useState("usd");
    const[to,setTo]=useState("inr");
    const [covertedAmount,setCovertedAmount]=useState(0)
   
    const currencyInfo=useCurrencyInfo(from);
    const options=Object.keys(currencyInfo);
    const swap=()=>{
        setTo(from);
        setFrom(to);
        setAmount(covertedAmount);
        setCovertedAmount(amount);
    }
    const converted=()=>{
        setCovertedAmount(amount*currencyInfo[to]);
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            converted()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                onAmountChange={(amount)=>setAmount(amount)}
                                selectCurrency={from}

                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={covertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                onAmountChange={(convertedAmount)=>setAmount(convertedAmount)}
                                
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={converted}>
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
                    }
export default App;