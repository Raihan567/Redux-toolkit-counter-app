import "./App.css";
import CounterView from "./app/features/counter/CounterView";
import Postview from "./app/features/posts/Postview";

function App() {
  return (
    <div className="App">
      <h1>Counter application</h1>
      <CounterView />
      <Postview />
    </div>
  );
}

export default App;
