import "./App.css";
import Search from "./component/Search.jsx";
import Main from "./component/Maindata.jsx";
import { useState } from "react";

function App() {
  const [country, setcountry] = useState("");
  const [countryfound, setcountryfound] = useState(false);

  return (
    <div className="App">
      <Search setcountry={setcountry} setcountryfound={setcountryfound} />

      {countryfound ? <Main country={country} /> : <div>Start Searching</div>}
    </div>
  );
}

export default App;