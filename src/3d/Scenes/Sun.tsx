import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Sun = () => {
  const ref = useRef<null | THREE.Mesh>(null);
  const geometry = new THREE.IcosahedronGeometry(2.242, 4);
  const texture = useLoader(THREE.TextureLoader, "./planets/sun.avif");

  const lightRef = useRef<null | THREE.PointLight>(null);

  useEffect(() => {
    // Add a helper to visualize the light's position
    if (lightRef.current) {
      const helper = new THREE.PointLightHelper(lightRef.current);
      lightRef.current.add(helper);
    }
  }, []);

  useFrame((_, delta) => {
    const sun = ref.current as THREE.Mesh;
    sun.rotation.y += Math.sin(delta * 0.1);
  });

  return (
    <mesh ref={ref} geometry={geometry} position={[0.4, 0, 0]}>
      <meshBasicMaterial
        map={texture}
        //emissive={"yellow"}
        // emissiveIntensity={2}
      />
      <pointLight position={[0, 0, 0]} intensity={100} />
    </mesh>
  );
};

export default Sun;
