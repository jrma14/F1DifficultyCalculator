import React, {useState} from "react"
import {useLocation, Link} from "react-router-dom"

function Form(props){
    const location = useLocation()

    const {from,endpoint} = location.state
    const {laptimes,setLaptimes} = {...props}

    const [message, setMessage] = useState('');

    const [diff, setDiff] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleChange = event => {
        if(event.target.value.length > 8){
            event.target.value = event.target.value.substring(0,8)
        }
        if(event.target.value.length === 2 && !event.target.value.includes(':')){
            event.target.value = event.target.value.slice(0,1) + ":" + event.target.value.slice(1)
        }
        if(event.target.value.length === 5 && !event.target.value.includes('.')){
            event.target.value = event.target.value.slice(0,4) + "." + event.target.value.slice(4)
        }
        setMessage(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault()
        let val = event.target[0].value
        if(val.length === 8){
            let time = val
            setLoading(true);
            fetch(`/api/calculatedifficulty?trackname=${endpoint}&laptime=${time}`).then(res => {
                return res.json()
            }).then(
                data => {
                    setDiff(data.difficulty)
                    if(laptimes[from.toLowerCase().replace(/ /g,"_")] == undefined || val < laptimes[from.toLowerCase().replace(/ /g,"_")].laptime){
                        setLaptimes(from,val,data.difficulty)
                    }
                    setLoading(false)
                    setMessage('')
                }
            ).catch(err => {
                setLoading(false)
                console.error(err)
                console.log('Trackname is likely incorrect')
            })
        } else{
            console.log("Not a valid time")
        }
    }

    return(
        <div className="text-center p-10">
            <Link to="/">
                <img className="left-2 h-[40px] w-[40px] absolute top-1" src='https://cdn-icons-png.flaticon.com/512/60/60817.png'/>
            </Link>
            <form className="font-sans text-3xl font-semibold text-gray-900" onSubmit={handleSubmit}>
                <div>
                    {from}
                </div>
                <div className="text-xl font-normal">
                    {laptimes[from.toLowerCase().replace(/ /g,"_")]?`Laptime: ${laptimes[from.toLowerCase().replace(/ /g,"_")].laptime} Difficulty: ${laptimes[from.toLowerCase().replace(/ /g,"_")].difficulty}`:'No laptime recorded yet'}
                </div>
                <input
                placeholder={`Enter your lap time for ${from}`}
                type="text"
                pattern="[0-9]+:[0-9]+.[0-9]+"
                id="message"
                name="message"
                onChange={handleChange}
                value={message}
                className={`focus:outline-none focus:border-purple-400 mt-2 p-5 rounded-md font-normal text-lg h-10 w-[45%] border shadow-sm border-gray-300`}//(24+from.length)*16
                />
            </form>
            <div className="font-semibold text-md mt-2">
                {loading && <h1>Loading...</h1> || diff && <h1 className="text-lg">Difficulty: {diff}</h1>}
            </div>
            <footer className="fixed bottom-0 w-auto text">
                <Link to="/credits">
                    <button className='font-normal underline text-sm'>
                        Credits
                    </button>
                </Link>
            </footer>
        </div>
    )
}

export default Form