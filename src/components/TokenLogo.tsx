import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const TokenLogo = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(200, 200);
    mountRef.current.appendChild(renderer.domElement);

    // Create token geometry with more complex shape
    const geometry = new THREE.CylinderGeometry(1, 1, 0.2, 64);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x8B5CF6,
      metalness: 0.7,
      roughness: 0.2,
      envMapIntensity: 1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    
    const token = new THREE.Mesh(geometry, material);
    scene.add(token);

    // Add rim highlight
    const rimGeometry = new THREE.TorusGeometry(1.02, 0.02, 16, 100);
    const rimMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xEC4899,
      emissive: 0xEC4899,
      emissiveIntensity: 0.5
    });
    const rim = new THREE.Mesh(rimGeometry, rimMaterial);
    token.add(rim);

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8B5CF6, 2);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xEC4899, 2);
    pointLight2.position.set(-2, -2, 2);
    scene.add(pointLight2);

    camera.position.z = 5;

    // Animation
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      
      // Smooth rotation
      token.rotation.y += 0.01;
      token.rotation.x = Math.sin(Date.now() * 0.001) * 0.2;
      
      // Pulsing effect
      const scale = 1 + Math.sin(Date.now() * 0.002) * 0.05;
      token.scale.set(scale, scale, scale);
      
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-[200px] h-[200px] mx-auto" />;
};