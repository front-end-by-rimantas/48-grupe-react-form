import { useState } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export function FirstTry() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <>
            <Header />
            <main>
                <h1>Hooks FTW</h1>
                <div className="counter">
                    <button onClick={decrement}>-</button>
                    <span>{count}</span>
                    <button onClick={increment}>+</button>
                </div>
            </main>
            <Footer />
        </>
    );
}