// import { AnimationClip, Mesh } from "three";

import { MutableRefObject, Suspense, useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import CanvasLoader from "@utils/Loader";
import redPlaneScene from "@assets/3d/red_biplane.glb";

// import { Object3D } from "three";

// import redPlaneScene from "../assets/3d/red_biplane.glb";

interface RedBiPlaneProps {
  scale: [number, number, number];
  position: [number, number, number];
  rotationX?: number;
  rotationY?: number;
}

interface RedPlaneCanvasProps {
  scrollContainer: MutableRefObject<HTMLDivElement | null>;
}

// interface GLTFResult {
//   scene: Mesh;
//   animations: AnimationClip[];
// }

const RedBiPlane: React.FC<RedBiPlaneProps> = ({
  scale,
  position,
  rotationX,
  rotationY,
}) => {
  //   const redPlaneRef = useRef<Object3D | null>(null);
  const redPlaneRef = useRef(null);
  //   const { scene, animations } = useGLTF(redPlaneScene) as GLTFResult; // `useGLTF` returns a general object. Narrow it as needed.
  const { scene, animations } = useGLTF(redPlaneScene);
  const { actions } = useAnimations(animations, redPlaneRef);

  useEffect(() => {
    if (actions && actions["Animation"]) {
      actions["Animation"].play();
    }
  }, [actions]);

  return (
    <mesh
      ref={redPlaneRef}
      position={position}
      scale={scale}
      rotation={[
        rotationX ?? 0, // Default to 0 if rotationX is undefined
        rotationY ?? -47 * (Math.PI / 180),
        -8 * (Math.PI / 180),
      ]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

const RedPlaneCanvas: React.FC<RedPlaneCanvasProps> = ({ scrollContainer }) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState<[number, number, number]>([1, 1, 1]);
  const [position, setPosition] = useState<[number, number, number]>([
    2.5, -3.5, -1.25,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainer.current) {
        const scrollTop = scrollContainer.current.scrollTop;
        const rotationXValue = scrollTop * -0.0006;
        const rotationYValue = scrollTop * -0.00075;
        setRotationX(rotationXValue);
        setRotationY(rotationYValue);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([0.75, 0.75, 0.75]);
        setPosition([0, -3.05, -1.25]);
      } else if (window.innerWidth < 1024) {
        setScale([0.85, 0.85, 0.85]);
        setPosition([0, -3.05, -1.25]);
      } else if (window.innerWidth < 1280) {
        setScale([1, 1, 1]);
        setPosition([0, -3.05, -1.5]);
      } else if (window.innerWidth < 1536) {
        setScale([0.85, 0.85, 0.85]);
        setPosition([1.0, -2.5, -1.25]);
      } else {
        setScale([1, 1, 1]);
        setPosition([2.25, -3.05, -1.25]);
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  return (
    <Canvas
      className={`w-full h-screen bg-transparent z-10`}
      camera={{ near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <hemisphereLight
          //   skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        />

        <RedBiPlane
          rotationX={rotationX}
          rotationY={rotationY}
          scale={scale}
          position={position}
        />
      </Suspense>
    </Canvas>
  );
};

export default RedPlaneCanvas;
