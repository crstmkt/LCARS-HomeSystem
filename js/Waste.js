function initiateWasteCollection(){
	getNextWasteCollection();
	setInterval(function(){getNextWasteCollection();}, 3600000)
}

function getNextWasteCollection(){
	apiCallWasteCollectionDate();
	apiCallWasteCollectionType();
}

function apiCallWasteCollectionType(){
	$.ajax({
			url: getHost() + '/api/states/sensor.next_waste_collection_type',
			type: 'GET',
			headers: {
				'Authorization': 'Bearer ' + getToken()
			},
			success: function(data){
				$('#nextWasteCollectionType').html('<p>: ' + data.state.toUpperCase() + '</p>');
			}
		})
}

function apiCallWasteCollectionDate(){
	$.ajax({
			url: getHost() + '/api/states/sensor.next_waste_collection_date',
			type: 'GET',
			headers: {
				'Authorization': 'Bearer ' + getToken()
			},
			success: function(data){
				$('#nextWasteCollectionDate').html('<p>' + data.state + '</p>');
			}
		})
}
//http://lcars-homesystem:8123/api/states/sensor.next_waste_collection_date
//http://lcars-homesystem:8123/api/states/sensor.next_waste_collection_type
//