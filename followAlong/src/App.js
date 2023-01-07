import React, { useState } from "react";
import Families from "./components/Families"
import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

export const FamilyContext = createContext();


export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  return (
    <div className="App">
      <FamilyContext.provider value={{activeFamily: activeFamily, setActiveFamily: setActiveFamily, families: families}}>
      <Families />
      {activeFamily && <FamilyTree />}
      </FamilyContext.provider>
    </div>
  );
}

