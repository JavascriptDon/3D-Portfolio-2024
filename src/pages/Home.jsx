/* eslint-disable react/no-unknown-property */
import React, { useState, Suspense, useEffect, useRef} from 'react'
import {Canvas} from '@react-three/fiber';
import Loader from '../components/Loader';
import {Island} from '../models/Island.jsx';
import Sky from '../models/Sky.jsx';
import Bird from '../models/Bird.jsx';
import Plane from '../models/Plane.jsx';
import HomeInfo from '../components/HomeInfo.jsx';
import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/music/sakura.mp3";
// import {ChillIsland} from "../models/Chill_Island.jsx";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4.5, -4.5];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale= null;
    let screenPosition = [0, -6.5, -50];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={3} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor='#CCEBFF'
            groundColor='#000000'
            intensity={1}
          />
          <Bird/>
          <Sky isRotating={isRotating}/>
           <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          /> 
          {/* <ChillIsland 
                      position={islandPosition}
                      scale={islandScale}
                      rotation={islandRotation}
                      isRotating={isRotating}
                      setIsRotating={setIsRotating}
                      setCurrentStage={setCurrentStage}
          />*/}
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img 
        src={ !isPlayingMusic ? soundoff : soundon}
        alt="sound"
        className='w-10 h-10 cursor-pointer object-contain'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;

// Credit: https://github.com/adrianhajdin/3D_portfolio
