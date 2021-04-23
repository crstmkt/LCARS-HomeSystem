var _waste = new Waste(0);

function renderDashboard(){
    $('#wpr_centerControls').html('');
    $('#wpr_centerControls').append( LCARS.create(DashboardUI).dom );
    showMainFrame();
    _waste.getNextWasteCollection() //I know this is ugly but I dont know how this can be done better
    setInterval(function(){
        _waste.getNextWasteCollection()
    }.bind(this), 3600000);
}

var uiColors = ['bg-color-1', 'bg-color-2','bg-color-3','bg-color-4', 'bg-color-5'];

var DashboardUI = 
    {type: 'wrapper', version: 'content', flex:'h', flexc:'v', children:[
        //WasteCollectionLeft
        {type:'wrapper', version:'column', flex:'v', children:[
            {type:'elbow', version:'horizontal', direction:'top-left', color:LCARS.helper.aRandColor(uiColors), class:'step-two', hidden: true},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, label: 'NEXT FIVE', href:'javascript:javascript:this._waste.cntDays = 0;_waste.getNextWasteCollection();'},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, label: 'NEXT 7 DAYS', href:'javascript:this._waste.cntDays = 7;_waste.getNextWasteCollection();'},
            {type:'button', color:LCARS.helper.aRandColor(uiColors), hidden: true, label: 'NEXT 30 DAYS' , href:'javascript:this._waste.cntDays = 30;_waste.getNextWasteCollection();'}
        ]},
        //WasteCollectionTop
        {type:'column', flexc: 'h', flex:'v', children:[
            {type:'row', flex:'h', version:'frame', hidden: true, children:[
                {type:'title', size: 'small', text:'WASTE COLLECTIONS'},
                {type:'cap', version:'round-right', color:LCARS.helper.aRandColor(uiColors), size: 'small'}
            ]},
            //WasteCollectionContentWrapper
            {type:'wrapper', version:'content', flex:'h', flexc:'v', hidden: true, children:[
                {type: 'wrapper', flex: 'h', flexc: 'v', children: [
                    {type: 'text', id: 'nextWasteCollection', color: 'text-color-1', text: ''}
                ]}
            ]}
        ]}
    ]};