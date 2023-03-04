import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "../styles/LeftPlayer.css";

export function LeftPlayer(props) {

  const {getPositionLeftPlyr} = props;
  const [position, setPosition] = useState(350);

  useEffect(() => {

    document.addEventListener("keydown", handleMove);
    let leftDiv = document.getElementById("ritPlyr");
        let leftRect = leftDiv.getBoundingClientRect();
        getPositionLeftPlyr(leftRect);
        
    return () => {
      document.removeEventListener("keydown", handleMove);
    };
  }, [position]);

  function handleMove(e) {
    let lef = document.getElementById("left");
    let code = e.code;
    console.log(e.code)
    if (code === "KeyA") {
      setPosition((prev) => prev - 20);
    } else if (code === "KeyD") {
      setPosition((prev) => prev + 20);
    }
  }

  return (
    <Box
      id="left"
      position="relative"
      border="1px solid black"
      bg="white"
      w="50px"
      h="50px"
      ml="50px"
      mt={position + "px"}
    ></Box>
  );
}









// import { Box } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import styles from "../styles/LeftPlayer.css";



// export function LeftPlayer(){

//     const [key, setKey] = useState(0);

//     useEffect(()=>{
        

//         document.addEventListener("keyup",handleMove);
//     },[key])


//     function handleMove(e){
//         let lef = document.getElementById("left"); 
//             let code = e.code;
//             if(code === "ArrowUp"){
//                 console.log(lef.offsetTop)
//                 setKey(key + 1);
//                 // lef.style.bottom = lef.offsetTop - (lef.offsetTop-50) + "px";
//                lef.style.bottom = "20px"
//             }else if(code === "ArrowDown"){
//                 lef.style.top = lef.offsetTop - (lef.offsetTop-50) + "px";
//         }
//     }
    
    

//     return <Box id="left" position="relative"  border="1px solid black" bg="white" w="50px" h="50px" ml="50px" mt="350px" >
            
//         </Box>
   
   
// }

