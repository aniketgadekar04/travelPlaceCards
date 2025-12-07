import { useState } from "react";
import "./App.css";
import Tour from "./component/Tour";
import data from "./Data";

function App() {
  const [tour, setTour] = useState(data);

  function removeTour(id) {
    const newTour = tour.filter((b) => b.id !== id);
    setTour(newTour);
  }

  if (tour.length === 0) {
    return (
      <div>
        <h2>No Cards Left</h2>
        <button className="btn-white" onClick={() => setTour(data)}>Refresh</button>
      </div>
    );
  }

  // tour ke andar hamne sab data ko dal diya useState ke help se.
  return (
    <>
      <div className="App">
        <Tour tour={tour} removeTour={removeTour}></Tour>
        {/* tour ke data ko props ke help se Tour component me hamne passs kiya. */}
      </div>
    </>
  );
}

export default App;
