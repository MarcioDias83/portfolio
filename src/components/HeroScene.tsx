import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

function FloatingOctahedron({ position, color, speed = 1, distort = 0.4 }: { position: [number, number, number]; color: string; speed?: number; distort?: number }) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3 * speed
      ref.current.rotation.y = state.clock.elapsedTime * 0.2 * speed
    }
  })

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  )
}

function FloatingTorus({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4 * speed
      ref.current.rotation.z = state.clock.elapsedTime * 0.3 * speed
    }
  })

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[0.8, 0.3, 16, 32]} />
        <MeshWobbleMaterial
          color={color}
          attach="material"
          factor={0.4}
          speed={1.5}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

function FloatingIcosahedron({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.25 * speed
      ref.current.rotation.x = state.clock.elapsedTime * 0.15 * speed
    }
  })

  return (
    <Float speed={1.8 * speed} rotationIntensity={0.6} floatIntensity={2.5}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[0.7, 0]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={3}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  )
}

function FloatingTetrahedron({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.35 * speed
      ref.current.rotation.y = state.clock.elapsedTime * 0.45 * speed
    }
  })

  return (
    <Float speed={2 * speed} rotationIntensity={1} floatIntensity={3}>
      <mesh ref={ref} position={position}>
        <tetrahedronGeometry args={[0.6, 0]} />
        <MeshWobbleMaterial
          color={color}
          attach="material"
          factor={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.65}
        />
      </mesh>
    </Float>
  )
}

function Particles({ count = 200 }: { count?: number }) {
  const points = useRef<THREE.Points>(null!)

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02
      points.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlePositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#a29bfe"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function Scene() {
  const { camera } = useThree()

  useFrame((state) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.pointer.x * 0.5, 0.05)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, state.pointer.y * 0.3, 0.05)
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#a29bfe" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#6c5ce7" />
      <pointLight position={[0, 0, 5]} intensity={0.8} color="#fd79a8" />

      <FloatingOctahedron position={[-3, 1, -2]} color="#6c5ce7" speed={0.8} distort={0.5} />
      <FloatingTorus position={[3, -1, -3]} color="#a29bfe" speed={1.2} />
      <FloatingIcosahedron position={[2, 2, -4]} color="#00cec9" speed={0.6} />
      <FloatingTetrahedron position={[-2, -2, -2]} color="#fd79a8" speed={1} />
      <FloatingOctahedron position={[0, 0, -5]} color="#74b9ff" speed={0.5} distort={0.3} />
      <FloatingTorus position={[-4, -1, -4]} color="#fdcb6e" speed={0.7} />

      <Particles count={150} />

      <Environment preset="night" />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
