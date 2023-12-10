import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ProductList = () => {
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    useEffect(() => {
      const fetchProduct = async () => {
          setIsLoading(true)
          try {
              const res = await axios.get(`'https://fakestoreapi.com/products'`)
              setProducts(res.data)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

      fetchProduct()
    }, [])
    console.log(products)
    

  return (
    <>List Product</>
  )
}

export default ProductList