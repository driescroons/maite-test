import { Point, Points } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";
import { randFloatSpread } from "three/src/math/MathUtils";

const particleColors = [
  "#0369AF",
  "#0077bb",
  "#1384d7",
  "#81c8a8",
  "#44bd90",
  "#30ae82",
];

function Particles({ size = 1000 }) {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <Points limit={size}>
      <pointsMaterial size={0.05} vertexColors />
      {Array.from({ length: size }).map((_, i) => (
        <Point
          key={i}
          position={[
            randFloatSpread(50),
            randFloatSpread(50),
            -randFloatSpread(50) - 25,
          ]}
          color={
            particleColors[
              Math.floor(Math.random() * (particleColors.length - 1))
            ]
          }
        />
      ))}
    </Points>
  );
}

export { Particles };
