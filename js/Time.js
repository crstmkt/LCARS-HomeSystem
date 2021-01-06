function getTime(){
    
        return moment().format("DD.MM.YYYY hh:mm:ss")
    
}

function writeSystemTime(){
    $('#systemTime').html('SYSTEM TIME ' + getTime());
}