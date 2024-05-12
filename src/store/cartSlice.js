import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            console.log("action?.payload", action?.payload);
            state.items?.push(action?.payload);
            
        },
        removeItem: (state, action) => {
            const filterData = state.items?.filter((item) => item.id !== action.payload);
            state.items = filterData;
        },
        clearItem: (state) => {
            state.items.length = 0;
        },

    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem ,clearItem} = cartSlice.actions

export default cartSlice.reducer