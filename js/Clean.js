function startClean(){
    $.ajax({
        type: 'POST',
        url: 'http://homeassistant:8123/api/services/vacuum/start',
        data: '{"entity_id": "vacuum.lcars_clean"}',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'content-type': 'application/json'
        }
    })
}