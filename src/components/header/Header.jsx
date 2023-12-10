import { useSelector } from 'react-redux'
import { selectCartTotalItems } from '../../features/cart/cartSlice'

import CartIcon from '../../assets/cart.svg'
const Header = ({handleCartModal}) => {
    const cartTotalItem = useSelector(selectCartTotalItems)
    console.log("tot item: ",cartTotalItem)

    
  return (
    <header className="bg-blue-700">
            <div className="px-4 mx-auto max-w-7xl">
                <div className="flex items-center justify-between h-20">
                    <h1 className="text-3xl font-bold text-gray-100">Simple E-Commerce</h1>
                    <button
                        type="button"
                        className="relative p-2 text-gray-100 bg-blue-800 rounded-full"
                        onClick={handleCartModal}
                        >
                            <span className='absolute flex justify-center w-6 h-6 text-sm text-white bg-red-600 rounded-full -top-2 -right-2'>{cartTotalItem}</span>
                            <img src={CartIcon} alt='cart' className='w-6 h-6'/>
                    </button>
                </div>
            </div>
        </header>
  )
}

export default Header