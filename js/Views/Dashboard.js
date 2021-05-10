var _waste = new Waste(0);
var _weather = new Weather(0);

function renderDashboard(){
    $('#wpr_centerControls').html('');
    $('#wpr_centerControls').append( LCARS.create(DashboardUI).dom );
    showMainFrame();
    //I know this is ugly but I dont know how this can be done better
    _waste.getNextWasteCollection()
    _weather.getWeather();
    setInterval(function(){
        _waste.getNextWasteCollection();
        _weather.getWeather();
    }.bind(this), 3600000);
}

var uiColors = ['bg-color-1', 'bg-color-2','bg-color-3','bg-color-4', 'bg-color-5'];

var DashboardUI = 
    {type: 'wrapper', version: 'content', flex: 'h', children:[
        
        {type:'column', id: 'weather', version: 'content', flex: 'h', children:[
            //WeatherLeft
            {type:'column', id:'weather_left', flex:'v', children:[
                {type:'row', flex:'h', hidden: true, children:[
                    {type:'cap', version:'round-left', color:LCARS.helper.aRandColor(uiColors), size: 'small'},
                    {type:'title', size: 'small', text:'WEATHER'}
                ]},
                //WasteCollectionContentWrapper
                {type:'wrapper', version:'content', hidden: true, children:[
                    {type: 'text', id: 'weather-c', color: 'text-color-1', text: ''}
                ]},
                {type:'row', id:'weather_bottom_frame', flex:'h', hidden: true, children:[
                    {type:'cap', version:'round-left', color:LCARS.helper.aRandColor(uiColors), size: 'small'},
                    {type:'bar', color:LCARS.helper.aRandColor(uiColors), flexc:'h',}
                ]}
            ]},
             //WeatherRight
            {type:'column', id: 'weather_right', children:[
                {type:'elbow', version:'horizontal', direction:'top-right', color:LCARS.helper.aRandColor(uiColors), hidden: true},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, label: 'CURRENT', href:'javascript: this._weather.mode = 0; _weather.getWeather()'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, label: 'FORECAST', href:'javascript: this._weather.mode = 1; _weather.getWeather()'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, label: '' , href:''},
                {type:'elbow', version:'horizontal', direction:'bottom-right', color:LCARS.helper.aRandColor(uiColors), hidden: true}
            ]},

        ]}, 
        
        //WasteCollections
        {type: 'column', id: 'wasteCollections', version: 'content', flex:'h', children:[
            //WasteCollectionLeft
            {type:'column', id: 'waste_left', version:'column', flex:'v', children:[
                {type:'elbow', version:'horizontal', direction:'top-left', color:LCARS.helper.aRandColor(uiColors), class:'step-two', hidden: true},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, label: 'NEXT FIVE', href:'javascript:javascript:this._waste.cntDays = 0;_waste.getNextWasteCollection();'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, label: 'NEXT 7 DAYS', href:'javascript:this._waste.cntDays = 7;_waste.getNextWasteCollection();'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, label: 'NEXT 30 DAYS' , href:'javascript:this._waste.cntDays = 30;_waste.getNextWasteCollection();'},
                {type:'elbow', version:'horizontal', direction:'bottom-left', color:LCARS.helper.aRandColor(uiColors), class:'step-two', hidden: true}
            ]},
            //WasteCollectionRight
            {type:'column', id: 'waste_right', flex:'v', children:[
                {type:'row', flex:'h', version:'frame', hidden: true, children:[
                    {type:'title', size: 'small', text:'WASTE COLLECTIONS'},
                    {type:'cap', version:'round-right', color:LCARS.helper.aRandColor(uiColors), size: 'small'}
                ]},
                //WasteCollectionContentWrapper
                {type:'wrapper', version:'content', hidden: true, children:[
                    {type: 'text', id: 'nextWasteCollection', color: 'text-color-1', text: ''}
                ]},
                {type:'row', version:'frame', flex:'h', hidden: true, children:[
                    {type:'bar', color:LCARS.helper.aRandColor(uiColors), flexc:'h',},
                    {type:'cap', version:'round-right', color:LCARS.helper.aRandColor(uiColors), size: 'small'}
                ]}
            ]},
        ]}
]};