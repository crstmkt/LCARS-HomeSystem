function getCurrentTimestampWithMS(){
    var timeInMS = new Date();
    return date = ''.concat(
        timeInMS.getDay(), '.',
        timeInMS.getMonth(), '.',
        timeInMS.getFullYear(), ' ',
        timeInMS.getHours(), ':',
        timeInMS.getMinutes(), ':',
        timeInMS.getSeconds(), ':',
        timeInMS.getMilliseconds()
    );
}

