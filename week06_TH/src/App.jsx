import "./App.css";
import AppCounter from "./components/AppCounter";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="container">
      <AppCounter />
      <TodoApp />
    </div>
  );
}

export default App;
