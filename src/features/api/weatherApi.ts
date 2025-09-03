import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {api_key, base_url} from "../../utils/constants.ts";
import type {WeatherInfo, WeatherInfoResponse} from "../../utils/typed";


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    //todo hw 2 learn refetchOnMountOrArgChange, refetchOnFocus and pollingInterval
    // refetchOnFocus: false, // priority lower than in hook (weather component)
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query: city => `?q=${city}&appid=${api_key}&units=metric`,
            //todo hw 1 learn keepUnusedDataFor
            keepUnusedDataFor: 10, //in sec
            transformResponse: (data: WeatherInfoResponse) => ({
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                country: data.sys.country,
                sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString()
            })

        })
    }),
})

export const {useGetWeatherByCityQuery} = weatherApi;