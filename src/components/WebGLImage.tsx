import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function DistortionPlane({ image }: { image: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  const [texture] = useState(() => new THREE.TextureLoader().load(image))

  const uniforms = useRef({
    uTime: { value: 0 },
    uHover: { value: 0 },
    uTexture: { value: texture },
  })

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.current.uTime.value = state.clock.elapsedTime
      uniforms.current.uHover.value = THREE.MathUtils.lerp(
        uniforms.current.uHover.value,
        hovered ? 1 : 0,
        0.1
      )
    }
  })

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <planeGeometry args={[4, 3, 32, 32]} />
      <shaderMaterial
        uniforms={uniforms.current}
        vertexShader={`
          uniform float uTime;
          uniform float uHover;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 pos = position;
            float dist = length(pos.xy);
            pos.z += sin(dist * 3.0 - uTime * 2.0) * 0.1 * uHover;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform sampler2D uTexture;
          uniform float uHover;
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vec2 uv = vUv;
            uv.x += sin(uv.y * 10.0 + uTime) * 0.01 * uHover;
            uv.y += cos(uv.x * 10.0 + uTime) * 0.01 * uHover;
            vec4 color = texture2D(uTexture, uv);
            float vignette = 1.0 - smoothstep(0.3, 0.9, length(vUv - 0.5));
            color.rgb *= mix(1.0, vignette, 0.3);
            gl_FragColor = color;
          }
        `}
      />
    </mesh>
  )
}

export default function WebGLImage({ src, className = '' }: { src: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <DistortionPlane image={src} />
      </Canvas>
    </div>
  )
}
