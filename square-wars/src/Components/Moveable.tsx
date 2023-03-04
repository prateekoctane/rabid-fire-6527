  
   import React, { useEffect, useState } from 'react'
   
   const Moveable = () => {

    const [position, setPosition]  = useState({x : 0, y : 0})

    useEffect(() =>{

         function keyDownFun(e:KeyboardEvent){
            const move = 10;
            if(e.code === 'ArrowRight'){

                setPosition((prevPosition) => ({x : prevPosition.x + move, y : prevPosition.y}))
            }else if(e.code === 'ArrowLeft'){

                setPosition((prevPosition) => ({x : prevPosition.x -move, y : prevPosition.y}))
            }else if(e.code === 'ArrowUp'){
                setPosition((prevPosition) => ({x : prevPosition.x, y : prevPosition.y - move}))    
        }else if(e.code === 'ArrowDown'){
            setPosition((prevPosition) => ({x : prevPosition.x, y : prevPosition.y + move}))    
    }
}
    document.addEventListener('keydown', keyDownFun)
     
    return ()=>{
        document.removeEventListener('keydown', keyDownFun)
    }
},[])

     return (
         <div style={{ 
            position: 'absolute', 
            top: position.y, 
            left: position.x, 
            width : "100px",
            height :"100px",
            backgroundColor:"red"}}>
    </div>
     )
   }
   export default Moveable