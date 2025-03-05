import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GUI } from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './styles.css';
import { render } from 'react-dom';

function App() {
  useEffect(() => {
    const container = document.getElementById('shape-holder');
    const canvasWidth = container.offsetWidth;
    const canvasHeight = container.offsetHeight;

    // create a renderer
    const renderer = new THREE.WebGLRenderer({
      container,
      antialias: true,
      alpha: true,
    });

    renderer.setClearColor(0xffffff);
    renderer.setPixelRatio(devicePixelRatio);
    renderer.setSize(canvasWidth, canvasHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

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

    const shape = new THREE.CircleGeometry(200);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
    });
    const mesh = new THREE.Mesh(shape, material);
    scene.add(mesh);

    renderer.render(scene, camera);
  }, []);

  return <div id="shape-holder"></div>;
}

export default App;
