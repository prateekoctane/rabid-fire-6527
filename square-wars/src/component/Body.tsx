import { Box, Image } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { BulletLeft } from "./BulletLeft"
import { BulletRight } from "./BulletRight"
import { LeftPlayer } from "./LeftPlayer"
import { RightPlayer } from "./RightPlayer";
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
import {Position }from "./constant";


 
export function Body():JSX.Element {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef<HTMLButtonElement|null>(null)
    const [rp, setRp] = useState<Position>({left: 0, right: 0, top: 0, bottom: 0});
    const [lb, setLb] = useState<Position>({left: 0, right: 0, top: 0, bottom: 0});

    const [lp, setLp] = useState<Position>({left: 0, right: 0, top: 0, bottom: 0});
    const [rb, setRb] = useState<Position>({left: 0, right: 0, top: 0, bottom: 0});
    const [blastRight, setBlastRight] = useState<string>("none");
    const [blastLeft, setBlastLeft] = useState<string>("none");
    const [showAlert,setShowAlert] = useState<boolean>(false);
    const [plyr,setPlyr] = useState<string>("")



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
    // console.log(rp,"right player")

    function getPositionBulletRight(val:Position) {

        setRb(val)
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
        if (rb.left < lp.right &&
            rb.right > lp.left &&
            rb.top < lp.bottom &&
            rb.bottom > lp.top) {
            console.log("Collision detected!");
            setBlastLeft("normal")
            setShowAlert(true);
            setPlyr("Right");
            onOpen();
        }

    }, [rb, lp])



    return <Box display="flex" bg="black" w="100vw" h="100vh" >

        {showAlert &&
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
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={onClose} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        }

        <Box w="100vw" h="100vh" borderRight="5px solid white" >

            <LeftPlayer getPositionLeftPlyr={getPositionLeftPlyr} />
            <BulletLeft getPositionBulletLeft={getPositionBulletLeft} />
            <Image id="left" display={blastLeft} zIndex="3" w="130px" ml="650px" position="relative" bottom="90px" right="35px"
                src="/blast.png" alt="explode" />
        </Box>

        <Box w="100vw" h="100vh" borderLeft="5px solid white" >

            <RightPlayer getPositionRitPlyr={getPositionRitPlyr} />
            <BulletRight getPositionBulletRight={getPositionBulletRight} />
            <Image id="right" display={blastRight} zIndex="3" w="130px" ml="650px" position="relative" bottom="90px" right="35px"
                src="/blast.png" alt="explode" />
        </Box>

    </Box>
}