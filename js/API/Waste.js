class Waste{

	cntDays = 0;

	constructor(_cntDays){
		this.cntDays = _cntDays;
	}

getNextWasteCollection(){
	console.log("getNextWasteCollection");
	this.apiCallWasteCollections(this.cntDays);
}

apiCallWasteCollections(cntDays){
	$.ajax({
		url: getHost() + '/api/states/sensor.next_waste_collection_type',
		type: 'GET',
		headers: {
			'Authorization': 'Bearer ' + getToken()
		},
		success: function(data){
			$('#nextWasteCollection').html('');
			if(cntDays == 0)
			{
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
			else
			{
				var cntEntries = 0;	
				for(i = 0; i < cntDays; i++)
				{
					var wdate = moment(Object.keys(data.attributes)[i]);
					var wdateminus2 = moment(Object.keys(data.attributes)[i]).add(-2, 'days');

					if(wdate.isBetween(moment(), moment().add(cntDays, 'days')))
					{
						if(moment() >= wdateminus2)
						{
							$('#nextWasteCollection').append('<p class="flash">' + wdate.format("DD.MM.YYYY") + ' : ' +data.attributes[Object.keys(data.attributes)[i]].toUpperCase() + '</p>');
							cntEntries++;
						}
						else
						{
							$('#nextWasteCollection').append('<p>' + wdate.format("DD.MM.YYYY") + ' : ' +data.attributes[Object.keys(data.attributes)[i]].toUpperCase() + '</p>');
							cntEntries++;
						}
					}
				}
				if(cntEntries == 0)
				{
					$('#nextWasteCollection').append('<p>' + 'NO WASTE COLLECTIONS IN THE NEXT ' + cntDays + ' DAYS</p>');
				}
			}
		}
	})
}
}

//http://lcars-homesystem:8123/api/states/sensor.next_waste_collection_date
//http://lcars-homesystem:8123/api/states/sensor.next_waste_collection_type
//