const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key":
            "1991583e74msh187b69cb9917a37p129c83jsna629708c85eb",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
};

export async function getWeatherFrom(query = "Uruguay") {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;
    const response = await fetch(url, options);
    const data = await response.json();
    const { location, current } = data;
    const { country, localtime, name } = location;
    const {
        condition,
        humidity,
        feelskie_c,
        is_day,
        temp_c,
        wind_kph,
        wind_dir,
    } = current;
    const { code, text } = condition;

    return {
        conditionCode: code,
        conditionText: text,
        country,
        localtime,
        name,
        humidity,
        isDay: is_day,
        feelskie: feelskie_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir,
    };
}