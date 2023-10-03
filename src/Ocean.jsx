import React from "react";
import Boat from "./Boat";
import Bottles from "./Bottles";
import Fishes from "./InstancedFishes";
import { Particles } from "./Particles";

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
      <Particles />
      <Fishes count={5000} />
      <Boat position={[0, 5, -5]} scale={2} />
      <Bottles count={100} />
    </>
  );
}
