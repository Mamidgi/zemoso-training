import React, { useState } from 'react';

const InputDisplay: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [displayedData, setDisplayedData] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); 
    setDisplayedData(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Submit</button>
      {displayedData && (
        <div>
          <h3>Entered Name:</h3>
          <p>{displayedData}</p>
        </div>
      )}
    </div>
  );
};

export default InputDisplay;
