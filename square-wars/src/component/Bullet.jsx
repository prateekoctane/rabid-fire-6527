// import { Box } from "@chakra-ui/react";
// import styles from "../styles/bullet.module.css";
import { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";

export function Bullet() {

    
    const [visible,setVisible] = useState("none")
    const [doAnimate,setDoAnimate] = useState("");

    document.addEventListener("keyup", handleBullet);

    // useEffect(()=>{

    // },[])

    function handleBullet(e) {

        if (e.code === "Space") {
            console.log(e.code)

            // document.getElementById("bullet").classList.add("moveRight")
            setDoAnimate('left');
            setVisible("normal")
        }
    }

    return <Box  animate={doAnimate} visible={visible}  >

        </Box>
    
}

const moveLeft = keyframes` 
   from{left:0px}
   to{left: 1400px}
`

const Box = styled.div`
   display: ${props => props.visible === "normal" ? "normal": "none" };
   border: 1px solid white;
   width: 10px;
   heigth: 2px;
   position: relative;
   animation: ${props => {if(props.animate === "left"){ return moveLeft }  } } 1s linear ;
`