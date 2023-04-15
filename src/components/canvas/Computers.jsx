import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./sphere/scene.gltf");

  return (
    <mesh 
    position={[0,0,0]}
    >
      <hemisphereLight intensity={0} groundColor={'#000000'} />
      <spotLight
        position={[20, 40, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.24}
        color={'#EC9131'}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <pointLight 
      
      castShadow
      intensity={0.43}
      position={[1,2,3]}
      color={'#EC9131'}
      shadow-mapSize={512}
      /> */}
      <primitive
       
        object={computer.scene}
        rotation={[0.1,0.1,0]}
        position-y={-4}
        position-x={0}
        scale={isMobile ? 0.22 : 0.28}
        // position={isMobile ? [0, -4, 0] : [0, -3.25, 0]}

      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      position={[9,0,0]}
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [-20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2 }
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
