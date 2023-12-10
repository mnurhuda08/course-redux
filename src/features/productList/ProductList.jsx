import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch} from 'react-redux'
import { addItemToCart } from '../cart/cartSlice'

const ProductList = () => {
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    // ** dispatch
    const dispatch = useDispatch()
    useEffect(() => {
      const fetchProduct = async () => {
          setIsLoading(true)
          try {
              const res = await axios.get(`https://fakestoreapi.com/products`)
              setProducts(res.data)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

      fetchProduct()
    }, [])
    
    const handleClickBuy = (product) => {
      dispatch(addItemToCart(product))
    }
    

  return (
    <div className='grid w-full h-full grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-4 '>
      {products.map((product) => {
        return(
          isLoading ?(
            <p>Loading</p>
          ): (
            <div key={product.id} className='w-full p-4 bg-white border shadow rounded-xl'>
              <div className='group relative w-[80%] h-[250px] mx-auto overflow-hidden'>
                <img src={product.image} alt={product.title} className='object-contain w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110'/>
              </div>
              <div className="flex flex-col gap-6 mt-8">
                <button type='button' className='px-8 py-3 text-sm text-white bg-blue-700 rounded-lg hover:bg-blue-900' onClick={() => handleClickBuy(product)}> Buy Now </button>
                <h3 className='font-bold'>{product.title}</h3>
                <h4 >${product.price}</h4>
              </div>
              <div>
                <p className='my-3 font-normal text-gray-500 dark:text-gray-400'>{product.description}</p>
              </div>
            </div>)
        ) 
      })}
    </div>
  )
}

export default ProductList