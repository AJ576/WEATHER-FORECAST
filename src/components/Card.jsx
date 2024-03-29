
const Card = ({name,data}) =>
{
    return(
        <div className="Card">
            <h1>{name}</h1>
            <h2>{data}</h2>
        </div>
    )

}

export default Card