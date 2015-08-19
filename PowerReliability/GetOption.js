function GetReliabilityOption(data){
option = {
    title : {
        text: '北京市电网可靠性概览',
        x:'center',
        y:'top'
    },
    tooltip : {
        trigger: 'item',
        //formatter: '{a} : {b}'
		formatter: function (params,ticket,callback) {
			//console.log(params);
			var ret = "";
			if (typeof params[5].name != 'undefined'){	//说明是node
				ret += params[5].name + ": " + params[5].value;
			}else{
				ret += params[5].source + "-" + params[5].target;
			}
			return ret;
		}
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        }
    },
	/*
    legend: {
        x: 'left',
        //data:['市','区县', '乡镇、区域']
        data:['0','1', '2']
    },
	*/
    series : [
        {
            type:'force',
            name : "Force tree",
            ribbonType: false,
            categories : data.categories,
			itemStyle: {
                normal: {
                    label: {
                        show: true,		//控制label显示
                        textStyle: {
                            color: '#333'
                        },
						formatter: function (params) {
							return 'hello';
						}
                    },
                    nodeStyle : {
                        brushType : 'both',
                        borderColor : 'rgba(255,215,0,0.4)',
                        borderWidth : 1,
						color: function(params){		//根据数据控制颜色,但是在这个位置设置是整体控制、控制所有点的颜色,而不是单独处理
							console.log(params);
							//if (params.series.)
							return '#FF0000';
						}
                    },
                    linkStyle: {
                        type: 'curve'
                    },
					
					color: function(params){		//根据数据控制颜色,但是在这个位置设置是整体控制、控制所有点的颜色,而不是单独处理
						console.log(params);
						//if (params.series.)
						return '#FF0000';
					}
					
                },
                emphasis: {
                    label: {
                        show: true,		//控制label显示
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                        textStyle: {
                            color: '#000'
                        },
						weight: 100
                    },
                    nodeStyle : {
                        //r: 30
                    },
                    linkStyle : {}
                }
            },
            minRadius : 15,
            maxRadius : 25,
            coolDown: 0.995,
            steps: 2,
            nodes : data.nodes,
            links : data.links
            
        }
    ]
};

}
