// import {setMessage} from "../message/messageSlice.js";
// import {api_key, base_url} from "../../utils/constants.ts";
// import {setWeather} from "../weather/weatherSlice.js";
// import type {AppDispatch} from "../../app/store.ts";

import {createAsyncThunk} from "@reduxjs/toolkit";
import {api_key, base_url} from "../../utils/constants.ts";


export const fetchWeather = createAsyncThunk (
    'weather/fetchWeather',
    async (city:string) => {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();
        return {

                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: (new Date(data.sys.sunset * 1000)).toLocaleTimeString()

        }
    }
)






// export const fetchWeather = (city: string) => {
//     return (dispatch: AppDispatch) => {
//         fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
//             .then(res => res.json())
//             .then(data => {
//                 dispatch(setWeather({
//                     country: data.sys.country,
//                     city: data.name,
//                     temp: data.main.temp,
//                     pressure: data.main.pressure,
//                     sunset: (new Date(data.sys.sunset * 1000)).toLocaleTimeString()
//                 }));
//                 dispatch(setMessage(""))
//             })
//             .catch(err => {
//                 console.log(err);
//                 dispatch(setMessage('Enter correct city name'));
//             });
//     }
// }
