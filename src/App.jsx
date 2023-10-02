import {
  Box,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  OrbitControls,
  TransformControls,
  useHelper,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import React, { useRef } from "react";
import { DirectionalLightHelper, PlaneGeometry } from "three";
import Background from "./Background";
import Camera from "./Camera";
import Lights from "./Lights";
import Fish from "./Fish";
import { randFloatSpread } from "three/src/math/MathUtils";
import Ocean from "./Ocean";

export default function App() {
  return (
    <Canvas>
      <Camera />
      <Lights />

      {/* <ambientLight intensity={0.4} /> */}

      <Background />

      <Ocean />
      {/* <mesh>
        <cylinderGeometry args={[10, 10, 32, 32]} />
        <MeshTransmissionMaterial
          clearcoat={1}
          thickness={0.1}
          anisotropicBlur={0.1}
          chromaticAberration={0.1}
          samples={8}
          resolution={512}
        />
      </mesh>
      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment> */}
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
