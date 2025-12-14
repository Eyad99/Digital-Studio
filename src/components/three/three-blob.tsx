'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type * as THREE from 'three';

function BlobMesh() {
	const meshRef = useRef<THREE.Mesh>(null);
	const timeRef = useRef(0);

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.x += 0.001;
			meshRef.current.rotation.y += 0.002;
			timeRef.current += 0.01;
		}
	});

	return (
		<mesh ref={meshRef} scale={2}>
			<icosahedronGeometry args={[1, 6]} />
			<meshPhongMaterial color='#7c3aed' emissive='#a855f7' shininess={100} wireframe={false} />
		</mesh>
	);
}

export function ThreeBlob() {
	return (
		<div className='absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 -z-10'>
			<Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
				<ambientLight intensity={0.8} />
				<pointLight position={[10, 10, 10]} intensity={1.2} color='#fbbf24' />
				<pointLight position={[-10, -10, 10]} intensity={0.8} color='#a855f7' />
				<BlobMesh />
			</Canvas>
		</div>
	);
}
