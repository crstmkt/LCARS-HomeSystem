class Weather{

    // 0 = CURRENT
    // 1 = FORECAST
	mode = 0;
	sun = 'above_horizon';

	constructor(_mode){
		this.mode = _mode;

		setInterval(function(){
			_weather.apiCallSun();
		}, 30000)
	}

getWeather(){
	this.apiCallWeather(this.mode);	
}

apiCallSun(){
	$.ajax({
		url: getHost() + '/api/states/sun.sun',
		type: 'GET',
		headers: {
			'Authorization': 'Bearer ' + getToken()
		},
		success: function(data){
			//Yep, this is ugly.
			_weather.sun = data.state;
		}
	})
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
					//Workaround because icon is partly-cloudy but data.state is partlycloudy
					if(data.state == 'partlycloudy')
					{
						data.state = 'partly-cloudy';
					}
					if(this.sun != 'above_horizon')
					{
						switch(data.state){
							case 'sunny':
								data.state = 'night';
								break;
							case 'partly-cloudy':
								data.state = 'night-partly-cloudy';
								break;
							default:
								break;
						}
					}
                    var html = "<i class='mdi wi-xxxlarge mdi-weather-" + data.state + "'></i>" + 
								"<p>HUMIDITY: " + data.attributes.humidity + "mm</p>" +
								"<p>TEMPERATURE: " + data.attributes.temperature + "°C</i></p>" + 
								"<p>PRESSURE: " + data.attributes.pressure + "</p>" + 
								"<p>WIND: " + data.attributes.wind_speed + "km/h <i class='wi wi-wind towards-" + Math.round(data.attributes.wind_bearing) +"-deg'></i></p>";
                    $('#weather-c').append(html);
                    break;
                case 1:
                    html = "";
					
					data.attributes.forecast.forEach( elem => {
						if(elem.condition == 'partlycloudy')
						{
							elem.condition = 'partly-cloudy';
						}
						var temp = "<i class='mdi wi-xxxlarge mdi-weather-" + elem.condition + "'></i>" +
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