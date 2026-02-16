import './style.css'
import {useState,useEffect} from 'react'
import type {frase} from '../types/frase'
import {api} from '../api/api'

export const Frase = ()=>{
    const [frasecita,setFrasecita]=useState<string|null>(null);
    const [update, setUpdate] = useState<boolean>(false);
    const [start,setStart]=useState<boolean>(false);

    useEffect(()=>{
        if(!start) return;

        api.get(``).then((res)=>{
            setFrasecita(res.data.wisdom);      
        })
    },[update, start])

   const handleClick = () => {
    if(!start){
        setStart(true);
        setUpdate(prev => !prev); // 👈 dispara primer fetch
        return;
    }
    setUpdate(prev => !prev);
}

    return(
        <div className="fraseContainer">
            <div onClick={handleClick} className="fraseDataContainer">
                <p>
                    {!start ? "Click here" : frasecita ?? "Loading..."}
                </p>
            </div>
        </div>
    )
}













