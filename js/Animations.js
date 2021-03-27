// Barebones 'Automated' Show Pattern - idea testing a later proper module.
function ShowMainFrame(){  

    var headerBars = $('#wpr_mainView > .header .row *');
    var headerColumn = $('#wpr_mainView > .header .column > *');
    var mainBars = $('#wpr_mainView > .main .row *');
    var mainColumn = $('#wpr_mainView > .main > .elbow, #wpr_mainView > .main .column > *');
    var centerControlsColumn = $('#wpr_centerControls > *');

    sequenceHeaderPattern = []
    sequenceFooterPattern = []

    $(headerColumn).each(function(){
        sequenceHeaderPattern.push(this);
    });       

    $(headerBars).each(function(){
        sequenceHeaderPattern.push(this);
    });

    sequenceHeaderPattern.reverse()

    $(mainBars).each(function(){
        sequenceFooterPattern.push(this);
    });

    sequenceFooterPattern.reverse()

    $(mainColumn).each(function(){
        sequenceFooterPattern.push(this); 
    }); 

    $(centerControlsColumn).each(function(){
        sequenceFooterPattern.push(this); 
    }); 

    sequenceFooterPattern.push($('#wpr_leftControls > :first-child'))
    sequenceFooterPattern.push($('.header .content'))
    
    $(sequenceHeaderPattern).showObjectSequence({});
    $(sequenceFooterPattern).showObjectSequence({});
}

// Barebones 'Automated' Alert System - idea testing a later proper module.    
var headerRASequence = []
var mainRASequence = []
var timer_whiteFlash = null;  
var timing_sequence = 65;

function raMainFrameSetup(){

    var headerBars = $('#wpr_mainView > .header .row *');
    var headerColumn = $('#wpr_mainView > .header .column > *');
    var mainBars = $('#wpr_mainView > .main .row *');
    var mainColumn = $('#wpr_mainView > .main .column > *');

    $(headerColumn).each(function(){
        headerRASequence.push(this);
    });       
    $(headerBars).each(function(){
        headerRASequence.push(this);
    });

    $(mainColumn).each(function(){
        mainRASequence.push(this);
    });

    mainRASequence.reverse();

    $(mainBars).each(function(){
        mainRASequence.push(this); 
    });
}

/** +brief Show Object
*	@args - {fade:boolean, timing:int, success:function(){}}
*  @args.fade - true/false - Override objects fade setting.
*  @args.timing - Transition time for fading.
*  !note - If object has an ID and has a definition within the 'allObjects' variable
*          it checks to see if there is an attached 'show' event specifically for that object.
*          This allows elements to trigger events when they appear within view.
*/	
$.fn.showObject = function(args){
    this.each(function(){
        var objectID = $(this).attr('id'); 
        if($(this).hasClass('fade') && args.fade !== false){
            $(this).removeClass('hidden');
            $(this).css('opacity', '1');
    
            //if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing + timing_sequence);}}
        }else{
            $(this).removeClass('hidden');
            //if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing + timing_sequence);}}
        }   
    });
    if(typeof args.success === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence);}
    return this;   
    }

/** +brief Sequence Show - Delay and sequential
*  !note - Show elements and triggers optional individual element Show function.
*  @args - {fade:boolean, timing:250, success:function(){}}
*  @args.fade - true/false - Override objects fade setting.
*  @args.timing - Transition time for fading.
*  !note - If object has an ID and has a definition within the 'allObjects' variable
*          it checks to see if there is an attached 'show' event specifically for that object.
*          This allows elements to trigger events when they appear within view.
*/	     
$.fn.showObjectSequence = function(args){		
    var array = this;
    var count = array.length
    var numberStart = args.number || 0;
    var object = array[numberStart]
    var objectID = $(object).attr('id'); 
    if(!args.timing){args.timing = 0;}
    if($(object).hasClass('fade') && args.fade !== false){
        $(object).removeClass('hidden');
        $(object).css('opacity', '1');
        //if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing+timing_sequence);}}
    }else{
        $(object).removeClass('hidden');
        //if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing+timing_sequence);}}
    }    
    
    if(numberStart+1 !== count){
        setTimeout(function(){ $(array).showObjectSequence({timing:args.timing, number:numberStart+1, success:args.success}); }, args.timing+timing_sequence);
    }else{
       if(typeof args.success  === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence);}
    }         
}

//Change current Site
//Get first child of wrp_centerControls, then remove hidden class from the the given dom ID

function changeHub(){
    var activeHub = $('#wpr_centerControls > :first-child');
    sequenceHubPattern = [];

    $(activeHub).each(function(){
        sequenceHubPattern.push(this);
    });
    
    sequenceHubPattern.reverse();
    sequenceHubPattern.hideObjectSequence({});

}


$.fn.hideObjectSequence = function(args){		
    var array = this;
    var count = array.length
    var numberStart = args.number || 0;
    var object = array[numberStart]
    var objectID = $(object).attr('id'); 
    if(!args.timing){args.timing = 0;}
    if($(object).hasClass('fade') && args.fade !== true){
        $(object).addClass('hidden');
        $(object).css('opacity', '0');
        //if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing+timing_sequence);}}
    }else{
        $(object).addClass('hidden');
        //if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing+timing_sequence);}}
    }    
    
    if(numberStart+1 !== count){
        setTimeout(function(){ $(array).showObjectSequence({timing:args.timing, number:numberStart+1, success:args.success}); }, args.timing+timing_sequence);
    }else{
       if(typeof args.success  === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence);}
    }         
}