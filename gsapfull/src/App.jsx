import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./scene.jsx";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <Scene />
      </Canvas>
    </div>
  );
};
export default App;
