import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: []
}

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {}
})

export default carSlice.reducer