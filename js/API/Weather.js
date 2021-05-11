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
					var wind_icon = ""
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
					if(data.attributes.wind_bearing < 30 || data.attributes.wind_bearing > 330)
						wind_icon = "wi wi-direction-up";
					else if(data.attributes.wind_bearing >= 30 && data.attributes.wind_bearing < 60)
						wind_icon = "wi wi-direction-up-right";
					else if(data.attributes.wind_bearing >= 60 && data.attributes.wind_bearing < 120)
						wind_icon = "wi wi-direction-right";
					else if(data.attributes.wind_bearing >= 120 && data.attributes.wind_bearing < 150)
						wind_icon = "wi wi-direction-down-right";
					else if(data.attributes.wind_bearing >= 150 && data.attributes.wind_bearing < 210)
						wind_icon = "wi wi-direction-down";
					else if(data.attributes.wind_bearing >= 210 && data.attributes.wind_bearing < 240)
						wind_icon = "wi wi-direction-down-left";
					else if(data.attributes.wind_bearing >= 240 && data.attributes.wind_bearing < 300)
						wind_icon = "wi wi-direction-left";
					else if(data.attributes.wind_bearing >= 300 && data.attributes.wind_bearing < 330)
						wind_icon = "wi wi-direction-up-left";


                    var html = "<i class='wi wi-" + icon + "'></i>" + 
								"<p>HUMIDITY: " + data.attributes.humidity + "%</p>" +
								"<p>TEMPERATURE: " + data.attributes.temperature + "°C</i></p>" + 
								"<p>PRESSURE: " + data.attributes.pressure + "</p>" + 
								"<p>WIND: " + data.attributes.wind_speed + "km/h <i class='" + wind_icon +"'></p>";
                    $('#weather-c').append(html);
                    break;
                case 1:
                    
                    break;
            }
		}
	})
}
}