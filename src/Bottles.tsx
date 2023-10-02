/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Euler, InstancedMesh, Matrix4, Vector3 } from "three";
import { randFloatSpread } from "three/src/math/MathUtils";
import { useFrame } from "@react-three/fiber";

export default function Bottles(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/soda-bottle/model.gltf"
  );
  const bottlesRef = useRef();
  const labelsRef = useRef();

  const dummy = useMemo(() => new Vector3(), []);
  const bottlees = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 1000; i++) {
      const position = new Vector3(
        randFloatSpread(50),
        randFloatSpread(50),
        -randFloatSpread(50) - 25
      );

      const rotation = new Vector3(
        0,
        // position.x > 0 ? Math.PI / 2 : Math.PI / -2,
        Math.random(),
        Math.random()
      );

      temp.push({
        position,
        rotation,
        velocity: Math.random() / 50,
      });
    }
    return temp;
  }, []);

  useEffect(() => {
    bottlees.forEach((bottle, i) => {
      const positionMatrix = new Matrix4().makeTranslation(
        ...bottle.position.toArray()
      );
      const rotationMatrix = new Matrix4().makeRotationFromEuler(
        new Euler(...bottle.rotation.toArray())
      );
      const finalMatrix = new Matrix4().multiplyMatrices(
        positionMatrix,
        rotationMatrix
      );
      bottlesRef.current.setMatrixAt(i, finalMatrix);
      labelsRef.current.setMatrixAt(i, finalMatrix);
    });
  }, []);

  useFrame(({ clock }) => {
    for (let i = 0; i < 1000; i++) {
      const bottle = bottlees[i];
      bottle.position.x +=
        Math.sin((i + clock.getElapsedTime()) * 0.5) * bottle.velocity;
      bottle.position.y +=
        Math.sin((10 + i - clock.getElapsedTime()) * 0.5) * bottle.velocity;
      bottle.position.z +=
        Math.sin((20 + i + clock.getElapsedTime()) * 0.5) * bottle.velocity;

      const positionMatrix = new Matrix4().makeTranslation(
        ...bottle.position.toArray()
      );
      const rotationMatrix = new Matrix4().makeRotationFromEuler(
        new Euler(...bottle.rotation.toArray())
      );
      const finalMatrix = new Matrix4().multiplyMatrices(
        positionMatrix,
        rotationMatrix
      );
      bottlesRef.current.setMatrixAt(i, finalMatrix);
      labelsRef.current.setMatrixAt(i, finalMatrix);
    }
    bottlesRef.current.instanceMatrix.needsUpdate = true;
    labelsRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={group} {...props}>
      <instancedMesh
        ref={bottlesRef}
        args={[nodes.Mesh_sodaBottle.geometry, materials.brownDark, 1000]}
      >
        {/* <meshStandardMaterial /> */}
      </instancedMesh>
      <instancedMesh
        ref={labelsRef}
        args={[nodes.Mesh_sodaBottle_1.geometry, materials.red, 1000]}
      >
        {/* <meshStandardMaterial /> */}
      </instancedMesh>

      {/* add instanced meshes for the other meshes */}
      {/* <mesh geometry={nodes.Mesh_bottle.geometry} material={materials.pink} />
      <mesh
        geometry={nodes.Mesh_bottle_1.geometry}
        material={materials.greyLight}
      />
      <mesh
        geometry={nodes.Mesh_bottle_2.geometry}
        material={materials._defaultMat}
      /> */}
    </group>
  );
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/soda-bottle/model.gltf"
);