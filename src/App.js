import "./App.css";

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
      <div className="basics">
      <input type="text" placeholder={`$200 new samsung tv`}/>
        <input type="datetime-local" />
      </div>
      <div className="description">
      <input type="text" placeholder={`description`}/>
      </div>
      </form>
    </main>
  );
}

export default App;
