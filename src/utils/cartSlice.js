import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const itemExists=state.cartItems.find((item)=>item.id==action.payload.id)
            
            if(!itemExists){
                state.cartItems.push({...action.payload,quantity:1})
            } 
            else{
                itemExists.quantity+=1
            }           
        },
        increaseQty:(state,action)=>{
            const item=state.cartItems.find((item)=>item.id==action.payload)
            if(item){
                item.quantity+=1
            }
        },
        decreaseQty:(state,action)=>{
            const item=state.cartItems.find((item)=>item.id==action.payload)
            if(item){
                if(item.quantity>1){
                    item.quantity-=1
                }
                else{
                    state.cartItems=state.cartItems.filter((item)=>item.id!=action.payload)
                }
            }
        },
        removeFromCart:(state,action)=>{
            state.cartItems=state.cartItems.filter((item)=>item.id!=action.payload)
        },
        clearCart:(state)=>{
            state.cartItems=[]
        }
    }

})
export const {addToCart,removeFromCart,clearCart,decreaseQty,increaseQty}=cartSlice.actions
export default cartSlice.reducer