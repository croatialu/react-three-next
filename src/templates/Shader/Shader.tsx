// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck
import { shaderMaterial } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import * as THREE from 'three'
import fragment from './glsl/shader.frag'
import vertex from './glsl/shader.vert'

const ShaderImpl = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.05, 0.0, 0.025),
  },
  vertex,
  fragment,
)

extend({ ShaderImpl })

const Shader = forwardRef(({ children, ...props }: { children: React.ReactNode }, ref) => {
  const localRef = useRef<{ time: number }>({ time: 0 })

  useImperativeHandle(ref, () => localRef.current)

  useFrame((_, delta) => (localRef.current.time += delta))
  return <ShaderImpl ref={localRef} glsl={THREE.GLSL3} {...props} attach="material" />
})

export default Shader
