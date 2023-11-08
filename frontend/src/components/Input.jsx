import { useState } from "react";

export function Input({ type, label, onChange }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <label>
      {label}
      <input type={type} value={value} onChange={handleChange} />
    </label>
  );
}
