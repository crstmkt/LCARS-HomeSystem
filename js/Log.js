function log(str){
    
    var logsize = $("#logs p").length;

    if(logsize >= 5){
        $('#logs').children().eq(0).remove();
    }

    $('#logs').append('<p>'+getCurrentTimestampWithMS()+' '+str+'</p>');
}