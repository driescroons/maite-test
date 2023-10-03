import {
  CameraControls,
  Html,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { button, useControls } from "leva";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { lerp } from "three/src/math/MathUtils";

export default function Camera() {
  const cameraControlRef = useRef<CameraControls | null>(null);

  const first = (transition = false) => {
    cameraControlRef.current?.setLookAt(0, 0, 5, 0, 10, 0, transition);
  };

  const scrollPosition = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      scrollPosition.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [cameraState, setCameraState] = useState(0);

  useEffect(() => {
    if (cameraState === 0) {
      first(true);
    }

    if (cameraState === 1) {
      cameraControlRef.current?.setLookAt(0, 0, 5, 0, 0, -10, true);
    }
  }, [cameraState]);

  useFrame(() => {
    // console.log(scrollPosition.current);
    if (scrollPosition.current < 400) {
      return setCameraState(0);
    }

    if (scrollPosition.current < 900) {
      return setCameraState(1);
    }

    if (scrollPosition.current >= 900) {
      setCameraState(2);
    }

    if (cameraState === 2) {
      const maxScroll = 2000 - 900; // derived with scrollPosition.current print
      const sub = scrollPosition.current - 900;
      const pos = sub / maxScroll;

      cameraControlRef.current?.setLookAt(
        0,
        0,
        lerp(5, 0, pos),
        0,
        0,
        -10,
        false
      );
    }
  });

  // const _ = useControls({
  //   first: button(() => first(true)),
  //   second: button(() => {
  //     cameraControlRef.current?.setLookAt(0, 0, 5, 0, 0, -10, true);
  //   }),
  //   third: button(() => {
  //     cameraControlRef.current?.dolly(0.5, true);
  //   }),
  // });

  useLayoutEffect(() => {
    first();
  }, []);

  useEffect(() => {
    cameraControlRef.current!.mouseButtons.left = 0;
    cameraControlRef.current!.mouseButtons.right = 0;
    cameraControlRef.current!.mouseButtons.middle = 0;
    cameraControlRef.current!.mouseButtons.wheel = 0;

    cameraControlRef.current!.touches.one = 0;
    cameraControlRef.current!.touches.two = 0;
    cameraControlRef.current!.touches.three = 0;
  }, []);

  // useLayoutEffect(() => {
  //   console.log(scroll);
  //   if (scroll.pages === 1) {
  //     // cameraControlRef.current!.enabled = false;
  //     console.log("sup");
  //   } else {
  //     // cameraControlRef.current!.enabled = true;
  //     console.log("sup2");
  //   }
  // }, []);

  return (
    <>
      <CameraControls ref={cameraControlRef} />
      {/* <Html>
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
      </Html> */}
    </>
  );
}
