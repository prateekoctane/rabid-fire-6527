import React from 'react'
import { Route, Routes } from "react-router-dom";
import Game from '../component/Game';
import Home from '../component/Home';
import Notfound from '../component/Notfound';
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start-game" element={<Game />} />
            <Route path="*" element={< Notfound/>} />
        </Routes>
    )
}

export default AllRoutes