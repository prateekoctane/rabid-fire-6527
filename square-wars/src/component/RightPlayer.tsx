import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import styles from "../styles/RightPlayer.module.scss";
import { Position } from "./constant";

type Props = {
    getPositionRitPlyr: (a: Position) => void;
    rightPosition: number;
    setRightPosition: React.Dispatch<React.SetStateAction<number>>;
    blastRight: string;
};

export function RightPlayer(props: Props) {

    const { getPositionRitPlyr, rightPosition, setRightPosition, blastRight } = props;
    // const [rightPosition, setRightPosition] = useState(100);


    useEffect(() => {
        document.addEventListener("keydown", handleMove);
        let ritDiv: HTMLElement | null = document.getElementById("ritPlyr");
        if (ritDiv) {

            let ritRect = ritDiv.getBoundingClientRect();
            getPositionRitPlyr(ritRect);
        }



        return () => {
            document.removeEventListener("keydown", handleMove);
        };
    }, [rightPosition]);

    function handleMove(e: KeyboardEvent) {
        let lef = document.getElementById("left");
        let code = e.code;
        console.log(e.code)
        if (code === "Numpad6") {
            setRightPosition((prev) => prev - 20);
        } else if (code === "Numpad4") {
            setRightPosition((prev) => prev + 20);
        }
    }

    return (<>
        <Box
            id="ritPlyr"

            position="relative"
            // border="1px solid black"
            // bg="white"
            w="100px"
            h="50px"
            ml="450px"
            bottom={rightPosition + "px"}
            zIndex="1"
        // onLoad={handleGetPosition}

        >
            <Image w="100%" src="/ak47m.png" alt="ak47" />
            <Box display={blastRight} w="200px" position="relative" bottom="130px" right="50px"   >

                <Image id="left" display="normal" zIndex="6" w="100%" src="/blast.png" alt="explode" />
            </Box>
        </Box>

    </>
    );
}