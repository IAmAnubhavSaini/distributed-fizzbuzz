import React, {useEffect, useState} from 'react';
import './App.css';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import {FizzBuzz} from "./FizzBuzz";
import {fetchFizzBuzz} from "./net/fetch";

function App() {
    const [data, setData] = useState<string[]>([]);
    const {endMarkerRef, containerRef, page} = useIntersectionObserver();

    useEffect(function () {
        (async function () {
            const newData = await fetchFizzBuzz(data.length);
            setData([...data, ...newData]);
        })();

    }, [page]);

    useEffect(() => {
        console.log({len: data.length, data})
    })
    return (<div ref={containerRef} className={"APP"}>
        <header>
            <h1>FizzBuzz</h1>
        </header>
        <section role={"main"}>
            <div className="FizzBuzz">
                <FizzBuzz data={data}/>
            </div>
        </section>
        <footer ref={endMarkerRef}>Loading...</footer>
    </div>);
}

export default App;
