import { useEffect } from "react"
import axios from "axios"
const KEY = import.meta.env.VITE_APP_ACCESS_KEY;
const Info = () =>
{
    useEffect(
        async() => {
          const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New York, US?key=$  {KEY}`)
          console.log(response)
        },[])
}

export default Info;