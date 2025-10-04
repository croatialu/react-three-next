import antfu from '@antfu/eslint-config'

export default antfu({
  next: true,
}, {
  ignores: ['node_modules', 'dist', 'build', 'public', '.next'],
})
