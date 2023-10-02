import { useSpring } from "@react-spring/three";
import { useHelper } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { DirectionalLightHelper, Matrix4, PointLightHelper } from "three";
import { a } from "@react-spring/three";
import { extend, useFrame, useThree } from "@react-three/fiber";

type Props = {};

export default function Lights({}: Props) {
  const directionalLight = useRef();

  const pointLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1);
  useHelper(pointLight, PointLightHelper, 1);

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <directionalLight position={[0, 50, -30]} ref={directionalLight} />
      {[...Array(10)].map((_, i) => (
        <>
          <pointLight
            key={i}
            position={[i - 5, -1, -1]}
            intensity={3}
            ref={pointLight}
          />
          <pointLight
            key={i}
            position={[i - 5, 1, -1]}
            intensity={3}
            ref={pointLight}
          />
        </>
      ))}
    </>
  );
}
