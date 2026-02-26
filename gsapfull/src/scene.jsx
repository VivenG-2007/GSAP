import React from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from "three";

export default function Scene() {
    let tex = useTexture("/image.png")
    console.log(tex)
    tex.needsUpdate = true;
    return (
        <mesh>
            <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
            <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
    )
}
