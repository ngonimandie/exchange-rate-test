import React, { useMemo, useState } from "react";

export default function Converter() {
    const [value, setValue] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [currencies] = useState(["USD", "ZAR", "ZWL", 'Kwacha']);
    const [result, setResult] = useState(0);

    const fromCurrencies = useMemo(() => {
        return currencies.filter((c) => c !== toCurrency);
    }, [currencies, toCurrency]);

    const toCurrencies = useMemo(() => {
        return currencies.filter((c) => c !== fromCurrency);
    }, [currencies, fromCurrency]);

    const convert = async (e) => {
        e.preventDefault();
        const formValid = +value >= 0 && fromCurrency && toCurrency;
        if (!formValid) {
            return;
        }
        const res = await fetch(
            `https://api.exchangeratesapi.io/latest?base=${fromCurrency}`
        );
        const { rates } = await res.json();
        setResult(+value * rates[toCurrency]);
    };

    return (
        <div>
            <div className="converter py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" p-2>
                            <h2 className="text-center">Convert Now</h2>
                            <div>
                                <h3>Contact Developer</h3>
                                <p>+263779077679</p>
                            </div>
                            <div>
                                <h3>Conversion Rates</h3>
                                <p>The amounts above are calculated using the an api developed by the author of the app and are not indicative of real Rates. </p>
                            </div>

                        </div>
                        <div className="col-md-6 p-2">
                            <h2 className="text-center">Convert</h2>
                            <form onSubmit={convert} class="row g-3">
                                <div class="col-12">
                                    <textarea name="value" id="value" placeholder="Value to Convert" value={value} onChange={(e) => setValue(e.target.value)} className="form-control" rows="1"></textarea>
                                </div>
                                <div>
                                <label>From Currency</label>
                                </div>
                                <div className="converter-form-items">
                                    
                                    <select class="btn converter-form-items"
                                        value={fromCurrency}
                                        onChange={(e) => setFromCurrency(e.target.value)}
                                    >
                                        {fromCurrencies.map((c) => (
                                            <option key={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                                <div >
                                <label>To Currency</label>
                                </div>
                                <div>
                                    
                                    <select class="btn converter-form-items"
                                        value={toCurrency}
                                        onChange={(e) => setToCurrency(e.target.value)}
                                    >
                                        {toCurrencies.map((c) => (
                                            <option key={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div class="col-12">
                                    <button type="submit" class="btn converter-form-items btn-primary message-button round-corners ">Convert</button>
                                </div>

                            </form>
                            <div>
                                {value} {fromCurrency} is {result.toFixed(2)} {toCurrency}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}