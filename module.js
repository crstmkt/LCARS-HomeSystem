$( document ).ready(function() {
    $('body').append( LCARS.create(nemesisUI).dom );
});

var uiColors = ['bg-blue-1', 'bg-blue-2','bg-blue-3','bg-blue-4','bg-green-1','bg-green-2','bg-green-3','bg-green-4'];

var nemesisUI = {type:'wrapper', id:'wpr_viewport', version:'row', flex:'h', 
arrive:function(){var dom = this.dom; LCARS.helper.viewportZoom(dom, {width:1440, height:1080}); 
    window.addEventListener("resize", function(){LCARS.helper.viewportZoom(dom, {width:1440, height:1080});});},

children:[

//Main Area
{type:'wrapper', version:'column', id:'wpr_mainView', flex:'v', flexc:'h', children:[   

    //Header
    {type:'row', version:'header', flex:'h', children:[

        //Elbow & Button
        {type:'column', flex:'v', children:[
            {type:'button', color:LCARS.helper.aRandColor(uiColors), size:'step-two'},
            {type:'elbow', version:'horizontal', direction:'bottom-left', color:LCARS.helper.aRandColor(uiColors), flexc:'v'}
        ]},

        {type:'wrapper', flexc:'h', flex:'v', children:[
            
            //Header Content Area
            {type:'wrapper', version:'content', flexc:'v', flex:'h', children:[

                //Logs Area
                {type:'wrapper', flexc:'v', flex:'h', children:[
                    {id: 'logs', type:'text', color:'text-blue-1', text:''},
                ]},

                //Header Title
                {type:'title', text:'LCARS HOME SYSTEM'},

                //Header Round Button Group
                {type:'wrapper', flex:'h', version:'button-wrap', children:[
                    {type:'button', color:'bg-grey-4', version:'round', label:'GREY MODE', href:'javascript:activateGreyMode();'},
                    {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round'},
                    {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round'},
                    {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round'},
                    {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round', label:'clean', href:'javascript:startClean();'},
                    {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round'}
                ]},
            ]},

            //Header Bottom Bars
            {type:'row', version:'frame', flex:'h', children:[
                {type:'bar', color:LCARS.helper.aRandColor(uiColors)},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors)},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors)},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), flexc:'h'},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors)},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors)},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors)}
            ]}

        ]}

    ]},

    //Main Content Area
    {type:'wrapper', version:'main', flex:'h', flexc:'v', children:[

        //Left Columns & Elbow
        {type:'wrapper', version:'column', flex:'v', children:[
            {type:'elbow', version:'horizontal', direction:'top-left', color:LCARS.helper.aRandColor(uiColors), class:'step-two'},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), label: 'DASH'},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), size:'step-two'},
            {type:'button', color:LCARS.helper.aRandColor(uiColors)},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), size:'step-two'},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), flexc:'v'}
        ]},

        {type:'column', flexc:'h', flex:'v', children:[
            //Top Bars Group
            {type:'row', flex:'h', version:'frame', children:[
                {type:'bar', color:LCARS.helper.aRandColor(uiColors)},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), size:'small'},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors)},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors), flexc:'h'},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors)},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors)},
                {type:'bar', color:LCARS.helper.aRandColor(uiColors)}
            ]},

            //Main Content Wrapper
            {type:'wrapper', style:{'overflow':'auto'}, version:'content', flexc:'v'}
        ]}
    ]}
]}
]}; 