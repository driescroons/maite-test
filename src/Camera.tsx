import { CameraControls, Html } from "@react-three/drei";
import React, { useRef } from "react";

export default function Camera() {
  const cameraControlRef = useRef<CameraControls | null>(null);

  return (
    <>
      <CameraControls ref={cameraControlRef} />
      <Html>
        <div style={{ position: "absolute", top: "0" }}>
          <button
            type="button"
            onClick={() => {
              cameraControlRef.current?.rotate(Math.PI / 4, 0, true);
            }}
          >
            rotate theta 45deg
          </button>
          <button
            type="button"
            onClick={() => {
              cameraControlRef.current?.reset(true);
            }}
          >
            reset
          </button>
        </div>
      </Html>
    </>
  );
}
