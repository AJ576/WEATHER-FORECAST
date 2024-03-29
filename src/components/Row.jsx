import { useEffect, useState } from "react"

const Row = ({data}) =>
{   
    const [fdata, setFdata] = useState(data);
    const [ltemp,setLTemp] = useState(-460);
    const [htemp,setHTemp] = useState(10000);
    const [lhumidity,setLhumidity] = useState(0);
    const [hhumidity,setHhumidity] = useState(100);
    const [date,setDate] = useState("");
    useEffect(()=>{setFdata(data)},[data]);
    console.log(fdata);

    const changeFilter = () =>
    {
        if(data.length>0)
        {
            const date2 = data.filter(item => item.datetime === (date === ''? item.datetime : date))
            const Ltemp = date2.filter((item)=>item.temp>=(Number(ltemp) == 0? -460 : Number(ltemp)));
            const Htemp = Ltemp.filter((item)=>item.temp<=(Number(htemp) == 0? 10000 : Number(htemp)));
            const LHumid = Htemp.filter((item)=>item.humidity>=(Number(lhumidity) == 0? 0 : Number(lhumidity)));
            const HHumid = LHumid.filter((item)=>item.humidity<=(Number(hhumidity) == 0? 100 : Number(hhumidity)));
            setFdata(HHumid)
        }
    }
    
    
    return(
        <>
        <div className="INPUT">
            <input type="text" placeholder="Enter date to filter" onChange={(e) => {setDate(e.target.value)}}/>
            <div className="temp">
                <input type="text" placeholder="Lower Bound for temprature" onChange={(e) => {setLTemp(e.target.value)}}/>
                <input type="text" placeholder="Upper Bound for temprature" onChange={(e) => {setHTemp(e.target.value)}}/>
            </div>
            <div className="Humidity">
                <input type="text" placeholder="Enter Lower bound for Humidity" onChange={(e) => {setLhumidity(e.target.value)}}/>
                <input type="text" placeholder="Enter Upper bound for Humidity" onChange={(e) => {setHhumidity(e.target.value)}}/>
            </div>
            <button onClick={() => {changeFilter()}}>Click me</button>
        </div>
        <table>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Temprature</td>
                    <td>Humidity</td>
                    <td>Sunrise</td>
                    <td>Sunset</td>
                </tr>
            </thead>
            <tbody>
                {
                    fdata.length > 0 ?
                    fdata.map((item,i) => 
                    (
                        <>
                            <tr key={"item-"+i}>
                                <td>{item.datetime}</td>
                                <td>{item.temp}</td>
                                <td>{item.humidity}</td>
                                <td>{item.sunrise}</td>
                                <td>{item.sunset}</td>
                            </tr>
                        </>  
                    )):<tr><td>{'No Data'}</td></tr>
                }
            </tbody>
        </table>
        </>
        
    )
}
export default Row