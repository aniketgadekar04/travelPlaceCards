import { useState } from "react";
import "./App.css";
import Tour from "./component/Tour";
import data from "./Data";

function App() {
  const [tour, setTour] = useState(data);
  // tour ke andar hamne sab data ko dal diya useState ke help se.
  return (
    <>
      <div>
        <Tour tour={tour}></Tour>
        {/* tour ke data ko props ke help se Tour component me hamne passs kiya. */}
      </div>
    </>
  );
}

export default App;
