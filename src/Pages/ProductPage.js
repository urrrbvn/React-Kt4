import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Stars from '../components/UI/Stars'

function ProductPage(){

    const {id} = useParams()

    const [productData, setProductData] = useState({})

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res => res.json())
        .then(data => setProductData(data))
    },[id])

    // console.log(productData.rating)

    return(
        <div className='productPage'>
            <div className="bigCard">
                <h1> {productData.title} </h1>
                <img src={productData.image} alt="" width={250} height={300} />
                <p> Price: {productData.price} $ </p>
                <p>Description: {productData.description} </p>
                <Stars rating={productData.rating?.rate} />
            </div>
            <Link to={'/'} ><button>Назад</button></Link>
        </div>
    )
}

export default ProductPage