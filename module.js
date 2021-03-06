$( document ).ready(function() {
    $('body').append( LCARS.create(nemesisUI).dom );
    renderDashboard();
    ShowMainFrame(true);
	initiateLogger();
    initiateWasteCollection();
});

var uiColors = ['bg-blue-1', 'bg-blue-2','bg-blue-3','bg-blue-4', 'bg-green-1','bg-green-2','bg-green-3','bg-green-4', 'bg-white'];

var timer_colorChanges = null
var array_colorChangeObjects = null;

var nemesisUI = {type:'wrapper', id:'wpr_viewport', version:'row', flex:'h', class:{'scale': true, 'red-alert' : false},
arrive:function(){var dom = this.dom; LCARS.helper.viewportZoom(dom, {width:1440, height:1080}); 
    window.addEventListener("resize", function(){LCARS.helper.viewportZoom(dom, {width:1440, height:1080});});},

children:[

//Main Area
{type:'wrapper', version:'column', id:'wpr_mainView', flex:'v', flexc:'h', children:[   

    //Header
    {type:'wrapper', version:'header', flex:'h', children:[

        //Elbow & Button
        {type:'wrapper', version:'column', flex:'v', children:[
            {type:'button', color:LCARS.helper.aRandColor(uiColors), size:'step-two', hidden: true},
            {type:'elbow', version:'horizontal', direction:'bottom-left', color:LCARS.helper.aRandColor(uiColors), flexc:'v', hidden: true}
        ]},

        {type:'wrapper', flexc:'h', flex:'v', children:[
            
            //Header Content Area
            {type:'wrapper', version:'content', hidden: true, flexc:'v', flex:'h', children:[

                //Logs Area
                {type:'wrapper', flexc:'v', flex:'h', children:[
                    {id: 'logs', type:'text', color:'text-blue-1', text:''},
                ]},

                {type: 'wrapper', flexc:'h', flex:'v', children:[
                    //Header Title
                    {type:'title', text:'LCARS HOME SYSTEM'},
                    {type:'title', id:'systemTime', size: 'half',text: setInterval(function(){writeSystemTime();}, 1000) }, 
                    
                    //Header Round Button Group
                    {type:'wrapper', flex:'h', version:'button-wrap', children:[
                        {type:'button', color:'bg-grey-4', version:'round', label:'GREY MODE', href:'javascript:activateGreyMode();'},
                        {type:'button', color:'bg-blue-2', version:'round', label: 'RELOAD', href:'javascript:window.location.reload(true);'},
                        {type:'button', id:'guestWifiSwitch', color: 'bg-orange-4', version:'round', label: 'GUEST WIFI', href:'javascript:toggleGuestWifi();'},
                        {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round', label:'Test', href:'javascript:changeHub();'},
                        {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round', label:'clean', href:'javascript:startClean();'},
                        {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round'}
                    ]}
                ]}
            ]},

            //Header Bottom Bars
            {type:'row', version:'frame', flex:'h', children:[
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), flexc:'h', hidden: true},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true}
            ]}

        ]}

    ]},

    //Main Content Area
    {type:'wrapper', version:'main', flex:'h', flexc:'v', children:[

        //Left Columns & Elbow
        {type:'wrapper', version:'column', flex:'v', children:[
            {type:'elbow', version:'horizontal', direction:'top-left', color:LCARS.helper.aRandColor(uiColors), class:'step-two', hidden: true},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, label: 'DASHBOARD', href:'javascript:renderDashboard()'},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, size:'step-two'},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, size:'step-two'},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, flexc:'v'},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, label: 'WIFI', href:'javascript:renderWiFi();'},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, size: 'step-two'}
        ]},

        {type:'column', flexc:'h', flex:'v', children:[
            //Top Bars Group
            {type:'row', flex:'h', version:'frame', children:[
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true, size:'small'},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true, flexc:'h'},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), hidden: true}
            ]},
		
            //Start Main Content Wrapper
            {type:'wrapper', id:'wpr_centerControls' ,  version:'content', flex:'h', flexc:'v',children:[
                //Here, Content of Views will be rendered
            ]}
            //End Main Content Wrapper
		]}
			
    ]}    
]}
]};
