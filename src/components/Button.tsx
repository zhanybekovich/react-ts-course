function Button() {
  const availableMoney = 10;
  return (
    <button onClick={() => alert("Clicked")}>
      {availableMoney > 100 ? "enough" : "not enough"}
    </button>
  );
}
export default Button;
