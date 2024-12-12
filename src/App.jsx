import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h1>My Todos</h1>
      <div className={styles.todoWrapper}>
        <div className={styles.todoInput}>
          <div className={styles.todoInputItem}>
            <label htmlFor="">Title :</label>
            <input type="text" placeholder="what's the task title?" />
          </div>
          <div className={styles.todoInputItem}>
            <label htmlFor="">Description :</label>
            <input type="text" placeholder="what's the task description?" />
          </div>
          <div className={styles.todoInputItem}>
            <button type="button" className={styles.addTaskBtn}>
              Add
            </button>
          </div>
        </div>
        <div className={styles.btnArea}>
          <button>Todo</button>
          <button>Completed</button>
        </div>
        <div className={styles.todoList}>
          <div className={styles.todoListItem}>
            <h3>Task 1</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
