import React, { useState } from "react";
import { Button } from "@mrshmllw/smores-react";

import { getData } from "./services/API";

import ListItem from "./components/Item/Item";
import Rocket from "./components/Vehicles/Rocket";
import Dragon from "./components/Vehicles/Dragon";

import { 
  GlobalStyle, 
  StyledApp, 
  StyledResults, 
  StyledList 
} from './App.styles';

function App() {

  const [data, setData] = useState([]);
  const [vehicle, setVehicle] = useState("");
  const [clicked, setClicked] = useState(false);
  const [item, setItem] = useState(false);

  const getInfo = async (selected) => {
    if (selected !== vehicle) {
      setClicked(false)
      setData([]);
      const data = await getData(selected);
      setVehicle(selected);
      setData(data);
    };
  };

  const handleClick = (passedItem) => {
    setClicked(true)
    setItem(passedItem)
  };

  return (
    <StyledApp className="App">
      <GlobalStyle />
      <h1>Rockets and Dragons</h1>
      { data.length === 0  &&
        <div className="load-message">
          Click below to view the SpaceX fleet
        </div> 

      }
      <div className="controls">
        <Button 
          color="green"
          handleClick={() => getInfo("rockets")}
        >
          Get Rockets
        </Button>
        <Button 
          color="green"
          handleClick={() => getInfo("dragons")}
        >
          Get Dragons
        </Button>
      </div>
      <StyledResults>
        <StyledList>
          {data.map((item, index) => {
            return (
              <div 
                key={index} 
                onClick={() => handleClick(item) } 
              >
                <ListItem                   
                  className={vehicle}
                  type={vehicle} 
                  data={item}
                />
              </div>
            )
          })}
        </ StyledList>
        <div>
          { clicked && vehicle === "rockets" && <Rocket data={ item } /> }
          { clicked && vehicle === "dragons" && <Dragon data={ item } /> }
        </div>
      </ StyledResults>
    </ StyledApp>
  );
};

export default App;
