import React from 'react'
import "./home.css"
import { useNavigate } from "react-router-dom";
import {Box,Heading,Text} from "@chakra-ui/react";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home-main'>
            <div className='home-div'>

                <h1 className='h1'>Gun Wars</h1>
                <button className='btn' onClick={() => navigate("/start-game")}>Start Game</button>

                 <Box display="flex" justifyContent="space-between"  mt="50px" p="20px"  >
                   
                  <Box  >
                    <Heading mr="20px" fontSize="2xl" >Left Player</Heading>
                    <Text align="left" >Move up- Key A</Text>
                    <Text align="left" >Move down- Key D</Text>
                    <Text>Fire Bullet- Spacebar</Text>
                  </Box>
                  <Box>
                  <Heading mr="52px" fontSize="2xl" >Right Player</Heading>
                    <Text align="left" >Move up- NumPad 6</Text>
                    <Text align="left" >Move down- NumPad 4</Text>
                    <Text>Fire Bullet- Right Arrow Key</Text>
                  </Box>
                 </Box>

            </div>
        </div>
    )
}

export default Home