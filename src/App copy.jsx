import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GUI } from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './styles.css';

function App() {
  useEffect(() => {
    const gui = new GUI();
    // gui.add(directionalLight, 'intensity', 0, 10);
    // gui.add(directionalLight.position, 'x', 0, 20);
    // gui.add(directionalLight.position, 'y', 0, 20);
    // gui.add(directionalLight.position, 'z', 0, 20);
    // const colorFolder = gui.addFolder('Color');
    // const color = colorFolder.addColor(geometryBaseColor, 'hex');

    const container = document.getElementById('shape-holder');
    const canvasWidth = container.offsetWidth;
    const canvasHeight = container.offsetHeight;

    console.log('canvasWidth: ', canvasWidth);

    // create a renderer
    const renderer = new THREE.WebGLRenderer({
      container,
      antialias: true,
      alpha: true,
    });

    renderer.setClearColor(0xffffff);
    renderer.setPixelRatio(devicePixelRatio);
    renderer.setSize(canvasWidth, canvasHeight);
    // container.removeChild(renderer.domElement);
    container.appendChild(renderer.domElement);

    // create a scene
    const scene = new THREE.Scene();
    scene.clear();

    // create a camera
    const camera = new THREE.PerspectiveCamera(
      1000, // field of view
      canvasWidth / canvasHeight, // aspect ratio
      1, // near
      5000 // far
    );

    // position the camera so you're not on top of the geometry
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 200;
    scene.add(camera);

    const orbit = new OrbitControls(camera, renderer.domElement);
    // orbit.enableZoom = false;

    // create geometry
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    // create a shiny material
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
    });
    //create a mesh, which takes a geometry and a material
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // create lights
    const light01 = new THREE.PointLight(0xff7700, 1, 200);
    // light01.castShadow = true;
    light01.position.set(300, 300, 300);

    const light02 = new THREE.PointLight(0xae0000, 1, 200);
    // light02.castShadow = true;
    light02.position.set(300, 300, 300);

    scene.add(light01);
    scene.add(light02);

    const render = () => {
      animate();
      requestAnimationFrame(render);
      renderer.clear();
      renderer.render(scene, camera);
    };

    const animate = () => {
      mesh.rotation.x += 0.03;
      mesh.rotation.z += 0.03;
    };

    render();
  }, []);

  return <div id="shape-holder"></div>;
}

export default App;
