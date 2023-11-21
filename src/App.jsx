import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner"
import { useState } from "react";
import satData from "./components/satData"

// The useState() hook takes the first (initial) value of the state 
// variable as its argument. The second value then sets your state,
function App() {
  // It can be used like this: const [state, setState] = useState(initialValue); 
  // Here, the initialValue is the value you want to start with, and state is the 
  // current state value that can be used in your component. The setState function can 
  // be used to update the state , triggering a re-render of your component.
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  const filterType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };

  return (
    <div>
      <Banner />
      <Buttons
        filterByType={filterType}
        setSat={setSat}
        displaySats={displaySats}
      />
    <Table sat={sat} />
    </div>
  );
}

export default App;