import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";


export function BulletLeft(props) {
  
  let {getPositionBulletLeft} = props;

  const [visible, setVisible] = useState("none");
  const [doAnimate, setDoAnimate] = useState(false);
  const [key, setKey] = useState(0);
  const boxRef = useRef(null);

  let animationFrameId;
 

 
  function updateBoxPosition() {
    
    if (boxRef.current) {
      let boxRect = boxRef.current.getBoundingClientRect();
      // console.log(boxRect.left,boxRect.right," bullet position ");
      let a = boxRect;
      // console.log(a," a")
      getPositionBulletLeft(a)
    }

    animationFrameId = requestAnimationFrame(updateBoxPosition);
   
  }

  
  function handleKeyDown(e) {
    if (e.code === "Space") {
      setDoAnimate(true);
      setVisible("normal");
      setKey(key + 1);
      updateBoxPosition();
    }
  }  

  useEffect(() => {
   
    setTimeout(() => {
        
        if(visible === "normal"){
            setVisible("none")
          }
    }, 1100);

    document.addEventListener("keyup", handleKeyDown);

    return () => {
      document.removeEventListener("keyup", handleKeyDown);
      
    };

  }, [key]);

  // if(visible === "none"){
  
  //   cancelAnimationFrame(animationFrameId);
  //   console.log("cancelled")
  // }

  useEffect(() => {
    if (visible === "none") {
      cancelAnimationFrame(animationFrameId);
      // console.log("cancelled");
    }
  }, [visible]);


  return <Box ref={boxRef} id="bulletLeft" visible={visible} animate={doAnimate} key={key}/>;
}

const moveLeft = keyframes`
  from {
    left: 0px;
  }
  to {
    left: 1400px;
  }
`;

const Box = styled.div`
  display: ${(props) => (props.visible !== "normal" ? "none" : "normal")};
  border: 1px solid white;
  width: 10px;
  height: 2px;
  margin-left: 89px;
  position: relative;
  bottom: 40px;
  animation: ${(props) => (props.animate ? moveLeft : "none")} 1s linear;
  ${(props) => (props.id ? `id: ${props.id}` : "")};
  
`;






















// // import { Box } from "@chakra-ui/react";
// // import styles from "../styles/bullet.module.css";
// import { useEffect, useState } from "react";
// import styled, {keyframes} from "styled-components";

// export function Bullet() {

    
//     const [visible,setVisible] = useState("none")
//     const [doAnimate,setDoAnimate] = useState(false);
   
  

//     // document.addEventListener("keyup", handleBullet);
//     function handleBullet(e) {

//         if (e.code === "Space") {
//             console.log(e.code)

//             // document.getElementById("bullet").classList.add("moveRight")
//             setDoAnimate(true);
//             setVisible("normal")
        
//         }
//     }
    
//     useEffect(() => {
       
    
//         document.addEventListener("keyup", handleBullet);
    
//         return () => {
//           document.removeEventListener("keyup", handleBullet);
//         };
//       }, []);
    
    

//     return <Box  animate={doAnimate} visible={visible} >

//         </Box>
    
// }

// const moveLeft = keyframes` 
//    from{left:0px}
//    to{left: 1400px}
// `

// const Box = styled.div`
//    display: ${props => props.visible === "normal" ? "normal": "none" };
//    border: 1px solid white;
//    width: 10px;
//    heigth: 2px;
   
//    position: relative;
//    animation: ${props => {if(props.animate === "left"){ return moveLeft }  } } 1s linear ;
// `