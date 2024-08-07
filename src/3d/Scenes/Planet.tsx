import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const Planet = ({
  size,
  map,
  orbitRadius,
  position,
  speedFactor,
  handleClick,
}: {
  size: number;
  map: string;
  bump?: null | string;
  orbitRadius: number;
  position: [x: number, y: number, z: number];
  speedFactor: number;
  handleClick: () => void;
}) => {
  const [angle, setAngle] = useState(0);

  const ref = useRef<null | THREE.Mesh>(null);
  const geometry = new THREE.IcosahedronGeometry(size, 4);
  const texture = useLoader(THREE.TextureLoader, map);

  useFrame((_, delta) => {
    setAngle((prev) => prev + delta * speedFactor);
    const planet = ref.current as THREE.Mesh;
    const x = orbitRadius * Math.cos(angle);
    const z = orbitRadius * Math.sin(angle);
    planet.rotation.y += 0.004;
    planet.position.set(x, 0, z);
  });
  return (
    <mesh
      ref={ref}
      geometry={geometry}
      position={position}
      onClick={handleClick}
    >
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Planet;
