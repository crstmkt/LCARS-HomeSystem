function startClean(){
    $.ajax({
        type: 'POST',
        url: getHost() + '/api/services/vacuum/start',
        data: '{"entity_id": "vacuum.lcars_clean"}',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'content-type': 'application/json'
        }
    })
    log('Started cleaning');
}