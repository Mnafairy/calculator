import "../styles/buttonOp.css";

export default function ButtonOp({ value, changeTodoOp }) {
  return (
    <div className="calcBtn" onClick={() => changeTodoOp(value)}>
      {value}
    </div>
  );
}