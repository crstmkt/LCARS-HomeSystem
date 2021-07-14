//Removes classes from DOM element using Wildcard

$.fn.declasse=function(re){
    return this.each(function(){
        var c=this.classList
        for (var i=c.length-1;i>=0;i--){
            var classe=""+c[i]
            if (classe.match(re)) c.remove(classe)
        }
    })
}