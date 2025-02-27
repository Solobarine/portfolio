import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef, useState, useMemo, useEffect } from "react";
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
  const { viewport } = useThree();
  const ref = useRef<null | THREE.Mesh>(null);

  const responsiveSize = useMemo(() => {
    const aspectRatio = viewport.width / viewport.height;
    const scaleFactor = aspectRatio < 1 ? 0.7 : 1;
    return size * scaleFactor;
  }, [size, viewport]);

  const responsiveOrbit = useMemo(() => {
    const aspectRatio = viewport.width / viewport.height;
    const scaleFactor = aspectRatio < 1 ? 0.7 : 1;
    return orbitRadius * scaleFactor;
  }, [orbitRadius, viewport]);

  const geometry = useMemo(
    () => new THREE.IcosahedronGeometry(responsiveSize, 4),
    [responsiveSize]
  );

  const texture = useLoader(THREE.TextureLoader, map);

  useEffect(() => {
    if (texture) {
      texture.anisotropy = 16;
    }
  }, [texture]);

  useFrame((_, delta) => {
    setAngle((prev) => prev + delta * speedFactor);
    const planet = ref.current as THREE.Mesh;

    if (planet) {
      const x = responsiveOrbit * Math.cos(angle);
      const z = responsiveOrbit * Math.sin(angle);
      const rotationZ = Math.cos(angle) * (viewport.width < 5 ? 0.7 : 1);

      planet.rotation.z = rotationZ;
      planet.rotation.y += Math.sin(delta * 0.1);
      planet.position.set(x, 0, z);

      if (angle >= 2 * Math.PI) {
        setAngle(0);
        planet.rotation.z = 0;
      }
    }
  });

  return (
    <mesh
      ref={ref}
      geometry={geometry}
      position={position}
      onClick={handleClick}
    >
      <meshStandardMaterial map={texture} roughness={0.8} metalness={0.2} />
    </mesh>
  );
};

export default Planet;
