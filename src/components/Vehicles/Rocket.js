import React, { useState } from "react";
import { Card } from "@mrshmllw/smores-react";

import InfoSheet from "../InfoSheet/InfoSheet";
import Controls from "../Controls/Controls";

import { StyledVehicle } from "./styles/Vehicle.styles";

function Rocket({ data }) {

  const [currentPage, setCurrentPage] = useState(0);
  const pages = ["Basic Info", "Dimensions", "Engines"];

  const {
    rocket_name: name, 
    description, 
    height, 
    diameter, 
    mass,
    cost_per_launch: cost,
    success_rate_pct: success,
    first_flight,
    country,
    engines
  } = data;

  const dimensions = {
    "height": `${height.meters}m`,
    "diameter": `${diameter.meters}m`,
    "mass": `${mass.kg}kg`
  };

  const basicInfo = {
    "cost": `$${cost}`,
    "success": `${success}%`,
    "first flight": first_flight,
    "country": country
  };

  const engineData = {
    "number of engines": engines.number,
    "type": engines.type,
    "version": engines.version,
    "layout": engines.layout,
    "maximum engine loss": engines.engine_loss_max,
    "propellant 1": engines.propellant_1,
    "propellant 2": engines.propellant_2,
    "thrust to weight": engines.thrust_to_weight,
    "isp at sea level": engines.isp.sea_level,
    "thrust at sea level": `${engines.thrust_sea_level.kN}kN`,
    "isp in vacuum": engines.isp.vacuum,
    "thrust in vacuum": `${engines.thrust_vacuum.kN}kN`,
  };

  return (
    <StyledVehicle>
      <Card 
        maxWidth="650px" 
        marginY="20px" 
        marginX="20px"
      >
        <h1>{ name }</h1>
        <Controls 
          titles={ pages } 
          currentPage={ currentPage }
          setCurrentPage={ setCurrentPage }
        />
        <p>{ description }</p>
        { pages[currentPage] === "Basic Info" && <InfoSheet type={ "basic-info" } data={ basicInfo } /> }
        { pages[currentPage] === "Dimensions" && <InfoSheet type={ "dimensions" } data={ dimensions } /> }
        { pages[currentPage] === "Engines" && <InfoSheet type={ "engine" } data={ engineData } /> }
      </Card>
    </ StyledVehicle>
  );
};

export default Rocket;
