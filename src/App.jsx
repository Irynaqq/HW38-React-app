// src/App.jsx
import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import './index.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [clickCount, setClickCount] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1>My React App</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>Input component</h2>
        <Input
          type="text"
          placeholder="Введіть щось..."
          onChange={handleInputChange}
        />
        <p>Ви ввели: {inputValue || 'поки нічого 🙂'}</p>
      </section>

      <section>
        <h2>Button component</h2>
        <Button
          text="Натисни мене"
          type="button"
          onClick={handleButtonClick}
        />
        <p>Кнопку натиснули: {clickCount} раз(и)</p>
      </section>
    </div>
  );
}

export default App;
