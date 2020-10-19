function log(str){
    
    var logsize = $("#logs p").length;

    if(logsize >= 7){
        $('#logs').children().eq(0).remove();
    }

    $('#logs').append('<p>'+getCurrentTimestampWithMS()+' '+str+'</p>');
}