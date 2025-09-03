import {useAppSelector} from "../app/hooks.ts";
import {useGetWeatherByCityQuery} from "../features/api/weatherApi.ts";


const Weather = () => {
        const city = useAppSelector(state => state.city);
        const {data, error, isLoading} = useGetWeatherByCityQuery(city, {
            pollingInterval: 600_000, //in milli sec
            skipPollingIfUnfocused: true,
            refetchOnFocus: true,
        });

        if (!city) {
            return <div className={'infoWeather'}>Enter city name</div>
        }
        if (isLoading) {
            return <div className={'infoWeather'}>Loading...</div>;
        }
        if (error) {
            return <div className={'infoWeather'}>Enter correct city name</div>;
        }


        return (
            <div className={'infoWeather'}>
                {!!data &&
                    <>
                        <p>Location: {data.country}, {data.city}</p>
                        <p>Temperature: {data.temp}</p>
                        <p>Pressure: {data.pressure}</p>
                        <p>Sunset: {data.sunset}</p>
                    </>
                }
            </div>
        );


    }
;
export default Weather;