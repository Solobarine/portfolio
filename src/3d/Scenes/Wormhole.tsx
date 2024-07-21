import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { spline } from "../../Utils/scenes";
import * as THREE from "three";
import { boxArray } from "../../Data/Planets";
import Box from "./Box";

const WormHoleMesh = () => {
  const tubeRef = useRef<any>();
  const tubeGeometry = new THREE.TubeGeometry(spline, 200, 2, 50, false);
  const edge = new THREE.EdgesGeometry(tubeGeometry, 0.1);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x22ffff });
  const fog = new THREE.FogExp2(0x000000, 0.1);
  const { camera, scene } = useThree();

  scene.fog = fog;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const looptime = 120;
    const t = (time % looptime) / looptime;
    const position = spline.getPointAt(t);
    const tangent = spline.getTangentAt(t);
    camera.position.copy(
      position.clone().add(tangent.clone().multiplyScalar(-2))
    );
    camera.lookAt(position);
  });

  return (
    <>
      <mesh ref={tubeRef} geometry={tubeGeometry}>
        <meshStandardMaterial color={0xffffff} side={THREE.DoubleSide} />
      </mesh>
      <lineSegments geometry={edge} material={lineMaterial} />
      {boxArray.map((tech, index) => (
        <Box
          key={index}
          index={index}
          logoUrl={tech.url}
          tube={tubeGeometry}
          numberOfBoxes={boxArray.length - 1}
        />
      ))}
    </>
  );
};

const Wormhole = () => {
  return (
    <Canvas id="wormhole" style={{ height: "100vh" }}>
      <ambientLight intensity={1} />
      <OrbitControls />
      <WormHoleMesh />
      <perspectiveCamera fov={75} position={[0, 0, 10]} near={5} far={1000} />
    </Canvas>
  );
};

export default Wormhole;
