import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpen: false
}

export const astroSlice = createSlice({
    name: 'astros',
    initialState,
    reducers:{
        astroBoxIsOpen: (state) => {
            state.isOpen = !state.isOpen
        }
    }

})

export const {astroBoxIsOpen} = astroSlice.actions
export default astroSlice.reducer