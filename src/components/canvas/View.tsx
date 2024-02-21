'use client'

import { View, ViewProps } from '@react-three/drei'

export default View as {
  Port: () => React.ReactNode;
} & React.ForwardRefExoticComponent<Omit<ViewProps, 'track'> & React.RefAttributes<HTMLElement | THREE.Group>>;

