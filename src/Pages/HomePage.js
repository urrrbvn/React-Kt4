import { useEffect, useState } from "react"
import Card from "../components/Card"
import {Link} from 'react-router-dom'




function HomePage(){

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))

       
    },[])

    console.log(products);
    
    return(
        <div className="card_wrapper" >
            {products.map(elem => <Link to={'/product/'+elem.id} ><Card elem={elem} /></Link> )}
        </div>
    )
}

export default HomePage