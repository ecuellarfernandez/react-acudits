import React, { useEffect, useState, memo} from 'react'
import fetchData from '../helpers/fetchData';
import getPosition from '../helpers/getPosition'
import WeatherData from './WeatherData';

const Wheater = memo(()=> {

    const [data, setData] = useState(null)
    
    useEffect(()=>{
        const getCoords = async ()=>{
            const defaultCoords = {
                lat:'41.3888',
                lng:'2.159'
            }
            try{
                const coords = await getPosition();
                return coords;
            }catch{
                return defaultCoords;
            }
        }
    
        const makeUrl = async ()=>{
            const key='de26623afa1074d98e8e720dd7b16eac';
            // de26623afa1074d98e8e720dd7b16eac
            // eeb84fbe0c8b7fc83ead5466ad7b526e
            const {lat, lng} = await getCoords();
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
            return url;
        }
    
        const getData = async ()=>{
            const url = await makeUrl();
            const data = await fetchData(url);
            setData(data);
        }
        
        getData();
    }, [])

    const dataRender = data ? <WeatherData props={data} /> : <p>fetching...</p>;

    return dataRender;
})

export default Wheater
