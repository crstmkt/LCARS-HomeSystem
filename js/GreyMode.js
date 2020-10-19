function activateGreyMode(){
    //ws.send('{ "id": ' + getI() + ', "type": "call_service", "domain": "automation", "service": "start", "service_data":{"entity_id": "automation.grey_mode"}}');
    $.ajax({
        type: 'POST',
        url: 'http://homeassistant:8123/api/events/grey_mode_activate',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'content-type': 'application/json'
        }
    })
}