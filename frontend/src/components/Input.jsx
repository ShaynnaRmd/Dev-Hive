export function Input({ type, label, onChange }) {
  return (
    <label>
      {label}
      <input type={type} OnChange={onChange} />
    </label>
  );
}
