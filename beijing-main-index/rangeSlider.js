	var selectMin =0;
	var selectMax =0;
	var totalMin =0;
	var totalMax =0;
	var provinceData = [];
	
	function drawRange(max, min){
		totalMin = min;
		totalMax = max;
		/*
		$("#range_1").ionRangeSlider({
			min: 100,
			max: 1000,
			from: 550
		});
		*/
		/*
		$("#range_1").ionRangeSlider({
			min: min,
			max: max,
			from:min,
			to: max,
			type: 'double',//设置类型
			step: 1,
			prefix: "",//设置数值前缀
			postfix: "",//设置数值后缀
			prettify: true,
			//grid: true
		});
		*/
		$("#range_1").ionRangeSlider({
			type: "double",
			min: 1000,
			max: 5000,
			from: 2000,
			to: 4000,
			onStart: function (data) {
				console.log(data);
			},
			onChange:  function (data) {
				console.log(data);
			},
			onFinish:  function (data) {
				console.log(data);
			},
			onUpdate:  function (data) {
				console.log(data);
			}
		});
	
	}
	$("#selectStyle").change(function(){
		$("#styleSrc").attr("href",$(this).val());
		selectMin = $(".irs-from").text();
		selectMax = $(".irs-to").text();
	});
	
	
	function drawRangeFinal(max, min, pData) {
		
		//添加范围控制条
		var rangeSlidery=420;
		var rangeSliderx=230;
		var rangeSlider = d3.select("#rangeSlider")
				.style("left", rangeSliderx + "px")
				.style("top", rangeSlidery + "px");
				
		provinceData = pData;
		provinceData.sort(compare);
		drawRange(max, min);
	}

	//数组排序
	function compare(a, b){
	    return parseFloat(a) - parseFloat(b);
	}
