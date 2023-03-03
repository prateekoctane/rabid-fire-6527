import logo from './logo.svg';
import './App.css';

import AllRoutes from './routes/AllRoutes';


import Moveable from './Components/Moveable';

// import Game from './component/Game';



function App() {
  return (
    <div className="App">

    <AllRoutes />


      <Moveable />

    {/* <Game /> */}


    </div>
  );
}

export default App;
