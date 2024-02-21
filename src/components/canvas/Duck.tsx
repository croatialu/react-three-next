'use client'

import { useMatcapTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Duck({ ...props }) {
  const [matcap, url] = useMatcapTexture(
    50, // index of the matcap texture https://github.com/emmelleppi/matcaps/blob/master/matcap-list.json
    1024, // size of the texture ( 64, 128, 256, 512, 1024 )
  )

  const meshRef = useRef<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>>()

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <>
      <mesh ref={meshRef} {...props}>
        <boxGeometry args={[1, 2]} />
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
    </>
  )
}
