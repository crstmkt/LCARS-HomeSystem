function startClean(){
    $.ajax({
        type: 'GET',
        url: getHost() + '/api/states/vacuum.saugroboter',
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
    
    var idleStates = ['idle', 'paused', 'docked']

    $.ajax({
        type: 'POST',
        url: getHost() + '/api/services/vacuum/' + (idleStates.includes(state) ? 'start' : 'pause'),
        data: '{"entity_id": "vacuum.saugroboter"}',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'content-type': 'application/json'
        }
    })
}