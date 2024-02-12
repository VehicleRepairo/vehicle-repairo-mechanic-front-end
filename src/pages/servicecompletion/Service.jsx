import React, { useState } from 'react';
import "./Service.css";


export default function Service() {
  const [messageVisible, setMessageVisible] = useState(false);
  const [buttonColor, setButtonColor] = useState('#1D2B78'); 
  const [buttonText, setButtonText] = useState('Done');

  const handleButtonClick = () => {
    setMessageVisible(true);
    setButtonColor('white'); 
    setButtonText('Done');
  };

  return (
    <div className="background-container">
      <div className="Service-container">
        <h1>Service Completion</h1>
        <p>Click this to inform your customer that the service is over.</p>
        <div className="Message-container">
        <button onClick={handleButtonClick} style={{ backgroundColor: buttonColor, color: buttonColor === 'white' ? '#0056b3' : 'white' }}>{buttonText}</button>
        {messageVisible && <p>The service completion message is sent <br></br>to the client</p>}</div>
      </div>
      <img src="/Completion.jpg" alt="Completion" className="background-image" />
    </div>
  );
}
