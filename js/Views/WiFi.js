function renderWiFi(){
    $('#wpr_centerControls').html('');
    $('#wpr_centerControls').append( LCARS.create(WiFiUI).dom );
}
var uiColors = ['bg-blue-1', 'bg-blue-2','bg-blue-3','bg-blue-4', 'bg-green-1','bg-green-2','bg-green-3','bg-green-4', 'bg-white'];

var WiFiUI = 

{type: 'wrapper', children: [
    //Wifi Start
    {type:'defaultBracket', namespace:'sdk', content: [
        {type:'text', text:'SSID'}
    ],
    coloring:{
            elbow:LCARS.helper.aRandColor(uiColors),
            column1:LCARS.helper.aRandColorGroup(uiColors, 3),				
            column2:LCARS.helper.aRandColorGroup(uiColors, 3),				
            column3:LCARS.helper.aRandColorGroup(uiColors, 3),				
            column4:LCARS.helper.aRandColorGroup(uiColors, 3),
            animated:'bg-red-1'                                          
        }        
    }
    //Wifi End
]};