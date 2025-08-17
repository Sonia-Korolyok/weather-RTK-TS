import {createSlice} from "@reduxjs/toolkit";
import type {WeatherInfo} from "../../utils/typed";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {} as WeatherInfo,
    reducers: {
        setWeather: (_state, action) => action.payload,
    }
})
export const {setWeather} = weatherSlice.actions;
export default weatherSlice.reducer;