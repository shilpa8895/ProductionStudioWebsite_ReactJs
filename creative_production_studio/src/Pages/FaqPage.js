import React, { useState } from 'react';
import Navbar from './Navbar';

import '../Styles/FaqPage.css';
import heroimage from '../Images/AboutUs_PlaceholderImage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

function FaqController() {
    // State to control visibility of FAQ answers for each FAQ item
    const [showAnswers, setShowAnswers] = useState([false, false]);

    // Toggle function to toggle visibility of answers for a specific FAQ item
    const toggleAnswers = (index) => {
        setShowAnswers(prevShowAnswers => {
            const newShowAnswers = [...prevShowAnswers];
            newShowAnswers[index] = !newShowAnswers[index];
            return newShowAnswers;
        });
    };

    return (
        <div className="container">
            <Navbar />

{/*             <div className="hero-container" style={{
                backgroundImage: `url(${heroimage})`
            }}>
            </div> */}

            <h5>Frequently Asked Questions!</h5>
            {/*SEARCH BAR*/}
            <li className="search-bar">
                <input type="text" placeholder="Search..." />
                {/* You can add a button here for searching if needed */}
            </li>

            <h6>Can't find an answer to your question? <br></br>Please <a href="mailto:enquires@creativeproductionstudio.com" target="_blank">email us </a>
                and we'll get back to you as soon as we can!
            </h6>

            <div className="faq-container">
            <div className="faq">
                    <h3 className="faq-title">Question 1?</h3>
                    {/* Render FAQ text conditionally based on showAnswers state */}
                    {showAnswers[0] && <p className="faq-text">Question 2 answer</p>}
                    {/* Toggle button for FAQ item */}
                    <button className="faq-toggle" onClick={() => toggleAnswers(0)}>
                        {/* Render different icons based on showAnswers state */}
                        <FontAwesomeIcon icon={showAnswers[0] ? faTimes : faChevronDown} className="icon"/>
                    </button>
                </div>
                <div className="faq">
                    <h3 className="faq-title">Question 2?</h3>
                    {/* Render FAQ text conditionally based on showAnswers state */}
                    {showAnswers[1] && <p className="faq-text">Question 3 answer</p>}
                    {/* Toggle button for FAQ item */}
                    <button className="faq-toggle" onClick={() => toggleAnswers(1)}>
                        {/* Render different icons based on showAnswers state */}
                        <FontAwesomeIcon icon={showAnswers[1] ? faTimes : faChevronDown} className="icon"/>
                    </button>
                </div>
                <div className="faq">
                    <h3 className="faq-title">Question 3?</h3>
                    {/* Render FAQ text conditionally based on showAnswers state */}
                    {showAnswers[2] && <p className="faq-text">Question 3 answer</p>}
                    {/* Toggle button for FAQ item */}
                    <button className="faq-toggle" onClick={() => toggleAnswers(2)}>
                        {/* Render different icons based on showAnswers state */}
                        <FontAwesomeIcon icon={showAnswers[2] ? faTimes : faChevronDown} className="icon"/>
                    </button>
                </div>
            </div>

            <script src="js/script.js"></script>
        </div>

    );
}

export default FaqController;
