function GetOptionSubgraph2(graph_title, bar_data){
	
	option3 = {
		title : {
			text: graph_title,
			x:'center'
		},
		tooltip : {
			trigger: 'axis'
		},
		/*
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType : {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		*/
		calculable : true,
		xAxis : [
			{
				type : 'category',
				data : bar_data.x
			}
		],
		yAxis : [
			{
				type : 'value'
			}
		],
		series : [
			{
				name:'保有量',
				type:'bar',
				data: bar_data.y 
			}
		
		]
	};

	console.log("show subgraph2 finished");	
}
