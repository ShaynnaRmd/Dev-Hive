import { useState } from "react";

export function Input({ type, label, onChange, value }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <label>
      {label}
      <input type={type} value={inputValue} onChange={handleChange} />
    </label>
  );
}
