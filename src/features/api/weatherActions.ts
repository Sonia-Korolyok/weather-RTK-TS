import {setMessage} from "../message/messageSlice.js";
import {api_key, base_url} from "../../utils/constants.ts";
import {setWeather} from "../weather/weatherSlice.js";
import type {AppDispatch} from "../../app/store.ts";

export const fetchWeather = (city: string) => {
    return (dispatch: AppDispatch) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                dispatch(setWeather({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: (new Date(data.sys.sunset * 1000)).toLocaleTimeString()
                }));
                dispatch(setMessage(""))
            })
            .catch(err => {
                console.log(err);
                dispatch(setMessage('Enter correct city name'));
            });
    }
}
