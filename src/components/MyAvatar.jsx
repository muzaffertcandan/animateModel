/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/myAvatar.glb
*/

import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF, useFBX } from "@react-three/drei";
import { useCharacterAnimations } from "../contexts/CharacterAnimation";
import { act } from "@react-three/fiber";

const MyAvatar = (props) => {
  const group = useRef();
  const { animation } = props;
  const { nodes, materials, animations } = useGLTF("./models/myAvatar.glb");
  const { animations: standingAnimation } = useFBX("animations/Standing.fbx");
  const { animations: dancingAnimation } = useFBX("animations/Dancing.fbx");
  const { animations: capoeiraAnimation } = useFBX("animations/Capoeira.fbx");

  const { setAnimations } = useCharacterAnimations(animations, group);
  standingAnimation[0].name = "Standing";
  dancingAnimation[0].name = "Dancing";
  capoeiraAnimation[0].name = "Capoeira";

  const { actions, names } = useAnimations(
    [dancingAnimation[0], capoeiraAnimation[0], standingAnimation[0]],
    group
  );

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);
  // rotation-x={-Math.PI / 2}
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          castShadow
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          castShadow
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          castShadow
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          castShadow
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          castShadow
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          castShadow
          name="Wolf3D_Outfit_Top"
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
        />
        <skinnedMesh
          castShadow
          name="Wolf3D_Outfit_Bottom"
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences
          }
        />
        <skinnedMesh
          castShadow
          name="Wolf3D_Outfit_Footwear"
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
          }
        />
        <skinnedMesh
          castShadow
          name="Wolf3D_Body"
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
        />
      </group>
    </group>
  );
};
export default MyAvatar;
useGLTF.preload("./models/myAvatar.glb");
