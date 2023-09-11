import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Stack, Text, Transition, rem } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimation";

const Interface = () => {
  const { animations, animationIndex } = useCharacterAnimations();
  return (
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Stack>
          {animations.map((animation, index) => {
            <Button key={animation} variant={index == animationIndex = "filled" : "light"}>{animation}</Button>;
          })}
        </Stack>
      </Affix>
  );
};

export default Interface;
