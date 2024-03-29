const MyMeteo = {
  consolidated_weather: [
    {
      id: 5557512033009664,
      weather_state_name: "Showers",
      weather_state_abbr: "s",
      wind_direction_compass: "ENE",
      created: "2022-05-03T12:59:01.865753Z",
      applicable_date: "2022-05-03",
      min_temp: 8.955,
      max_temp: 15.82,
      the_temp: 13.46,
      wind_speed: 2.978373389803547,
      wind_direction: 58.63590668795863,
      air_pressure: 1022.5,
      humidity: 77,
      visibility: 7.940813151197009,
      predictability: 73,
    },
    {
      id: 6264826507558912,
      weather_state_name: "Heavy Rain",
      weather_state_abbr: "hr",
      wind_direction_compass: "W",
      created: "2022-05-03T12:59:01.885578Z",
      applicable_date: "2022-05-04",
      min_temp: 9.73,
      max_temp: 16.59,
      the_temp: 15.309999999999999,
      wind_speed: 5.449768313741085,
      wind_direction: 266.8585366398802,
      air_pressure: 1018.5,
      humidity: 74,
      visibility: 9.604534518412471,
      predictability: 77,
    },
    {
      id: 6593981258399744,
      weather_state_name: "Showers",
      weather_state_abbr: "s",
      wind_direction_compass: "WNW",
      created: "2022-05-03T12:59:03.360858Z",
      applicable_date: "2022-05-05",
      min_temp: 8.235,
      max_temp: 19.665,
      the_temp: 19.205,
      wind_speed: 4.75930755979745,
      wind_direction: 296.9700926678941,
      air_pressure: 1023.5,
      humidity: 56,
      visibility: 14.042988944563747,
      predictability: 73,
    },
    {
      id: 6025458148704256,
      weather_state_name: "Light Rain",
      weather_state_abbr: "lr",
      wind_direction_compass: "W",
      created: "2022-05-03T12:59:02.366569Z",
      applicable_date: "2022-05-06",
      min_temp: 10.54,
      max_temp: 19.15,
      the_temp: 18.12,
      wind_speed: 6.293673426957237,
      wind_direction: 273.3322789431635,
      air_pressure: 1023.5,
      humidity: 65,
      visibility: 12.889102640579019,
      predictability: 75,
    },
    {
      id: 6573144593661952,
      weather_state_name: "Showers",
      weather_state_abbr: "s",
      wind_direction_compass: "NE",
      created: "2022-05-03T12:59:05.925792Z",
      applicable_date: "2022-05-07",
      min_temp: 9.655,
      max_temp: 16.009999999999998,
      the_temp: 16.295,
      wind_speed: 5.779679303605611,
      wind_direction: 34.51460297303154,
      air_pressure: 1028.5,
      humidity: 62,
      visibility: 13.266585639863198,
      predictability: 73,
    },
    {
      id: 6086524094382080,
      weather_state_name: "Clear",
      weather_state_abbr: "c",
      wind_direction_compass: "E",
      created: "2022-05-03T12:59:04.946744Z",
      applicable_date: "2022-05-08",
      min_temp: 6.88,
      max_temp: 16.89,
      the_temp: 15.06,
      wind_speed: 4.3534218165911085,
      wind_direction: 81.00000000000001,
      air_pressure: 1030.0,
      humidity: 55,
      visibility: 9.999726596675416,
      predictability: 68,
    },
  ],
  time: "2022-05-03T14:24:21.976061+01:00",
  sun_rise: "2022-05-03T05:28:53.178071+01:00",
  sun_set: "2022-05-03T20:26:58.312348+01:00",
  timezone_name: "LMT",
  parent: {
    title: "England",
    location_type: "Region / State / Province",
    woeid: 24554868,
    latt_long: "52.883560,-1.974060",
  },
  sources: [
    {
      title: "BBC",
      slug: "bbc",
      url: "http://www.bbc.co.uk/weather/",
      crawl_rate: 360,
    },
    {
      title: "Forecast.io",
      slug: "forecast-io",
      url: "http://forecast.io/",
      crawl_rate: 480,
    },
    {
      title: "HAMweather",
      slug: "hamweather",
      url: "http://www.hamweather.com/",
      crawl_rate: 360,
    },
    {
      title: "Met Office",
      slug: "met-office",
      url: "http://www.metoffice.gov.uk/",
      crawl_rate: 180,
    },
    {
      title: "OpenWeatherMap",
      slug: "openweathermap",
      url: "http://openweathermap.org/",
      crawl_rate: 360,
    },
    {
      title: "Weather Underground",
      slug: "wunderground",
      url: "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
      crawl_rate: 720,
    },
    {
      title: "World Weather Online",
      slug: "world-weather-online",
      url: "http://www.worldweatheronline.com/",
      crawl_rate: 360,
    },
  ],
  title: "London",
  location_type: "City",
  woeid: 44418,
  latt_long: "51.506321,-0.12714",
  timezone: "Europe/London",
};

export default MyMeteo;
