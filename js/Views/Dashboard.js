function renderDashboard(){
    $('#wpr_centerControls').html('');
    $('#wpr_centerControls').append( LCARS.create(viewUI).dom );
}
var uiColors = ['bg-blue-1', 'bg-blue-2','bg-blue-3','bg-blue-4', 'bg-green-1','bg-green-2','bg-green-3','bg-green-4', 'bg-white'];

var viewUI = 

{type: 'column', flex: 'v', flexc: 'h', children: [
    {type: 'wrapper', version: 'content', flex:'h', flexc:'v', children:[
        //WasteCollectionLeft
        {type:'wrapper', version:'column', flex:'v', children:[
            {type:'elbow', version:'horizontal', direction:'top-left', color:LCARS.helper.aRandColor(uiColors), class:'step-two', hidden: true},
            {type:'block', color:LCARS.helper.aRandColor(uiColors), hidden: true, label: 'WASTE'}
        ]},
        //WasteCollectionTop
        {type:'column', flexc: 'h', flex:'v', children:[
            {type:'row', flex:'h', version:'frame', hidden: true, children:[
                {type:'title', size: 'small', text:'NEXT WASTE COLLECTION'},
                {type:'cap', version:'round-right', color:LCARS.helper.aRandColor(uiColors), size: 'small'}
            ]},
            //WasteCollectionContentWrapper
            {type:'wrapper', version:'content', flex:'h', flexc:'v', hidden: true, children:[
                {type: 'wrapper', flex: 'h', flexc: 'v', children: [
                    {type: 'text', id: 'nextWasteCollection', color: 'text-blue-1', text: ''}
                ]}
            ]}
        ]}
    ]}
]};