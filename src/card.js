import React, {useState} from "react"
import {Link} from 'react-router-dom'

function Card(props){
    let state = {
        from: props.trackname,
        endpoint: props.endpoint
    }

    let time = ''
    let diff = ''
    try{
        let stats = props.laptimes[props.trackname.toLowerCase().replace(/ /g,"_")]
        time = stats.laptime
        diff = stats.difficulty
    }catch{}

    return(
        <Link to={"/form"} state={state}>
            <div className="ml-10 mr-10 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-purple-400 select-none" onClick={props.onClick}>
                <div className="flex items-center">
                    <h1 className="font-semibold text-base">
                        {props.trackname}
                    </h1>
                    <h1 className="text-sm text-center font-normal ml-2 mr-2">
                        {time}
                    </h1>
                    <h1 className="text-sm text-center font-normal ml-2 mr-2">
                        {diff == ''? '':`Difficulty: ${diff}`}
                    </h1>
                    <img src={props.img} className="h-10 w-10 ml-auto mr-0 rounded-full"></img>
                </div>
            </div>
        </Link>
    )
}

export default Card