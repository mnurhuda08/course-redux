import './App.css'
import Header from './components/header/Header'
import ProductList from './features/productList/ProductList'

function App() {

  return (
    <>
      <Header/>
      <main className='px-4 mx-auto max-w-7xl'>
        <ProductList/>
      </main>
    </>
  )
}

export default App
