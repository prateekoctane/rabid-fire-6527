import { Box } from "@chakra-ui/react";
import styles from "../styles/LeftPlayer.css";



export function LeftPlayer(){

    
    document.addEventListener("keyup",handleMove);
    function handleMove(e){
        let lef = document.getElementById("left"); 
            let code = e.code;
            if(code === "ArrowUp"){
                
                lef.style.bottom = lef.offsetTop - (lef.offsetTop-50) + "px";
               
            }else if(code === "ArrowDown"){
                lef.style.top = lef.offsetTop - (lef.offsetTop-50) + "px";
        }
    }

    return <Box id="left" position="relative"  border="1px solid black" bg="white" w="50px" h="50px" ml="50px" mt="350px" >
            
        </Box>
    // </Box>
   
}

