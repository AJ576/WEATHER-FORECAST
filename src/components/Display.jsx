import { useEffect, useState } from 'react'
import Card from './Card';
import Row from './Row';
import axios from 'axios';

const KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const Display = () =>
{
    const [data,setData] = useState({adress:null,sunrise:null, sunset:null,temp:null,humidity:null, days:{}});

    useEffect(()=>
    {
      const fetchData = async () => {
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New York, US?key=${KEY}`);

        setData({adress:response.data.address, 
                sunrise:response.data.currentConditions.sunrise,
                sunset:response.data.currentConditions.sunset,
                temp:response.data.currentConditions.temp,
                humidity:response.data.currentConditions.humidity,
                days:response.data.days});
      }
      fetchData();
    },[]);
  
   
    return (
      <>
      <div className='DashBoard'>
        <Card name={"Location"} data={data.adress}/>
        <Card name={"Temprature"} data={data.temp}/>
        <Card name={"Humidity"} data={data.humidity}/>
        <Card name={"Sunsrise"} data={data.sunrise}/>
        <Card name={"Sunset"} data={data.sunset}/>
      </div>
      <div className='Forecast'>
        <Row data = {data.days}/>
      </div>
      </>
    );
}
export default Display