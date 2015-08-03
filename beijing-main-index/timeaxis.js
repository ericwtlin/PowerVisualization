//画坐标轴
	function drawAxisTime(filename, svg, w, h, data) {
		
		//var data = ["1995", "1996", "1997"];
		var padding = 60;
		var axisw  = w - 2*padding;
		var axish = h;
		
		var svgTimeAxis = svg.append("g")//在body的结尾添加svg
			    .attr("class", "axis") // 指定"axis" 类;
					
		//画坐标线<line x1="0" y1="0" x2="500" y2="50" stroke="black"/>
		svgTimeAxis.append("line")
				   .attr("x1", padding)
				   .attr("y1", axish)
				   .attr("x2", axisw+padding)
				   .attr("y2", axish)
				   .attr("stroke", "black");

		//设置坐标轴的比例尺
		var length = data.length;
		//序数坐标比例尺
		var xScale = d3.scale.linear()
				.domain([0, length-1])
				.range([padding, axisw+padding]);

		var r = 5;

		//画原点
		var circles = svgTimeAxis.selectAll("circle")
			.data(data)
			.enter()
			.append("circle")
			.attr("class", "circle")
			.attr("id", function(d){
				return d;
			})
			.style("fill", function(d, i) {
				return "#63B8FF";
			});

			circles.attr("cx", function(d, i) {
				return xScale(i);
			})
			.on("click", function(d){
				//var year = this.id;
				circlemouseover(filename, provinceId, coutiesId, d, this);	
			})
			.attr("cy", axish)
			.attr("r", r);

		//画坐标值 <text x="250" y="25">Easy-peasy</text>
		var texts = svgTimeAxis.selectAll("text")
			.data(data)
			.enter()
			.append("text")
			.text(function(d, i){
				return d;
			})
			.attr("x", function(d, i) {
				return xScale(i);
			})
			.attr("y", axish+30)
			.attr("text-anchor", "middle");//文本居中
	}

	//点击原点轴原点时间
	function circlemouseover(filename, provinceId, coutiesId, year, t){

		globalyear = year;

		//现将所有的圆的坐标回复成原大小
		d3.selectAll(".circle")
		  .attr("r", 5)
		  .style("fill", "#63B8FF")
		//一下代码是将坐标轴上的圆变大
		if(t != undefined) {
			var circle = d3.select(t);
			circle.transition()
	  			.duration(750)
	  			.attr("r", function(d){  //设置圆点半径                      
						return 5+5;                          
					}).style("fill", "#C0FF3E");
	  	}
  		
  		//var jsonpath = "json/" +this.id + ".json";
  		//var jsonpath = "json/data/" + filename + "/" + year + ".json";
  		var jsonpath = "beijing-main-index/json-data/" + year + ".json";
		console.log("jsonpath", jsonpath);

  		//画国家地图上的饼图
  		d3.json(jsonpath, function(error, yeardata){
  			
				if (error)  
					return console.error(error);
				if(yeardata == undefined){
					return ;
					}
  			
			//d3.selectAll("#pie").transition().duration(350).remove();//删除原来的pie
			d3.selectAll("#pie").remove();
			
			d3.selectAll(".province_name").remove();//删除原来的省名
			//比例尺函数
	  		var scale = d3.scale.linear()
			.domain([yeardata.min, yeardata.max])
			.range([15, 35])
			.nice();
			
			
			
			provinceDataYear=yeardata;  //记录下每个省的数据，为背景色准备
			
			var provinceMax=yeardata.max;
			var provinceMin=yeardata.min;
			var provinceData = [];
			//var provinceDataKey = [12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 51, 52, 53, 54, 61, 62, 63, 64, 65];
			var provinceDataKey = [110228, 110116, 110111, 110229, 110109, 110114, 110115, 110113, 110117, 110112, 110105, 110108, 110106, 110107, 110102, 110101, 110104, 110103];
			for(var i=0; i<provinceDataKey.length; i++) {
				console.log("provinceDataKey[i]", provinceDataKey[i]);
				console.log("yeardata[provinceDataKey[i]]",yeardata[provinceDataKey[i]]);
				provinceData.push(yeardata[provinceDataKey[i]].sum);
			}

			drawRangeFinal(provinceMax, provinceMin, provinceData);   //画范围控制条
			
			//给国家地图中的省加饼图
			nodes.forEach(function(d){
				var name = yeardata[d.id];
				if(name != undefined) {
					setTimeout(function(){
						pie(svg, name, scale(name.sum), d, year);
						//加上省的名字
						svg.append("text").attr("class","province_name")
							.attr("dx",d.x).attr("dy",d.y-scale(name.sum)/2).attr("text-anchor","middle")
							.attr("fill",textColor).attr("font-size","12px").attr("fill-opacity",0.0)
							.text(d.name);
					});
				}
			});
		});
		
		
	
	}
