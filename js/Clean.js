function startClean(){
    $.ajax({
        type: 'GET',
        url: getHost() + '/api/states/vacuum.lcars_clean',
        //data: '{"entity_id": "vacuum.lcars_clean"}',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'content-type': 'application/json'
        },
        success: function(data){
            callbackStartClean(data.state)
        }
    })
}

function callbackStartClean(state){
    $.ajax({
        type: 'POST',
        url: getHost() + '/api/services/vacuum/' + state == 'idle' ? 'start' : 'pause',
        data: '{"entity_id": "vacuum.lcars_clean"}',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'content-type': 'application/json'
        }
    })
}