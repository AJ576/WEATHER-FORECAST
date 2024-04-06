
import { Link, useParams } from "react-router-dom";

const Detail = () =>
{
    const param = useParams();

    return(
        <div className="detail">
            <h1>Date: {param.date}</h1>
            <h2>Visibility: {param.visibility}</h2>
            <h2>Wind speed: {param.wind}</h2>
            <h2>Description: {param.description}</h2>

            <h3>{<Link to="/">Back to Home</Link>}</h3>
        </div>
        
    )


}

export default Detail;