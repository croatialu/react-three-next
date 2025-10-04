// import THREE from 'three'
declare global {
  namespace THREE {
    export * from 'three'
  }
}

declare module '*.glsl' {
  const content: string
  export default content
}

declare module '*.vert' {
  const content: string
  export default content
}

declare module '*.frag' {
  const content: string
  export default content
}

export { }
