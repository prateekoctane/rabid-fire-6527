import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "../styles/LeftPlayer.css";
import { Position } from "./constant";

type Props = {
  getPositionLeftPlyr: (a: Position) => void;
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
  blastLeft: string;

}
export function LeftPlayer(props: Props) {

  const { getPositionLeftPlyr, position, setPosition, blastLeft } = props;



  useEffect(() => {

    document.addEventListener("keydown", handleMove);
    let leftDiv: HTMLElement | null = document.getElementById("left");
    if (leftDiv) {
      let leftRect = leftDiv.getBoundingClientRect();
      // console.log(leftRect,"left players position")
      getPositionLeftPlyr(leftRect);
    }

    return () => {
      document.removeEventListener("keydown", handleMove);
    };
  }, [position]);

  function handleMove(e: KeyboardEvent) {
    let lef = document.getElementById("left");
    let code = e.code;
    // console.log(e.code)
    if (code === "KeyA") {
      setPosition((prev) => prev - 20);
    } else if (code === "KeyD") {
      setPosition((prev) => prev + 20);
    }
  }
  // console.log("position",position)
  return (
    <Box
      id="left"
      position="relative"
      // border="1px solid black"
      // bg="white"
      w="100px"
      h="50px"
      ml="50px"
      // mt={position + "px"}
      bottom={position + "px"}
      zIndex="1"
    >

      <Image w="100%" src="/ak47.png" alt="ak47" />
      <Box display={blastLeft} w="200px" position="relative" bottom="130px" right="50px"   >

        <Image id="left" display="normal" zIndex="6" w="100%" src="/blast.png" alt="explode" />
      </Box>
    </Box>
  );
}








