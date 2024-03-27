import "./App.css";
import { useState } from "react";

function App() {
  const[name, setName] = useState("");
  const[dateTime, setDateTime] = useState("");
  const[description, setDescription] = useState("");

  function addNewTransaction(){
    
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
      <div className="basics">
      <input type="text" 
             value={name}
             onChange={ev => setName(ev.target.value)}
             placeholder={`$200 new samsung tv`}/>
        <input type="datetime-local"
               value={dateTime}
               onChange={ev => setDateTime(ev.target.value)}
                />
      </div>
      <div className="description">
      <input type="text" 
             value={description}
             onChange={ev => setDescription(ev.target.value)}
             placeholder={`description`}/>
      </div>
      <button type={"submit"}>Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung Tv</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2024-03-27 19:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Gig job new website</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right ">
            <div className="price green">+$400</div>
            <div className="datetime">2024-03-27 19:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">iPhone</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$900</div>
            <div className="datetime">2024-03-27 19:00</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
