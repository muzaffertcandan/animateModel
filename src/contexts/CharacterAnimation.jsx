import { createContext, useContext, useState } from "react";

const CharacterAnimationContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState([]);

  
  return (
    <CharacterAnimationContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
      }}
    >
      {props.children}
    </CharacterAnimationContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationContext);
};
