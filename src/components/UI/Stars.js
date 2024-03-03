

function Stars({rating}){

    const maxStars = [1,2,3,4,5]

    return(
        <div>
            {maxStars.map(elem => <span className={Math.floor(rating) >= elem ? 'fa fa-star active' : 'fa fa-star' } ></span> )}
        </div>
    )
}

export default Stars