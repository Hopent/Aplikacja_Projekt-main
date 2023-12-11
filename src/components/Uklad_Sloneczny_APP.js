import React, { Suspense, useState } from "react";
import Dialog from "../pages/Dialog";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import planetData from "../pages/planetData";
import sunTexture from "../textures/sun.jpg";
import "./Uklad_Sloneczny_APP.css";

const Uklad_sloneczny = () => {
  const [dialogData, setDialogData] = useState(null);
  const hideDialog = () => {
    setDialogData(null);
  };
  return (
    <>
      <Dialog hideDialog={hideDialog} dialogData={dialogData} />
      <Canvas camera={{ position: [0, 20, 25], fov: 50 }}>
        <Suspense fallback={null}>
          <Sun />
          {planetData.map((planet) => (
            <Planet
              planet={planet}
              key={planet.id}
              setDialogData={setDialogData}
            />
          ))}
          <Lights />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </>
  );
}
function Sun() {
  const texture = useLoader(THREE.TextureLoader, sunTexture);
  return (
    <mesh>
      <sphereGeometry args={[2.5, 16, 16]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
function Planet({
  planet: {
    xRadius,
    zRadius,
    size,
    speed,
    offset,
    rotationSpeed,
    textureMap,
    name,
  },
  setDialogData
}) {
  const planetRef = React.useRef();
  const texture = useLoader(THREE.TextureLoader, textureMap);
  const [geometry, setGeometry] = React.useState(<sphereGeometry args={[size, 16, 16]} />); // Domyślne użycie sphereGeometry

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = xRadius * Math.sin(t);
    const z = zRadius * 2 * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    if (name.toLowerCase() !== 'ring') {
      planetRef.current.rotation.y += rotationSpeed;
    } else {
      planetRef.current.rotation.y = 0;
      planetRef.current.rotation.x = 1.3;
      planetRef.current.rotation.z += rotationSpeed; 
    }
  });

  React.useEffect(() => {
    if (name.toLowerCase() === 'ring') {
      setGeometry(
        <ringGeometry args={[size * 1.5, size * 2, 16]} /> 
      );
    } else {
      setGeometry(
        <sphereGeometry args={[size, 16, 16]} />
      );
    }
  }, [name, size]);

  return (
    <>
      <mesh
        ref={planetRef}
        onClick={() => {
          setDialogData({ name });
        }}
      >
        {geometry}
        
        <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
        <Html distanceFactor={30}>
          <div className="annotation">{name}</div>
        </Html>
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * 2 * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#393e46" linewidth={10} />
    </line>
  );
}


export default Uklad_sloneczny;