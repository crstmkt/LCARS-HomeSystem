function StarDate() { 
    var today = new Date(); 
    var rawYear = today.getFullYear().toString(); 
    var year = rawYear.substr(3,1) + rawYear.substr(2,1) + rawYear.substr(1,1) + rawYear.substr(0,1); 
    var day = today.getDate().toString(); 
    if (day.length < 2) 
    { 
      day = '0' + day; 
    } 
    var month = (today.getMonth()+1).toString(); 
    if (month.length < 2) 
    { 
      month = '0' + month; 
    } 
    var StarDate = year + day + '.' + month; 
    var hour = today.getHours(); 
    var ampm = 'am' 
    if (hour > 12) 
    { 
      hour = (hour - 12).toString(); 
      ampm = 'pm' 
    } 
    else 
    { 
      hour = hour.toString(); 
    } 
    var minutes = today.getMinutes().toString(); 
    if (minutes.length < 2) 
    { 
      minutes = '0' + minutes; 
    } 
    var seconds = today.getSeconds().toString(); 
    if (seconds.length < 2) 
    { 
      seconds = '0' + seconds; 
    } 
    StarDate = StarDate + '   ' + hour + ':' + minutes + ':' + seconds + ' ' + ampm; 
    postMessage(StarDate); 
    setTimeout("StarDate()",1000); 
   } 
   StarDate(); 