import { Link } from 'react-router-dom'

function NotfoundPage(){
    return(
        <div className="errorPage">
            <h1>
                Not Found 404
            </h1>
            <Link to={'/'} ><button>Назад</button></Link>
        </div>
    )
}

export default NotfoundPage