import { Box } from "@chakra-ui/react"
import { useState } from "react"
import { BulletLeft } from "./BulletLeft"
import { BulletRight } from "./BulletRight"
import { LeftPlayer } from "./LeftPlayer"
import { RightPlayer } from "./RightPlayer"



export function Body() {

    const [rp,setRp] = useState({});
    const [lb,setLb] = useState({})

    function getPositionRitPlyr(val){
        // console.log(val,"position of right rect");
        setRp(val);
        console.log(rp,"right player")
    }

    function getPositionBulletLeft(val){
        // console.log(val,"position of left bullet");
        setLb(val)
        console.log(lb,"leftbutllet")
    }

    return <Box display="flex" bg="black" w="100vw" h="100vh" >

        <Box w="100vw" h="100vh" borderRight="5px solid white" >

            <LeftPlayer />
            <BulletLeft getPositionBulletLeft={getPositionBulletLeft} />
        </Box>

        <Box w="100vw" h="100vh" borderLeft="5px solid white" >

            <RightPlayer getPositionRitPlyr={getPositionRitPlyr} />
            <BulletRight />
        </Box>

    </Box>
}