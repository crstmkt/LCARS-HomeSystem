$(document).ready(function() {

    ws = new WebSocket('ws://homeassistant:8123/api/websocket');

    ws.addEventListener('open', function (event) {
      ws.send('{"type": "auth","access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYmVjYTgwYTYzMDU0MjM3ODJkYmE1YmQyYmRhMjBjNyIsImlhdCI6MTYwMjc1ODU3MCwiZXhwIjoxOTE4MTE4NTcwfQ.tTO4QCcQsNrHTv0Li7dh5gM33PDDrn28bxZfRzIO1Y0"}\n');
      ws.send('{"id": 1, "type": "subscribe_events", "event_type": "state_changed"}\n');
    });

    ws.onmessage = function(event) {
        var json_array = JSON.parse(event.data);
        var logstring = '';        

        if(json_array['type'] != undefined){
          logstring += json_array['type'];
          if(json_array['event'] != undefined){
            logstring += ' ' + json_array['event']['event_type'];
            if(json_array['event']['data'] != undefined){
              logstring += ' ' + json_array['event']['data']['entity_id'];
            }
          }
        }
        log(logstring.toLocaleUpperCase());
    };
    ws.onclose = log('Connection lost');
    ws.onopen = log('Connected');
});