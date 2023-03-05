import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import {Position }from "./constant";
type Props = {
  getPositionBulletLeft: (a: Position) => void;
  position: number;
};

export function BulletLeft(props:Props) {
  
  let {getPositionBulletLeft,position} = props;

  const [visible, setVisible] = useState("none");
  const [doAnimate, setDoAnimate] = useState(false);
  const [key, setKey] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  let animationFrameId:number;
 
  // console.log("position in bullet left",position)
 
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

  
  

  useEffect(() => {
    function handleKeyDown(e:KeyboardEvent) {
      if (e.code === "Space") {
        setDoAnimate(true);
        setVisible("normal");
        setKey(key + 1);
        updateBoxPosition();
      }
    }  
   
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

  
  useEffect(() => {
    if (visible === "none") {
      cancelAnimationFrame(animationFrameId);
      // console.log("cancelled");
    }
  }, [visible]);


  return <Box ref={boxRef} id="bulletLeft" position={position} visible={visible} animate={doAnimate} key={key}/>;
}

type BoxProps = {
  visible: string;
  animate: boolean;
  position: number;
};

const moveLeft = keyframes`
  from {
    left: 0px;
  }
  to {
    left: 1400px;
  }
`;
// ${(props:BoxProps) => (props.visible !== "normal" ? "none" : "normal")};
const Box = styled.div`
  display: normal;
  border: 1px solid black;
  border-radius: 0px 10px 10px 0px;
  background: black;
  width: 20px;
  height: 5px;
  margin-left: 89px;
  margin-bottom:20px;
  position: relative;
  bottom: ${(props:BoxProps) => props.position + 45 }px;
  animation: ${(props:BoxProps) => (props.animate ? moveLeft : "none")} 1s linear;
  ${(props) => (props.id ? `id: ${props.id}` : "")};
  
`;




















