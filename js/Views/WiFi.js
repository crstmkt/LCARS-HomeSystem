function renderWiFi(){
    $('#wpr_centerControls').html('');
    $('#wpr_centerControls').append( LCARS.create(WiFiUI).dom );
    showMainFrame();
}
var uiColors = ['bg-color-1', 'bg-color-2','bg-color-3','bg-color-4', 'bg-color-5'];

var WiFiUI = 
    {type: 'content', children: [
        //Wifi Start
        {type: 'wrapper', hidden: true, children:[
            {
            type:'defaultBracket', namespace:'sdk',
            content:[
                {type: 'img', id: 'wifiqr', src:'./img/guest_wifi_qr.jpg'}
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
        ]}
        //Wifi End
    ]};