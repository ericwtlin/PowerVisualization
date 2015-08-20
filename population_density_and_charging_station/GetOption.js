function GetOption(data){
	option = {
		title : {
			text: '人口密度与充电站规划',
			x:'center',
			textStyle: {
				fontSize: '20',
			}
		},
		tooltip : {
			trigger: 'item',
			formatter: function (params,ticket,callback) {
				//console.log(params);
				
				if(params[5].type == null || params[5].type == undefined){	//说明是地区区块
					return params[5].name + "<br/>人口密度: " + params[5].value;
					
				}else{	//说明是markPoint
					//return params[5].name + "<br/>类别: " + params[5].type + "<br/>功率: " + params[5].power + "<br/>电压: " + params[5].voltage;
					return params[5].name + "<br/>类别: " + params[5].type;
				}
			}
		},
		dataRange: {
			min: 0,
			max: 2500,
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
				selectedMode:  'multiple',
				itemStyle:{
					normal:{label:{show:true}},	//未mouseover的情况下是否显示label
					emphasis:{label:{show:true}} 	//mouseover的情况下是否显示label
				},
				data: data.population_density_data,
				markPoint:{
					clickable: true,
					symbol: 'circle',
					symbolSize: 10,
					effect: {
						show: true,
						color: '#EEEE86',
						scaleSize: 1,	//控制光环大小	
					},
					itemStyle: {
						normal: {
							borderColor: '87cefa',
							borderWidth: 1,
							label: {
								show:false,
								
								formatter: function (params,ticket,callback) {//格式化展现（标签+值）
									return params.name + params.value;
									//return params.value + params.name;
								}  
							}
						},
						emphasis: {
							borderColor: '1e90ff',
							borderWidth: 5,
							label: {
								show: false,
								formatter: function (params,ticket,callback) {//格式化展现（标签+值）
									return params.name + params.value;
									//return params.value + params.name;
								}  
							}
						}
					},
					data: data.charging_stations_info
					
				},
				geoCoord : data.charging_stations_geoCoord,
				heatmap: {
					blurSize: 30,
					gradientColors: ['blue', 'cyan', 'lime', 'yellow', 'red'],
					minAlpha: 0.1,
					valueScale: 1,
					opacity: 1,
					data: data.heat_data

				}
			}
		]	
		
	};
}
