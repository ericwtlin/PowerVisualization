function GetTrafficOption(traffic_data){

	option = {
		//color: ['gold','aqua','lime'],
		title : {
			text: '北京市交通流量统计',
			x:'right'
		},
		/*
		tooltip : {
			trigger: 'item',
			formatter: function (v) {
				return v[1].replace(':', ' > ');
			}
		},
		*/
		toolbox: {
			show : true,
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
		series : [
			{
				name:'拥堵',	//这里以朝阳北路为例
				type:'map',
				mapType: 'none',
				data:[],
				geoCoord: traffic_data.nodes_geoCoord,

				markLine : {
					smooth:true,
					smoothness: 0,	//smoothness设为0时为直线
					symbolSize: [0, 0], //[0, 0]时，可以去掉箭头
					effect : {
						show: false,
						//loop: false,
						scaleSize: 1,
						period: 30,
						color: '#fff',
						shadowBlur: 10
					},
					itemStyle : {
						normal: {
							borderWidth:1,
							lineStyle: {
								type: 'solid',
								color: 'red',
								shadowBlur: 10,
								//width: 
							}
						}
					},
					data : traffic_data.jam_line
				}
			},
			{
				name:'缓行',	//这里以人大会堂西路为例
				type:'map',
				mapType: 'none',
				data:[],
				

				markLine : {
					smooth:true,
					smoothness: 0,	//smoothness设为0时为直线
					symbolSize: [0, 0], //[0, 0]时，可以去掉箭头
					effect : {
						show: false,
						//loop: false,
						scaleSize: 1,
						period: 30,
						color: '#fff',
						shadowBlur: 10
					},
					itemStyle : {
						normal: {
							borderWidth:1,
							lineStyle: {
								type: 'solid',
								color: 'yellow',
								shadowBlur: 10,
								//width: 
							}
						}
					},
					data : traffic_data.slow_line
				}
			},
			{
				name:'畅通',	//这里以中关村南大街为例
				type:'map',
				mapType: 'none',
				data:[],
				

				markLine : {
					smooth:true,
					smoothness: 0,	//smoothness设为0时为直线
					symbolSize: [0, 0], //[0, 0]时，可以去掉箭头
					effect : {
						show: false,
						//loop: false,
						scaleSize: 1,
						period: 30,
						//color: '#fff',
						//shadowBlur: 10
					},
					itemStyle : {
						normal: {
							borderWidth:1,
							lineStyle: {
								type: 'solid',
								color: 'green',
								shadowBlur: 10,
								//width: 
							}
						}
					},
					data : traffic_data.quick_line
				}
			},
		]
	};

}
