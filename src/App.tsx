import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div>
        <h1>Hello React!</h1>
        <div className="card">
          <Button
            title="Hello"
            onClick={() => alert("hello")}
            disabled={true}
          />
          <Button disabled={false} title="Bye" onClick={() => alert("Bye!")} />
        </div>
      </div>
    </>
  );
}

export default App;
