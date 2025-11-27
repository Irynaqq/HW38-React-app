// src/components/Input.jsx

/*
  Компонент поля вводу.
  Приймає:
  - placeholder: підказка
  - type: тип поля (text, password, email, etc.)
  - onChange: обробник зміни (отримує event)
*/

function Input({ placeholder, type = 'text', onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
