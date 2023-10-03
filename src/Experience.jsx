import React from "react";
import Ocean from "./Ocean";
import Background from "./Background";
import Lights from "./Lights";
import Camera from "./Camera";
import { Canvas } from "@react-three/fiber";

export default function Experience() {
  return (
    <Canvas
      style={{ pointerEvents: "none", touchAction: "none" }}
      camera={{ fov: 40 }}
    >
      <Camera />
      <Lights />
      <Background />
      <Ocean />
    </Canvas>
  );
}
