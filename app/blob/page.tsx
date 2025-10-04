'use client'

import { View } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Blob = dynamic(() => import('@/components/canvas/Examples').then(mod => mod.Blob), { ssr: false })

const Common = dynamic(() => import('@/components/canvas/View').then(mod => mod.Common), { ssr: false })

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5 relative z-10">
        <div className="flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left">
          <p className="w-full uppercase">Next + React Three Fiber</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">Next 3D Starter</h1>
          <p className="mb-8 text-2xl leading-normal">A minimalist starter for React, React-three-fiber and Threejs.</p>
        </div>
      </div>

      <View className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-0">
        <Suspense fallback={null}>
          <Blob />
          <Common />
        </Suspense>
      </View>

    </div>
  )
}
