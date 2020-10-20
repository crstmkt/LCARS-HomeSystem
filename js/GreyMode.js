function activateGreyMode(){
    $.ajax({
        type: 'POST',
        url: 'http://homeassistant:8123/api/events/grey_mode_activate',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'content-type': 'application/json'
        }
    })
}