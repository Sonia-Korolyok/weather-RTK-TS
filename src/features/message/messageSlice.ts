import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/weatherActions.ts";

const messageSlice = createSlice({
    name: "message",
    initialState: "Enter city name",
    reducers: {
        setMessage: (_state, action) => action.payload,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, () => `Loading...`)
            .addCase(fetchWeather.rejected, (_state, action) => action.error.message)
            .addCase(fetchWeather.fulfilled, () => ``)
    }
})

export const {setMessage} = messageSlice.actions;
export default messageSlice.reducer