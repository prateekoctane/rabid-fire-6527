import React, { useState } from 'react'

let initstate = {
    xoffset: 0,
    yoffset: 0,
    delta: 10,
};

const Move = () => {
 const [state,setState]=useState(initstate)
   

    let moveTitleToDown = () => {
        setState(
        {
            ...state,
            yoffset: state.yoffset+state.delta 
        });
    };

    let moveTitleToRight = () => {
        setState(
        {
            ...state,
            xoffset: state.xoffset
            + state.delta
         });
    };
   let moveTitleToLeft = () => {
        setState(
        { 
            ...state,
            xoffset: state.xoffset
            - state.delta
         });
    };
     let moveTitleToUp = () => {
        setState(
        { ...state,
            yoffset: state.yoffset
            - state.delta
         });
    };
    console.log(state)
  return (
    <div>
        <div
		style={{
			position: "absolute",
			left: `${state.xoffset}px`,
			top: `${state.yoffset}px`,
            width:"200px",
            height:"100px",
          
		}}
		>
		<img src="https://www.shutterstock.com/image-vector/cartoon-big-gun-stick-600w-1288495477.jpg" alt="gun" style={{width:"100%"}} />
		</div>

        {/* Move Controls */}
		<div style={{ marginTop: "80px" }}>
		<button onClick={moveTitleToRight}>
			right
		</button>
		<button onClick={moveTitleToDown}>
			down
		</button>
		<button onClick={moveTitleToLeft}>
			left
		</button>
		<button onClick={moveTitleToUp}>
			top
		</button>
		</div>
    </div>
  )
}

export default Move