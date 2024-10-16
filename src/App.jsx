import React, { useEffect } from 'react';
import * as THREE from 'three';
// import { GUI } from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function App() {
  useEffect(() => {
    // const gui = new dat.GUI();

    // create a renderer
    const canvas = document.getElementById('myThreeJSCanvas');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setClearColor(0xffffff);
    renderer.setPixelRatio(devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // create a scene
    const scene = new THREE.Scene();

    // create a camera
    const camera = new THREE.PerspectiveCamera(
      1000, // field of view
      window.innerWidth / window.innerHeight, // aspect ratio
      1, // near
      5000 // far
    );

    const orbit = new OrbitControls(camera, renderer.domElement);
    // orbit.enableZoom = false;

    // position the camera so you're not on top of the geometry
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 400;
    scene.add(camera);

    // create lights
    const pointtLight01 = new THREE.AmbientLight(0xff7700, 2, 2000);
    // ambientLight.castShadow = true;
    pointtLight01.position.set(200, 0, 200);
    scene.add(pointtLight01);

    const pointtLight02 = new THREE.AmbientLight(0xff7700, 2, 2000);
    // spotLight.castShadow = true;
    pointtLight02.position.set(0, 0, 200);
    scene.add(pointtLight02);

    // create geometry
    const boxGeometry = new THREE.BoxGeometry(100, 100, 100);
    const boxMaterial = new THREE.MeshPhongMaterial({
      color: 0xff0000,
    });
    // const boxMaterial = new THREE.MeshNormalMaterial();
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
