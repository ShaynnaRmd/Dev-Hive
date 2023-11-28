import { useState } from "react";
import styles from "./Input.module.css";
import React from "react";

export function Input({ placeholder, type, label, onChange, value }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <div className={styles.inputcontainer}>
      <label className={styles.label}>{label}</label>
      <input
        placeholder={placeholder}
        className={styles.input}
        type={type}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
