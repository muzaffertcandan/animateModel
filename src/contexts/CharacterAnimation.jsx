import { createContext, useContext, useState } from "react";

const CharacterAnimationContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
    const [animationIndex, setAnimationIndex] = useState(0)


    return (
    <CharacterAnimationContext.Provider value={{}}>
      {props.children}
    </CharacterAnimationContext.Provider>
  );
};

export default useCharacterAnimations = () =>{
    return useContext(CharacterAnimationContext)
}