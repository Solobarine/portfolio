import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Box = ({
  index,
  tube,
  logoUrl,
  numberOfBoxes,
}: {
  index: number;
  tube: THREE.TubeGeometry;
  logoUrl: string;
  numberOfBoxes: number;
}) => {
  const geometry = new THREE.BoxGeometry(0.075, 0.075, 0.075);
  const ref = useRef<any>(null);
  const texture = useLoader(THREE.TextureLoader, logoUrl);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map: texture,
  });

  const point = ((index / numberOfBoxes) * Math.random() + 0.3) % 1;
  const position = tube.parameters.path.getPointAt(point);
  //position.x += Math.random() - 0.4;
  //position.z += Math.random() - 0.4;

  if (ref.current) {
    ref.current.position.copy(position);
  }

  return (
    <>
      <mesh ref={ref} geometry={geometry} material={material}></mesh>
    </>
  );
};

export default Box;
