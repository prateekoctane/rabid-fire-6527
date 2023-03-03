import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";


export function BulletRight() {
  
  const [visible, setVisible] = useState("none");
  const [doAnimate, setDoAnimate] = useState(false);
  const [key, setKey] = useState(0);

  
  function handleKeyDown(e) {
    if (e.code === "ArrowRight") {
      setDoAnimate(true);
      setVisible("normal");
      setKey(key + 1);
    }
  }
  // console.log("visible",visible)

  useEffect(() => {
    // document.getElementById("bulletRight").style.backGround = "red";

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

  return <Box id="bulletRight" visible={visible} animate={doAnimate} key={key}/>;
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