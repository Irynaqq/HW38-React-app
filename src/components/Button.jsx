// src/components/Button.jsx

/* 
  Простий багаторазовий компонент кнопки.
  Приймає:
  - text: текст на кнопці
  - type: тип кнопки (button, submit)
  - onClick: функція, яка викликається при кліку
*/

function Button({ text, type = 'button', onClick }) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
