import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import styles from "../styles/RightPlayer.module.scss";
import {Position }from "./constant";

type Props = {
    getPositionRitPlyr: (a: Position) => void;
  };

export function RightPlayer(props:Props) {
    const { getPositionRitPlyr } = props;
    const [position, setPosition] = useState(100);


    useEffect(() => {
        document.addEventListener("keydown", handleMove);
        let ritDiv : HTMLElement | null = document.getElementById("ritPlyr");
        if(ritDiv){

            let ritRect = ritDiv.getBoundingClientRect();
            getPositionRitPlyr(ritRect);
        }



        return () => {
            document.removeEventListener("keydown", handleMove);
        };
    }, [position]);

    function handleMove(e:KeyboardEvent) {
        let lef = document.getElementById("left");
        let code = e.code;
        console.log(e.code)
        if (code === "Numpad6") {
            setPosition((prev) => prev - 20);
        } else if (code === "Numpad4") {
            setPosition((prev) => prev + 20);
        }
    }

    return (<>
        <Box
            id="ritPlyr"

            position="relative"
            border="1px solid crimson"
            // bg="white"
            w="100px"
            h="100px"
            ml="450px"
            mt={position + "px"}
            zIndex="1"
        // onLoad={handleGetPosition}

        >
          <Image  w="100%" src="/ak47m.png" alt="ak47" />
        </Box>
        
    </>
    );
}