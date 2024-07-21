import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const Earth = () => {
  const [angle, setAngle] = useState(0);

  const ref = useRef<any>(null);
  const earthGeo = new THREE.IcosahedronGeometry(2.242, 4);
  const texture = useLoader(
    THREE.TextureLoader,
    "./planets/earth/earthmap.jpg"
  );

  useFrame((_, delta) => {
    setAngle((prev) => prev + delta);

    const radius = 0.5;
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    ref.current.rotation.y += 0.004;
    ref.current?.position.set(x, 0, z);
  });
  return (
    <mesh ref={ref} geometry={earthGeo} position={[0.4, 0, 0]}>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Earth;
