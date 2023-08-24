import React from "react";
import {useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import './App.css';
import Quote from "./components/Quote";
import Button from "./components/Button";

const App = () => {
    const [quote, setQuote] = useState([]);
    const [color, setColor] = useState("#000000");

    const fetchQuote = async () => {
        const response = await fetch("https://api.quotable.io/random");
        const randomQuote = await response.json();
        setQuote(randomQuote);
        setColor("#" + Math.floor(Math.random() * 16777215).toString(16));

console.log(response);
    };
        useEffect(() => {
        fetchQuote();
    }, []);

    const handleClick = () => {
        return fetchQuote();
    };

    return (
        <div className="container" style={{ backgroundColor: color }}>
            <wrapper id="quote-box">
                <Quote
                    content={quote.content}
                    author={quote.author}
                    color={color}
                />
                <div id="footer">
                    <a href="https://twitter.com" id="tweet-quote">
                    <FontAwesomeIcon icon={faXTwitter} size="lg" />
                    </a>
                    <Button handleClick={handleClick} />
                </div>
            </wrapper>
        </div>
    );
};

export default App;