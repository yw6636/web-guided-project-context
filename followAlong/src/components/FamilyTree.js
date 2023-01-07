import React, { useContext } from "react";
import { FamilyContext } from "../App";

import Parents from "./Parents";
import Siblings from "./Siblings";

export default function FamilyTree() {
  const { activeFamily } = useContext(FamilyContext)

  return (
    <section className="FamilyTree">
      <h1>{activeFamily.familyName}</h1>
      <h2>Parents</h2>

      {/* Pass data down as a prop */}
      <Parents />

      <div className="spacer" />
      <h2>Siblings</h2>

      {/* Siblings will consume data from Context using render props */}
      <Siblings />
    </section>
  );
}
