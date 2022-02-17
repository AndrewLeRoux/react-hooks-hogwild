import React, {useState} from "react";
import Hog from "./Hog"

function HogList({hogs}) {

    const [isGreased, setGreased] = useState(false)
    const [hogList, setHogList] = useState(hogs)
    
    function handleGreased(){
        if (!isGreased){
            setHogList(hogList.filter((hog) => hog.greased === true))
            setGreased(true)
        }
        else if (isGreased){
            setHogList(hogs)
            setGreased(false)
        }
    }


    function handleNameSort(){
        const sortedList = hogList.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                return 1;
                }
                return 0;
            })
        console.log(sortedList)
        setHogList([...sortedList])
    }

    function handleWeightSort(){
        const sortedList = hogList.sort((a, b) => {
            return a.weight - b.weight
        })
        setHogList([...sortedList])
    }

	return ( <div>
        <button onClick = {handleGreased}>Greased</button>
        <button onClick = {handleNameSort}>Sort by Name</button>
        <button onClick = {handleWeightSort}>Sort by Weight</button>
        <p></p>
		<div className="ui grid container">
            {hogList.map(hog => <Hog hog = {hog}/>)}
        </div>
        </div>
	);
}

export default HogList;
