function getTime(){
    
        getTime(moment())
}

function getTime(str){
		return moment(str).format("DD.MM.YYYY hh:mm:ss")
}

function writeSystemTime(){
    $('#systemTime').html('SYSTEM TIME ' + getTime());
}