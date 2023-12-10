import { createSlice } from '@reduxjs/toolkit'

const initialState={
    items : [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers:{
        addItemToCart: ( state, action) => {
            const newItem = action.payload
            const selectCardIndex = state.items.findIndex((product) => product.id === newItem.id)

            if(selectCardIndex !== -1){ 
                state.items[selectCardIndex].quantity += 1
                state.items[selectCardIndex].totalPrice = state.items[selectCardIndex].quantity * newItem.price
            }else{
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
        }
    }
})

export const { addItemToCart } = cartSlice.actions

export default cartSlice.reducer

// ** selector
export const selectCartItems = state => state.cart.items
export const selectCartTotalItems = state => state.cart.items.reduce((total,item) => total + item.quantity, 0)
export const selectCartTotalPrices = state => state.cart.items.reduce((total, item) => total + item.price, 0)