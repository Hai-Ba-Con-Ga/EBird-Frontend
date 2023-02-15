/* eslint-disable */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/phoenix/phoenix.glb -t -k -r
Author: NORBERTO-3D (https://sketchfab.com/norberto3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
Title: phoenix bird
*/
import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh
    Object_8: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    MatI_Ride_FengHuang_01a: THREE.MeshStandardMaterial
    MatI_Ride_FengHuang_01b: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Take 001'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Phoenix(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/models/phoenix/phoenix.glb') as GLTFResult
  const { actions ,names} = useAnimations<any>(animations as any, group as any)
  useEffect(() => {
    actions[names[0]]?.reset().fadeIn(0.5).play();
  }, [])
  
  return (
    <group ref={group as any} {...props} position ={[0,-1,-6]} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[-0.62, 0, -17.14]} rotation={[-Math.PI / 2, 0, 0.05]}>
          <group name="5f59736c86d4457fa045aec4aea6b7e0fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="AMesh_Ride_FengHuang_01" rotation={[-Math.PI / 2, 0, 0]} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry}  skeleton={nodes.Object_7.skeleton}  material={materials.MatI_Ride_FengHuang_01a}> 
                    
                  </skinnedMesh>
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry}  skeleton={nodes.Object_8.skeleton} 
                  material={materials.MatI_Ride_FengHuang_01b}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
export default Phoenix;
useGLTF.preload('/models/phoenix/phoenix.glb')
