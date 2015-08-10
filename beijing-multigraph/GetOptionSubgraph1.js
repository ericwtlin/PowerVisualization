function GetOptionSubgraph1(graph_title, pie_data){
	
	option2 = {
		title : {
			text: graph_title,
			x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : 'left',
			data:['人均GDP','城市人口比重','第三产业比重']
		},
		/*
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType : {
					show: true, 
					type: ['pie', 'funnel'],
					option: {
						funnel: {
							x: '25%',
							width: '50%',
							funnelAlign: 'left',
							max: 1548
						}
					}
				},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		*/
		calculable : true,
		series : [
			{
				name:'各项得分',
				type:'pie',
				radius : '55%',
				center: ['50%', '60%'],
				data: pie_data
			}
		]
	};

	console.log("show subgraph1 finished");
}
