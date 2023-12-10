import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import ProductList from './features/productList/ProductList'
import CartModal from './features/cart/CartModal'

function App() {
  const [isModalCartOpen, setIsModalCartOpen] = useState(false)

  const handleOpenCartModal = () => {
    setIsModalCartOpen(true)
  }
  const handleCloseCartModal = () => {
    setIsModalCartOpen(false)
  }

  return (
    <>
      {isModalCartOpen ? (<CartModal handleCartModal={handleCloseCartModal}/>) : null}
      <Header handleCartModal={handleOpenCartModal}/>
     <main className="px-4 mx-auto max-w-7xl">
        <ProductList/>
      </main>
    </>
  )
}

export default App
