import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ParticleSystem() {
	const pointsRef = useRef<THREE.Points>(null);
	const positionsRef = useRef<Float32Array | null>(null);
	const velocitiesRef = useRef<Float32Array | null>(null);

	useEffect(() => {
		const particleCount = 800;

		const positions = new Float32Array(particleCount * 3);
		const velocities = new Float32Array(particleCount * 3);

		for (let i = 0; i < particleCount * 3; i += 3) {
			positions[i] = (Math.random() - 0.5) * 40;
			positions[i + 1] = (Math.random() - 0.5) * 40;
			positions[i + 2] = (Math.random() - 0.5) * 40;

			velocities[i] = (Math.random() - 0.5) * 0.05;
			velocities[i + 1] = (Math.random() - 0.5) * 0.05;
			velocities[i + 2] = (Math.random() - 0.5) * 0.05;
		}

		positionsRef.current = positions;
		velocitiesRef.current = velocities;

		if (pointsRef.current) {
			const geometry = pointsRef.current.geometry;
			geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		}
	}, []);

	useFrame(() => {
		if (!pointsRef.current || !positionsRef.current || !velocitiesRef.current) return;

		const positions = positionsRef.current;
		const velocities = velocitiesRef.current;

		for (let i = 0; i < positions.length; i += 3) {
			positions[i] += velocities[i];
			positions[i + 1] += velocities[i + 1];
			positions[i + 2] += velocities[i + 2];

			if (Math.abs(positions[i]) > 20) velocities[i] *= -1;
			if (Math.abs(positions[i + 1]) > 20) velocities[i + 1] *= -1;
			if (Math.abs(positions[i + 2]) > 20) velocities[i + 2] *= -1;
		}

		pointsRef.current.geometry.attributes.position.needsUpdate = true;
	});

	return (
		<points ref={pointsRef}>
			<bufferGeometry />
			<pointsMaterial size={0.1} color='#a855f7' transparent opacity={0.6} />
		</points>
	);
}

export function ThreeParticles() {
	return (
		<div className='fixed inset-0 h-screen w-screen pointer-events-none'>
			<Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
				<ParticleSystem />
			</Canvas>
		</div>
	);
}
