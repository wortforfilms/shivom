import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeDChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a new scene
    const scene = new THREE.Scene();

    // Create a new camera
    const camera = new THREE.PerspectiveCamera(
      75, // field of view
      containerRef.current.clientWidth / containerRef.current.clientHeight, // aspect ratio
      0.1, // near clipping plane
      1000 // far clipping plane
    );

    // Create a new renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);

    // Add the renderer to the DOM
    containerRef.current.appendChild(renderer.domElement);

    // Create a new cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    // Add the cube to the scene
    scene.add(cube);

    // Position the camera
    camera.position.z = 5;

    // Animate the cube
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up the scene when the component unmounts
    return () => {
      scene.remove(cube);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeDChart;
