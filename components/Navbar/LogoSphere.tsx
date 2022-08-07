/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Rintaro Akamine (https://sketchfab.com/redpeak)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/fibonacci-sphere-a2fb905713944253a93ed36f5903d617
title: Fibonacci Sphere
*/

import React, { useEffect, useRef ,useState} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame} from "@react-three/fiber"
import { prepareServerlessUrl } from 'next/dist/server/base-server'

function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  let [position,setPosition] = useState({
    x:0,
    y:0
  })
  useFrame((state, delta) => {
    setPosition({
      x:position.x+0.05,
      y:position.y+0.05
    })
  })
  return (
    <group {...props} dispose={null} scale = {0.025}>
      <group position={[0.02, 0.01, 0]} rotation={[-Math.PI / 2, position.x,position.y]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.geo1__0.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.geo1__0_1.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.geo1__0_2.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.geo1__0_3.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.geo1__0_4.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.geo1__0_5.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.geo1__0_6.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.geo1__0_7.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.geo1__0_8.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.geo1__0_9.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.geo1__0_10.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.geo1__0_11.geometry} material={materials['Scene_-_Root']} />
          <group position={[0, -1094.11, 1.23]} rotation={[0, Math.PI / 2, 0]} />
          <group position={[350850.5, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')



export default Model;
