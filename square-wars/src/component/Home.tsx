import React from 'react'
import "./home.css"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home-main'>
            <div className='home-div'>

                <h1 className='h1'>Gun Wars</h1>
                <button className='btn' onClick={() => navigate("/start-game")}>Start Game</button>

            </div>
        </div>
    )
}

export default Home