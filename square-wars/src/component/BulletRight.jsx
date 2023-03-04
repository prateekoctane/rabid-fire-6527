import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";


export function BulletRight(props) {

  const { getPositionBulletRight } = props;

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
      getPositionBulletRight(a)
    }

    animationFrameId = requestAnimationFrame(updateBoxPosition);

  }

  function handleKeyDown(e) {
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

const moveLeft = keyframes`
  from {
    right: 0px;
  }
  to {
    right: 1400px;
  }
`;
// ${(props) => (props.visible !== "normal" ? "none" : "normal")};
const Box = styled.div`
  display: normal;
  border: 1px solid white;
  width: 10px;
  height: 2px;
  margin-left: 651px;
  position: relative;
  bottom: 40px;
  animation: ${(props) => (props.animate ? moveLeft : "none")} 1s linear;
`;