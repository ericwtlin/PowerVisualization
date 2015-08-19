function drawMap(mapPath, svg, centerx, centery) {
	var projection = d3.geo.mercator()
					.center([centerx, centery])
					.scale(11000)
    			.translate([width/4+80, height/2]);
	
	var path = d3.geo.path().projection(projection);
	
	//var color = d3.scale.category20();
	
	d3.json(mapPath, function(error, root) {
		
		var backColor;

		if (error) 
			return console.error(error);
		console.log(root.features);
		
		svg.selectAll(".pathBeijing")
			//.data( topojson.feature(root, root.objects.beijing_csdn_mantou).features )
			.data(root.features )
			.enter()
			.append("path")
			.attr("class", "pathBeijing")
			.attr("stroke","#000")	//路径线颜色
			.attr("stroke-width", 0.3)	//路径线宽度
			.attr("fill", function(d,i){
					return background;	//板块背景色
				})
			.attr("d", path )
			.on("mouseover",function(d,i){
				backColor = d3.select(this).attr("fill");
               	var colorPre =  d3.select(this)
                .attr("fill",overColor);
            })
            .on("mouseout",function(d,i){
         		d3.select(this)
              	.attr("fill",backColor);
      		});
			/*
			.on("click",function(d,i){
                var id = d.properties.id;
                clickChina(d, i, "mapdata/geometryProvince/" + id + ".json");
            });
			*/

		//获取中心点坐标
		root.features.forEach(function(d, i) {
		//topojson.feature(root, root.objects.beijing_csdn_mantou).features.forEach(function(d, i) {
			var centroid = path.centroid(d);
			centroid.x = centroid[0];
			centroid.y = centroid[1];
			centroid.id = d.properties.id;
			centroid.name = d.properties.name
			centroid.feature = d;
			nodes.push(centroid);
		});

	});//end json


	d3.json("beijing-main-index/year.json", function(error, root){
			drawAxisTime("Beijing", svg, width, height+timeheight/2, root.years, nodes);//读取年份数据
			//第一次进来点击第一年的数据
			circlemouseover("Beijing", null, null, root.years[0]);
			//$("#"+root.years[0]).click();
	});

}//end drawMap

