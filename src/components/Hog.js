import React, {useState} from "react";
import HogDetails from "./HogDetails"


function Hog({hog}) {

    const [hogState, setHogState] = useState(false)

    function handleClick(){
        if (!hogState){
            setHogState(true)
        }
        else if (hogState){
            setHogState(false)
        }
    }

	return (
		<div onClick = {handleClick} className = "ui eight wide column" className = 'pigTile'>
            <p>{hog.name}</p>
            <img className = 'minPigTile' src ={hog.image}></img>
            <div>{hogState? <HogDetails hog = {hog}/> : ""}</div>
        </div>
	);
}

export default Hog;
