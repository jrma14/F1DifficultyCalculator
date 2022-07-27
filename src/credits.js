import React from "react"
import {Link} from "react-router-dom"

function Credits(){
    return(
        <div className="p-10 text-center bg-gray-50">
            <Link to="/">
                <img className="left-2 h-[40px] w-[40px] absolute top-1" src='https://cdn-icons-png.flaticon.com/512/60/60817.png'/>
            </Link>
            Credits to&nbsp;
            <a href="https://www.f1laps.com" className="underline">
                f1laps.com
            </a>
        </div>
    )
}

export default Credits