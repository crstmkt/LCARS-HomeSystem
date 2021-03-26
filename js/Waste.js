function initiateWasteCollection(){
	getNextWasteCollection();
	setInterval(function(){getNextWasteCollection();}, 3600000)
}

function getNextWasteCollection(){
	apiCallWasteCollection();
}

function apiCallWasteCollection(){
	$.ajax({
			url: getHost() + '/api/states/sensor.next_waste_collection_type',
			type: 'GET',
			headers: {
				'Authorization': 'Bearer ' + getToken()
			},
			success: function(data){

				$('#nextWasteCollection').html('');

				for(i = 0; i < 5; i++)
				{
					var wdate = moment(Object.keys(data.attributes)[i]);
					var wdateminus2 = moment(Object.keys(data.attributes)[i]).add(-2, 'days');			
					
					if(moment() >= wdateminus2)
					{
						$('#nextWasteCollection').append('<p class="flash">' + wdate.format("DD.MM.YYYY") + ' : ' +data.attributes[Object.keys(data.attributes)[i]].toUpperCase() + '</p>');
					}
					else
					{
						$('#nextWasteCollection').append('<p>' + wdate.format("DD.MM.YYYY") + ' : ' +data.attributes[Object.keys(data.attributes)[i]].toUpperCase() + '</p>');
					}
				}
			}
		})
}
//http://lcars-homesystem:8123/api/states/sensor.next_waste_collection_date
//http://lcars-homesystem:8123/api/states/sensor.next_waste_collection_type
//