function GetOptionMainGraph(){
	option = {
		title : {
			text: '北京市总图',
			x:'center',
			textStyle: {
				fontSize: '20',
			}
		},
		tooltip : {
			trigger: 'item',
			formatter: function (params,ticket,callback) {
				//console.log(params);
				
				return params[5].name + "<br/>城市化水平总得分: " + params[5].value;
			}
		},
		dataRange: {
			min: 0,
			max: 100,
			x: 'left',
			y: 'bottom',
			text:['高','低'],           // 文本，默认为数值文本
			calculable : true
		},
		toolbox: {
			show: true,
			orient : 'vertical',
			x: 'right',
			y: 'center',
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		roamController: {
			show: true,
			x: 'right',
			mapTypeControl: {
				'北京': true
			}
		},
		series : [
			{
				name: 'charging station plan',
				type: 'map',
				mapType: '北京',
				roam: false,
				selectedMode:  'single',
				itemStyle:{
					normal:{label:{show:true}},	//未mouseover的情况下是否显示label
					emphasis:{label:{show:true}} 	//mouseover的情况下是否显示label
				},
				data: urbanlization_score_data,
				heatmap: {
					blurSize: 30,
					gradientColors: ['blue', 'cyan', 'lime', 'yellow', 'red'],
					minAlpha: 0.1,
					valueScale: 1,
					opacity: 1,
					data: heat_data

				}
			}
		]	
		
	};
}
