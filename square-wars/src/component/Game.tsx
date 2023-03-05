import React from 'react'
import "./game.css"
import { Image } from "@chakra-ui/react"

import { Box } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { BulletLeft } from "./BulletLeft"
import { BulletRight } from "./BulletRight"
import { LeftPlayer } from "./LeftPlayer"
import { RightPlayer } from "./RightPlayer";
// import Game from "../component/Game"
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button
} from '@chakra-ui/react';
import { useOutsideClick } from '@chakra-ui/react';
import {Position }from "./constant";
// import { LeftPlayerProps } from './constant'




const Game = () :JSX.Element => {


  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement|null>(null)
  const [rp, setRp] = useState<Position>({left: 0, right: 0, top: 0, bottom: 0});
  const [lb, setLb] = useState<Position>({left: 0, right: 0, top: 0, bottom: 0});

  const [lp, setLp] = useState<Position>({left: 0, right: 0, top: 0, bottom: 0});
  const [rb, setRb] = useState<Position>({left: 0, right: 0, top: 0, bottom: 0});


  const [blastRight, setBlastRight] = useState<string>("none");
  const [blastLeft, setBlastLeft] = useState<string>("none");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [plyr, setPlyr] = useState<string>("");
  const alertRef = useRef(null);
  const [position, setPosition] = useState<number>(0);
  const [rightPosition, setRightPosition] = useState<number>(0);

  useOutsideClick({
    ref: alertRef,
    handler: () => {restart()},
  })



  function getPositionRitPlyr(val:Position) {

    setRp(val);
  }
  // // console.log(rp,"right player")

  function getPositionBulletLeft(val:Position) {

    setLb(val)
  }

  function getPositionLeftPlyr(val:Position) {

    setLp(val);
  }
  // console.log(lp,"left player")

  function getPositionBulletRight(val:Position) {

    setRb(val)
  }
// console.log(rb,"right bullet")


 
  function restart(){
    setBlastRight("none");
    setBlastLeft("none");
    onClose();
    // console.log("inside restart")
  }

  // console.log(lb,"leftbutllet")

  useEffect(() => {
    if (lb.left < rp.right &&
      lb.right > rp.left &&
      lb.top < rp.bottom &&
      lb.bottom > rp.top) {
      console.log("Collision detected!");
      setBlastRight("normal")
      setShowAlert(true);
      setPlyr("Left");
      onOpen();
    }

  }, [lb, rp])

  useEffect(() => {
    if (lp.left < rb.right &&
      lp.right > rb.left &&
      lp.top < rb.bottom &&
      lp.bottom > rb.top) {
      console.log("Collision detected!");
      setBlastLeft("normal")
      setShowAlert(true);
      setPlyr("Right");
      onOpen();
    }

  }, [lp,rb])

  return (
    <>
      {showAlert && <div  ref={alertRef} >
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
         
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                GAME OVER !!!
              </AlertDialogHeader>

              <AlertDialogBody>
                {plyr} player wins
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={restart}>
                  Restart Game
                </Button>
                
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        </div>
      }
      <section className='main-section'>
        <h1>Welcome to Gun-Wars</h1>
        <div className='game-section'>
          <div className='divider'>
            <div className='team-name'>

              <LeftPlayer blastLeft={blastLeft} position={position} setPosition={setPosition}  getPositionLeftPlyr={getPositionLeftPlyr} />
              <BulletLeft position={position}  getPositionBulletLeft={getPositionBulletLeft} />
              {/* <Image id="left" display="normal" zIndex="6" w="160px" border="1px solid black"  position="relative" bottom={lp.top} left="20px"
                src="/blast.png" alt="explode" /> */}

            </div>
          </div>
          <div className='divider'>
            <div className='team-name'>
              <RightPlayer blastRight={blastRight} rightPosition={rightPosition} setRightPosition={setRightPosition}  getPositionRitPlyr={getPositionRitPlyr} />
              <BulletRight rightPosition={rightPosition} getPositionBulletRight={getPositionBulletRight} />
              {/* <Image id="right" display={blastRight} zIndex="6" w="170px" position="relative" bottom="120px" left="410px"
                src="/blast.png" alt="explode" /> */}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Game;




