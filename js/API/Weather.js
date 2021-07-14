class Weather{

    // 0 = CURRENT
    // 1 = FORECAST
	mode = 0;

	constructor(_mode){
		this.mode = _mode;
	}

getWeather(){
	this.apiCallWeather(this.mode);
}

apiCallWeather(mode){
	$.ajax({
		url: getHost() + '/api/states/weather.home',
		type: 'GET',
		headers: {
			'Authorization': 'Bearer ' + getToken()
		},
		success: function(data){
			$('#weather-c').html('');
            switch(mode){
                case 0:
					var icon = "";
					switch(data.state){
						case "clear-night":
							icon = "wi wi-night-clear";
							break;
						case "cloudy":
							icon = "wi wi-cloudy";
							break;
						case "fog":
							icon = "wi wi-fog";
							break;
						case "hail":
							icon = "wi wi-hail";
							break;
						case "lightning":
							icon = "wi wi-lightning";
							break;
						case "lightning-rainy":
							icon = "wi wi-thunderstorm";
							break;
						case "partlycloudy":
							icon = "wi wi-cloud";
							break;
						case "pouring":
							icon = "wi wi-showers";
							break;
						case "rainy":
							icon = "wi wi-rain";
						case "snowy":
							icon = "wi wi-snow";
							break;
						case "snowy-rainy": 
							icon = "wi wi-rain-mix";
							break;
						case "sunny":
							icon = "wi wi-day-sunny";
							break;
						case "windy":
							icon = "wi wi-windy";
							break;
						case "windy-variant":
							icon = "wi wi-cloudy-windy";
							break;
						case "exceptional":
							icon = "wi wi-storm-warning";
							break;
					}


                    var html = "<i class='wi wi-xxxlarge wi-" + data.state + "'></i>" + 
								"<p>HUMIDITY: " + data.attributes.humidity + "mm</p>" +
								"<p>TEMPERATURE: " + data.attributes.temperature + "°C</i></p>" + 
								"<p>PRESSURE: " + data.attributes.pressure + "</p>" + 
								"<p>WIND: " + data.attributes.wind_speed + "km/h <i class='wi wi-wind towards-" + Math.round(data.attributes.wind_bearing) +"-deg'></i></p>";
                    $('#weather-c').append(html);
                    break;
                case 1:
                    html = "";
					
					data.attributes.forecast.forEach( elem => {

						var temp = "<i class='wi wi-xxxlarge wi-" + elem.condition + "'></i>" +
						"<p>" + moment(elem.datetime).format("dddd, Do MMM YYYY").toUpperCase() +"</p>"  +
						"<p>PRECIPITATION: " + elem.precipitation + "%</p>" +
						"<p>TEMPERATURE: " + elem.templow + " - " + elem.temperature + "°C</i></p>" + 
						"<p>WIND: " + elem.wind_speed + "km/h <i class='wi wi-wind towards-" + Math.round(elem.wind_bearing) +"-deg'></i></p>";

						html += temp;
					});
					
					$('#weather-c').append(html);
                    break;
            }
		}
	})
}
}