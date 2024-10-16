import React, { useEffect } from 'react';
import * as THREE from 'three';

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      1000,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 100;

    const canvas = document.getElementById('myThreeJSCanvas');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    // renderer.setClearColor(0xffffff);
    // renderer.setPixelRatio(devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    const animate = () => {
      boxMesh.rotation.x += 0.03;
      boxMesh.rotation.z += 0.03;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div id="holder">
      <canvas id="myThreeJSCanvas" />
    </div>
  );
}

export default App;
