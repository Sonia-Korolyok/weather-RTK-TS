import {useAppSelector} from "../app/hooks.ts";
import {useGetWeatherByCityQuery} from "../features/api/weatherApi.ts";


    const Weather = () => {
        const city = useAppSelector(state => state.city);
        const {data, error, isLoading} = useGetWeatherByCityQuery(city);

        if(!city) {
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
                        <p>Location: {data.sys.country}, {data.name}</p>
                        <p>Temperature: {data.main.temp}</p>
                        <p>Pressure: {data.main.pressure}</p>
                        <p>Sunset: {new Date(data.sys.sunset*1000).toLocaleTimeString()}</p>
                    </>
                }
            </div>
        );


    }
;
export default Weather;