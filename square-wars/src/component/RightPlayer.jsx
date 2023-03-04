import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "../styles/RightPlayer.module.scss";

export function RightPlayer(props) {
    const { getPositionRitPlyr } = props;
    const [position, setPosition] = useState(350);


    useEffect(() => {
        document.addEventListener("keydown", handleMove);
        let ritDiv = document.getElementById("ritPlyr");
        let ritRect = ritDiv.getBoundingClientRect();
        getPositionRitPlyr(ritRect);



        return () => {
            document.removeEventListener("keydown", handleMove);
        };
    }, [position]);

    function handleMove(e) {
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
            border="1px solid black"
            bg="white"
            w="50px"
            h="50px"
            ml="650px"
            mt={position + "px"}
        // onLoad={handleGetPosition}

        >

        </Box>
        
    </>
    );
}