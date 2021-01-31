function initiateLogger(){
	setInterval(() =>{
		getLog();
	}, 1000);
}

function log(str){
    
    var logsize = $("#logs p").length;

    if(logsize >= 7){
        $('#logs').children().eq(0).remove();
    }

    $('#logs').append('<p>'+ str.toUpperCase() +'</p>');
}

function getLog(){
	$.ajax({
			url: getHost() + '/api/logbook',
			headers: {
				'Authorization': 'Bearer ' + getToken()
			},
			success: function(data){
				data.forEach(elem => 
					log(getTime(elem.when)+' '+ elem.name + ' ' + stateMessage(elem)));
			}
		})
}

function stateMessage(elem){
	return elem.state === undefined ? elem.message : elem.state;
}