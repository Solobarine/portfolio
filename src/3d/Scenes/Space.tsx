import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { planets } from "../../Data/Planets";
import Stars from "./Stars";
import Planet from "./Planet";
import Sun from "./Sun";
import { Vector3 } from "three";

const Space = () => {
  const pos = new Vector3(0, 0, 5);
  const [cameraPosition, setCameraPosition] = useState<Vector3>(pos);
  const [fov, setFov] = useState(75);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        pos.setZ(7);
        setCameraPosition(pos);
        setFov(90);
      } else {
        setCameraPosition(pos);
        setFov(75);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [innerWidth]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Canvas
          className="w-full h-full"
          style={{ background: "#001f" }}
          camera={{
            position: cameraPosition,
            fov: fov,
            near: 0.1,
            far: 1000,
          }}
        >
          <Stars />
          <pointLight position={[0, 0, 0]} intensity={10} />
          <Sun />
          {planets.map(
            (
              { size, map, orbitRadius, position, speedFactor, name },
              index
            ) => (
              <Planet
                key={index}
                size={size}
                map={map}
                orbitRadius={orbitRadius}
                position={position as [x: number, y: number, z: number]}
                speedFactor={speedFactor}
                handleClick={() => console.log(name)}
              />
            )
          )}
          <Preload all />
        </Canvas>
      </div>
    </div>
  );
};

export default Space;
