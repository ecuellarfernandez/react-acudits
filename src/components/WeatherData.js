const WeatherData = (props)=>{
    const {name, sys, weather, main} = props.props;
    return (
        <div>
            <p>{name}, {sys.country}</p>
            <p>{main.temp}°C</p>
            <p>{weather[0].main}</p>
        </div>
    )
}

export default WeatherData;