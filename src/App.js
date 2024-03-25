import { useState } from "react";

export default function App() {
  return (
    <div>
      <Calc />
    </div>
  );
}

function Calc() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <button onClick={() => setStep((step) => step + 1)}>Add</button>
      <button onClick={() => setStep((step) => step - 1)}>Subtract</button>
      <span>Step {step}</span>
      <br />
      <button onClick={() => setCount((count) => count + step)}>Add</button>
      <button onClick={() => setCount((count) => count - step)}>
        Subtract
      </button>
      <span>Count {count}</span>
      <br />
      {count === 0
        ? "Today is"
        : count > 0
        ? ` ${count} day before was`
        : ` And ${Math.abs(count)} days after`}{" "}
      <span>{date.toDateString()}</span>
    </div>
  );
}
