import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [lengthConversion, setLengthConversion] = useState('0 meters = 0.000 feet');
  const [volumeConversion, setVolumeConversion] = useState('0 liters = 0.000 gallons');
  const [massConversion, setMassConversion] = useState('0 kilograms = 0.000 pounds');

  const meterToFeet = 3.281;
  const literToGallon = 0.264;
  const kiloToPound = 2.204;

  const handleConvert = () => {
    const baseValue = parseFloat(inputValue);
    if (!isNaN(baseValue)) {
      setLengthConversion(`${baseValue} meters = ${baseValue * meterToFeet} feet`);
      setVolumeConversion(`${baseValue} liters = ${baseValue * literToGallon} gallons`);
      setMassConversion(`${baseValue} kilograms = ${baseValue * kiloToPound} pounds`);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='container-header'>
          <h1 className='container-h1'> Metric/Imperial Unit Conversion</h1>
          <input
            id='input'
            placeholder='n'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button id='btn-convert' onClick={handleConvert}>
            Convert
          </button>
        </div>
        <div className='container-body'>
          <div className='body-1 body-box'>
            <h3> Length (Meter/Feet)</h3>
            <p className='conversion conversion-len'>{lengthConversion}</p>
          </div>
          <div className='body-box'>
            <h3> Volume (Liters/Gallons)</h3>
            <p className='conversion conversion-vol'>{volumeConversion}</p>
          </div>
          <div className='body-box'>
            <h3> Mass (Kilograms/Pounds)</h3>
            <p className='conversion conversion-mas'>{massConversion}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
