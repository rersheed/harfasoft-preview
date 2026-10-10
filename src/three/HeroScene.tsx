import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface Props { simplified?: boolean; reducedMotion?: boolean; active?: boolean }

/** Network of glowing nodes on a sphere shell, connected to their nearest neighbours. */
function NodeNetwork({ count, radius }: { count: number; radius: number }) {
  const { points, lines } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    // Fibonacci sphere for an even, deterministic distribution
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = golden * i;
      const jitter = 1 + Math.sin(i * 12.9898) * 0.08;
      pts.push(new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r).multiplyScalar(radius * jitter));
    }
    const pos = new Float32Array(pts.flatMap((p) => [p.x, p.y, p.z]));
    const seg: number[] = [];
    const maxDist = radius * 0.62;
    for (let i = 0; i < pts.length; i++) {
      let links = 0;
      for (let j = i + 1; j < pts.length && links < 3; j++) {
        if (pts[i].distanceTo(pts[j]) < maxDist) { seg.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z); links++; }
      }
    }
    return { points: pos, lines: new Float32Array(seg) };
  }, [count, radius]);

  return (
    <group>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#7DD3FC" size={0.07} sizeAttenuation transparent opacity={0.95} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#22D3EE" transparent opacity={0.22} depthWrite={false} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}

function Core({ simplified }: { simplified: boolean }) {
  return (
    <group>
      <mesh>
        <icosahedronGeometry args={[1.05, simplified ? 0 : 1]} />
        <meshStandardMaterial color="#1E5EFF" emissive="#1E3A8A" emissiveIntensity={0.6} metalness={0.55} roughness={0.25} flatShading />
      </mesh>
      <mesh scale={1.32}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color="#22D3EE" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh scale={0.6}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial color="#67E8F9" transparent opacity={0.25} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

function Rings() {
  return (
    <group>
      <mesh rotation={[Math.PI / 2.4, 0.2, 0]}>
        <torusGeometry args={[2.05, 0.012, 8, 160]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, -0.5, 0.4]}>
        <torusGeometry args={[2.35, 0.008, 8, 160]} />
        <meshBasicMaterial color="#60A5FA" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

function Rig({ simplified, reducedMotion }: { simplified: boolean; reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (reducedMotion) return;
    if (spin.current) { spin.current.rotation.y += delta * 0.12; spin.current.rotation.x += delta * 0.03; }
    if (group.current) {
      // subtle mouse parallax
      const tx = state.pointer.y * 0.25;
      const ty = state.pointer.x * 0.35;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, tx, 0.04);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, ty, 0.04);
    }
  });
  const content = (
    <group ref={spin}>
      <Core simplified={simplified} />
      <Rings />
      <NodeNetwork count={simplified ? 70 : 150} radius={2.55} />
    </group>
  );
  return (
    <group ref={group}>
      {reducedMotion ? content : <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>{content}</Float>}
    </group>
  );
}

export default function HeroScene({ simplified = false, reducedMotion = false, active = true }: Props) {
  return (
    <Canvas
      dpr={simplified ? [1, 1.25] : [1, 1.5]}
      camera={{ position: [0, 0, simplified ? 7.4 : 8], fov: 45 }}
      gl={{ antialias: !simplified, alpha: true, powerPreference: 'low-power' }}
      frameloop={reducedMotion ? 'demand' : active ? 'always' : 'never'}
      aria-hidden="true"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 5]} intensity={60} color="#22D3EE" />
      <pointLight position={[-5, -2, 3]} intensity={45} color="#1E5EFF" />
      <directionalLight position={[0, 5, 5]} intensity={0.8} />
      <Rig simplified={simplified} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
