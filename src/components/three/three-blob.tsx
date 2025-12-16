import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type * as THREE from 'three';

function BlobMesh() {
	const meshRef = useRef<THREE.Mesh>(null);

	useFrame(() => {
		if (!meshRef.current) return;
		meshRef.current.rotation.x += 0.004;
		meshRef.current.rotation.y += 0.006;
	});

	return (
		<mesh ref={meshRef} scale={2} castShadow receiveShadow>
			<icosahedronGeometry args={[1, 2]} />
			<meshStandardMaterial color='#7c3aed' emissive='#a855f7' metalness={0.4} roughness={0.25} />
		</mesh>
	);
}

export function ThreeBlob() {
	return (
		<div className='absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 z-10'>
			<Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
				<ambientLight intensity={0.3} />
				<directionalLight position={[5, 5, 5]} intensity={1.5} castShadow color='#fbbf24' />
				<directionalLight position={[-5, -5, -5]} intensity={0.5} color='#a855f7' />
				<BlobMesh />
			</Canvas>
		</div>
	);
}
