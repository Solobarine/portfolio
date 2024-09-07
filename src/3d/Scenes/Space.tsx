import Stars from "./Stars";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { planets } from "../../Data/Planets";
import Planet from "./Planet";
import Sun from "./Sun";

const Space = () => {
  return (
    <div style={{ position: "relative", display: "flex" }}>
      <Canvas
        style={{ background: "#001f", height: "100vh", width: "100%" }}
        camera={{ position: [0, 0, 5] }}
      >
        <Stars />
        <perspectiveCamera
          fov={120}
          aspect={innerWidth / innerHeight}
          near={0.1}
          far={1000}
        />
        <pointLight position={[0, 0, 0]} intensity={10} />
        <Sun />
        {planets.map(
          ({ size, map, orbitRadius, position, speedFactor, name }, index) => (
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
  );
};

export default Space;
