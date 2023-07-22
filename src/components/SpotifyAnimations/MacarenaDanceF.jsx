/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 public/SpotifyMacarenaDance.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from "react";

export function MacarenaDanceF(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/SpotifyMacarenaDanceF.glb')
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []) 

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="base" geometry={nodes.base.geometry} material={materials.skin} skeleton={nodes.base.skeleton} />
          <skinnedMesh name="brows" geometry={nodes.brows.geometry} material={materials['Eye brows']} skeleton={nodes.brows.skeleton} />
          <group name="DMAD_cornea_l">
            <skinnedMesh name="Sphere003" geometry={nodes.Sphere003.geometry} material={materials.corneaMAT} skeleton={nodes.Sphere003.skeleton} />
            <skinnedMesh name="Sphere003_1" geometry={nodes.Sphere003_1.geometry} material={materials['Material.003']} skeleton={nodes.Sphere003_1.skeleton} />
            <skinnedMesh name="Sphere003_2" geometry={nodes.Sphere003_2.geometry} material={materials['Material.004']} skeleton={nodes.Sphere003_2.skeleton} />
          </group>
          <skinnedMesh name="hoodie_ball" geometry={nodes.hoodie_ball.geometry} material={materials['hoodie ring']} skeleton={nodes.hoodie_ball.skeleton} />
          <skinnedMesh name="hoodie_cap" geometry={nodes.hoodie_cap.geometry} material={materials.Top} skeleton={nodes.hoodie_cap.skeleton} />
          <skinnedMesh name="hoodie_ring" geometry={nodes.hoodie_ring.geometry} material={materials['hoodie ring']} skeleton={nodes.hoodie_ring.skeleton} />
          <skinnedMesh name="hoodie_wire" geometry={nodes.hoodie_wire.geometry} material={materials.Top} skeleton={nodes.hoodie_wire.skeleton} />
          <skinnedMesh name="lash" geometry={nodes.lash.geometry} material={materials['Eye brows']} skeleton={nodes.lash.skeleton} />
          <skinnedMesh name="Main" geometry={nodes.Main.geometry} material={materials.Hair} skeleton={nodes.Main.skeleton} />
          <group name="shoes">
            <skinnedMesh name="Mesh016" geometry={nodes.Mesh016.geometry} material={materials.Shirt1} skeleton={nodes.Mesh016.skeleton} />
            <skinnedMesh name="Mesh016_1" geometry={nodes.Mesh016_1.geometry} material={materials.Pants1} skeleton={nodes.Mesh016_1.skeleton} />
          </group>
          <skinnedMesh name="skirt" geometry={nodes.skirt.geometry} material={materials.Bottom} skeleton={nodes.skirt.skeleton} />
          <skinnedMesh name="Tshirt" geometry={nodes.Tshirt.geometry} material={materials.Top} skeleton={nodes.Tshirt.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/SpotifyMacarenaDanceF.glb')