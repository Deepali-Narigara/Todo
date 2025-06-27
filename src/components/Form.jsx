import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todoForm} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            type="text"
            placeholder="Enter todo item..."
            value={todo.name}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
          />
          <button type="submit" className={styles.modernButton}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
