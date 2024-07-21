import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useRef } from "react";

const Stars = () => {
  const ref = useRef<any>();
  const sphere = random.inSphere(new Float32Array(3000), { radius: 15 });

  return (
    <mesh>
      <group>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled>
          <PointMaterial
            transparent
            color="#ddd"
            size={0.04}
            sizeAttentuation={true}
            depthWrite={true}
          />
        </Points>
      </group>
    </mesh>
  );
};

export default Stars;
