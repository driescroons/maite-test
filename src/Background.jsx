import { GradientTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import {
  BoxGeometry,
  CylinderGeometry,
  Mesh,
  MeshNormalMaterial,
  PlaneGeometry,
  SphereGeometry,
} from "three";
import { CSG } from "three-csg-ts";

export default function Background() {
  const ref = useRef();

  const viewport = useThree((state) => state.viewport);
  // Make 2 meshes..
  const sphereInner = new Mesh(
    new BoxGeometry(500, 500, 0.1)
    // new MeshNormalMaterial()
  );
  const sphere = new Mesh(new SphereGeometry(1, 32, 32));

  // Make sure the .matrix of each mesh is current
  sphereInner.updateMatrix();
  sphere.updateMatrix();

  let subRes = CSG.subtract(sphereInner, sphere);

  const outerCylinder = new Mesh(new CylinderGeometry(1, 1, 0.15, 32));
  const innerCylinder = new Mesh(new CylinderGeometry(0.9, 0.9, 1, 32));

  outerCylinder.updateMatrix();
  innerCylinder.updateMatrix();

  const windowFrame = CSG.subtract(outerCylinder, innerCylinder);
  windowFrame.rotateX(Math.PI / 2);

  const globe = new Mesh(new SphereGeometry(250, 32, 32));
  const globeCutoffCube = new Mesh(new BoxGeometry(500, 500, 500));
  globeCutoffCube.position.z = 250;
  globeCutoffCube.updateMatrix();

  const globeCutout = CSG.subtract(globe, globeCutoffCube);

  // subRes = CSG.subtract(subRes, sphere);

  const uniRes = CSG.union(sphereInner, sphere);
  const intRes = CSG.intersect(sphereInner, sphere);

  useFrame(() => {});

  return (
    <>
      <color attach="background" args={["black"]} />
      <primitive object={subRes}>
        <meshBasicMaterial color="black" toneMapped={false} />
      </primitive>
      <primitive object={windowFrame}>
        <meshStandardMaterial color="gray" />
      </primitive>
      <primitive object={globeCutout}>
        <meshBasicMaterial side={1}>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={["#04619F", "#000000"]} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshBasicMaterial>
      </primitive>
      {/* <mesh>
        <sphereGeometry args={[50, 30, 30]} />
       
      </mesh> */}
    </>
  );
}
