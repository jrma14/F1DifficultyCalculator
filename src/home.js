import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useEffect, useState}  from "react"
import Card from "./card"
import {Link} from "react-router-dom"

function Home(props){
    let avg = -1

    let sum = 0
    let count = 0
    for(const [track,data] of Object.entries(props.lapTimes)){
        sum += parseInt(data.difficulty)
        count ++
    }
    if (count != 0){
        avg = Math.round(sum/count)
    }

    return (
        <div className="text-center">
            <div className="p-10 bg-gray-50 min-h-screen w-auto font-sans text-3xl font-extrabold text-gray-900">
                F1 22 Difficulty Calculator
                <h1 className='mt-10 font-normal text-2xl'>
                    {avg!=-1?`Average difficulty: ${avg}`:''}
                </h1>
                <div className="p-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Card trackname="Bahrain" endpoint='bahrain' img="https://www.f1laps.com/static/icons/flags/BHR.736ec7e127a1.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Saudi Arabia" endpoint='saudi_arabia' img="https://www.f1laps.com/static/icons/flags/SAU.239857cafada.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Australia" endpoint='australia' img="https://www.f1laps.com/static/icons/flags/AUS.cab2eac60acd.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Imola" endpoint='imola' img="https://www.f1laps.com/static/icons/flags/ITA.612e617f5d72.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Miami" endpoint='miami' img="https://www.f1laps.com/static/icons/flags/USA.36ab476e5e55.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Spain" endpoint='spain' img="https://www.f1laps.com/static/icons/flags/ESP.36938bbe2779.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Monaco" endpoint='monaco' img="https://www.f1laps.com/static/icons/flags/MCO.6bb3a6ad42a9.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Azerbaijan" endpoint='azerbaijan' img="https://www.f1laps.com/static/icons/flags/AZE.aed905d7c8a1.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Canada" endpoint='canada' img="https://www.f1laps.com/static/icons/flags/CAN.ed3cd4b507f8.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Great Britain" endpoint='silverstone' img="https://www.f1laps.com/static/icons/flags/GBR.e5564902e264.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Austria" endpoint='austria' img="https://www.f1laps.com/static/icons/flags/AUT.7fc4e22077fa.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="France" endpoint='france' img="https://www.f1laps.com/static/icons/flags/FRA.968aaa24eeff.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Hungary" endpoint='hungary' img="https://www.f1laps.com/static/icons/flags/HUN.844eeb9e8fa1.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Belgium" endpoint='spa' img="https://www.f1laps.com/static/icons/flags/BEL.49147ca6a068.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Netherlands" endpoint='netherlands' img="https://www.f1laps.com/static/icons/flags/NLD.f163721e679e.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Monza" endpoint='monza' img="https://www.f1laps.com/static/icons/flags/ITA.612e617f5d72.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Singapore" endpoint='singapore' img="https://www.f1laps.com/static/icons/flags/SGP.3d05a02d8a92.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Japan" endpoint='japan' img="https://www.f1laps.com/static/icons/flags/JPN.1f905d23af14.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Austin" endpoint='usa' img="https://www.f1laps.com/static/icons/flags/USA.36ab476e5e55.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Mexico" endpoint='mexico' img="https://www.f1laps.com/static/icons/flags/MEX.6ee1e6d4e6ac.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Brazil" endpoint='brazil' img="https://www.f1laps.com/static/icons/flags/BRA.a102e5631626.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    <Card trackname="Abu Dhabi" endpoint='abudhabi' img="https://www.f1laps.com/static/icons/flags/ARE.61f9f9f93387.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/>
                    {/* <Card trackname="China" endpoint='china' img="https://www.f1laps.com/static/icons/flags/CHN.7f8455b70734.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/> */}
                    {/* <Card trackname="Portugal" endpoint='portugal' img="https://www.f1laps.com/static/icons/flags/PRT.70a47eede02a.svg" laptimes={props.lapTimes} setLapTimes={props.setLapTimes}/> */}
                </div>
                <button className='ml-10 mr-10 rounded-lg border border-gray-300 bg-white px-3 py-1 shadow-sm hover:border-purple-400 select-none font-normal text-xl' onClick={()=>{
                    fetch("/api/saveusertimes",{
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(props.lapTimes)
                    }).then(res => res.json())  
                }}>
                    Save
                </button>
                <footer>
                    <Link to="/credits">
                        <button className='font-normal underline text-sm'>
                            Credits
                        </button>
                    </Link>
                </footer>
            </div>
        </div>

    )
}

export default Home