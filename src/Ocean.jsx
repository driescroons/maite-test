import React from "react";
import { randFloatSpread } from "three/src/math/MathUtils";
import Fish from "./Fish";
import Fishes from "./InstancedFishes";
import Boat from "./Boat";
import Bottles from "./Bottles";

export default function Ocean() {
  return (
    <>
      {/* {[...Array(100)].map((i) => (
        <Fish
          key={i}
          position={[
            randFloatSpread(20),
            randFloatSpread(50),
            -randFloatSpread(50) - 25,
          ]}
        />
      ))} */}
      <Fishes />
      <Boat position={[0, 5, -5]} scale={2} />
      <Bottles count={100} />
    </>
  );
}
