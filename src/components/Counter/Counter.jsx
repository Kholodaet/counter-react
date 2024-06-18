import { useState } from "react";
import css from "./Counter.module.css";
import iziToast from "izitoast"; // Імпортуємо iziToast
import "izitoast/dist/css/iziToast.min.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    iziToast.success({ title: "Success", message: "Good job,mate!!!" });
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      iziToast.info({ title: "Info", message: "You made it less now" });
    } else {
      iziToast.error({
        title: "Error",
        message: "Are you joking nooo less than 0 ",
      });
    }
  };
  const reset = () => {
    setCount(0);
    iziToast.warning({ title: "Warning", message: "You lost everything!" });
  };

  return (
    <div className={css.counter}>
      <h1>Counter: {count}</h1>
      <button className={css.button} onClick={increment} disabled={count >= 20}>
        More
      </button>
      <button className={css.button} onClick={decrement} disabled={count <= 0}>
        Less
      </button>
      <button className={css.button} onClick={reset} disabled={count === 0}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
