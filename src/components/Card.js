import Stars from "./UI/Stars"

function Card ( {elem} ){


    return(
        <div className="card">
            <h1>{elem.title}</h1>
            <Stars rating={elem.rating.rate} />
        </div>
    )
}

export default Card