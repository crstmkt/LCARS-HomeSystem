function startClean(){
    ws.send('{"id":'+getI()+',"type": "call_service", "domain": "vacuum", "service": "start", "service_data":{"entity_id": "vacuum.lcars_clean"}}')
}