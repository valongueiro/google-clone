function Button({ type, label }) {
  return (
    <button type={type || "button"} className="btn">
      {label}
    </button>
  );
}

export default Button;
