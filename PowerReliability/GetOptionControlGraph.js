function GetOptionControlGraph(){

	option = {
		tooltip : {
			trigger: 'item',
			formatter: '{b}'
		},
		series : [
			{
				name: '北京',
				type: 'map',
				mapType: '北京',
				selectedMode : 'single',
				itemStyle:{
					normal:{label:{show:true}},
					emphasis:{label:{show:true}}
				},
				data:[
					//{name:'海淀区',selected:true}
				]
			}
		]
	};
}
