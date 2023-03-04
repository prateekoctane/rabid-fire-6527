import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import {Position }from "./constant";

type Props = {
  getPositionBulletRight: (a: Position) => void;
};
export function BulletRight(props:Props) {

  const { getPositionBulletRight } = props;

  const [visible, setVisible] = useState("none");
  const [doAnimate, setDoAnimate] = useState(false);
  const [key, setKey] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  let animationFrameId : number;



  function updateBoxPosition() {

    if (boxRef.current) {
      let boxRect = boxRef.current.getBoundingClientRect();
      // console.log(boxRect.left,boxRect.right," bullet position ");
      let a = boxRect;
      console.log(a,"right bullets position")
      getPositionBulletRight(a)
    }

    animationFrameId = requestAnimationFrame(updateBoxPosition);

  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.code === "ArrowRight") {
      setDoAnimate(true);
      setVisible("normal");
      setKey(key + 1);
      updateBoxPosition();
    }
  }
  // console.log("visible",visible)

  useEffect(() => {
    // document.getElementById("bulletRight").style.backGround = "red";

    setTimeout(() => {

      if (visible === "normal") {
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

  return <Box ref={boxRef} id="bulletRight" visible={visible} animate={doAnimate} key={key} />;
}

type BoxProps = {
  visible: string;
  animate: boolean;
};

const moveLeft = keyframes`
  from {
    right: 0px;
  }
  to {
    right: 1400px;
  }
`;

const Box = styled.div`
  display: ${(props:BoxProps) => (props.visible !== "normal" ? "none" : "normal")};
  border: 1px solid black;
  border-radius: 10px 0px 0px 10px;
  background: black;
  width: 20px;
  height: 5px;
  margin-left: 452px;
  position: relative;
  bottom: 92px;
  animation: ${(props:BoxProps) => (props.animate ? moveLeft : "none")} 1s linear;
`;