import {Box} from "@chakra-ui/react"
import { Bullet } from "./Bullet"
import { LeftPlayer } from "./LeftPlayer"
import { RightPlayer } from "./RightPlayer"



export function Body(){

   
    return <Box display="flex" bg="black" w="100vw" h="100vh" >

        <Box w="100vw" h="100vh" borderRight="5px solid white" >

           <LeftPlayer />
           <Bullet />
        </Box>

        <Box w="100vw" h="100vh" borderLeft="5px solid white" >

            <RightPlayer />
        </Box>
       
    </Box>
}