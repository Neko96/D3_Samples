/**
var dataSet = [
	{name:"a", val1: 1000, val2: 500 },
	{name:"a", val1: 2000, val2: 400 },
	{name:"a", val1: 3000, val2: 300 },
	{name:"a", val1: 4000, val2: 200 },
	{name:"a", val1: 5000, val2: 100 }  
];

var svgW = 300; 
var svgH = 200;	
var xMargin = 50;
 
var svg=d3.select('body').append('svg').attr({width: svgW,height: svgH,});
//var scale = d3.scale.linear().domain([0, d3.max(dataSet, function(d){ return d.val1 })]).range([0, svgH]);	
var scale = d3.scale.linear().domain([0, d3.max(dataSet, function(d){ return d.val1 })]).range([svgH, 0]);  
var yAxisCall = d3.svg.axis()
	.scale(scale)		
	.orient('left')		 
var yAxis = svg.append('g')
	.attr({
		"class": "axis",	
		"transform": "translate(" + [xMargin, 0] + ")" 
	})
	.call(yAxisCall);	
*/
	
/**
var barchart = svg.selectAll('rect')	
	.data(dataSet)
	.enter()	
	.append('rect')	
	.attr({
		x: 0,
		y: function(d, i){ return i * 30 },	
		width: function(d){ return scale(d.val1) },	
		height: 20,
		fill: "blue"
	});
*/

/**
var barchart = svg.selectAll('rect')
	.data(dataSet)
	.enter()
	.append('rect')
	.attr({
		x: function(d, i){ return i * 30 },	
		y: 0,								
		width: 20,										
		height: function(d){ return scale(d.val1)} ,	
		fill: "blue"
	});
*/

/**
var barchart = svg.selectAll('rect')
	.data(dataSet)
	.enter()
	.append('rect')
	.attr({
		x: function(d, i){ return i * 30 + xMargin },	
		y: 0,
		width: 20,
		height: function(d){ return scale(d.val1)} ,
		fill: "blue"
	});
*/

/**
var barchart = svg.selectAll('rect')
	.data(dataSet)
	.enter()
	.append('rect')
	.attr({
		x: function(d, i){ return i * 30 + xMargin },
		y: 0,
		width: 20,
		height: function(d){ return svgH - scale(d.val1)} ,
		fill: "blue"
	});
*/

/**
var barchart = svg.selectAll('rect')
	.data(dataSet)
	.enter()
	.append('rect')
	.attr({
		x: function(d, i){ return i * 30 + xMargin },
		y: function(d){ return scale(d.val1)},
		width: 20,
		height: function(d){ return svgH - scale(d.val1)} ,
		fill: "blue"
	});
*/

/**
d3.select('body').on('click', function(){
	alert('test');
});
*/

/**
d3.select('body').on('click', function(){
	scale.domain([0, d3.max(dataSet, function(d){ return d.val2 })]);
});
*/

/**
d3.select('body').on('click', function(){
	scale.domain([0, d3.max(dataSet, function(d){ return d.val2 })]);
	yAxis.call(yAxisCall);
});
*/

/**
d3.select('body').on('click', function(){
	scale.domain([0, d3.max(dataSet, function(d){ return d.val2 })]);
	yAxis.call(yAxisCall);
	barchart.attr({
		y: function(d){ return scale(d.val2)},
		height: function(d){ return svgH - scale(d.val2)} , 
	});
});
*/

var dataSet = [
	{name:"a", val1: 1000, val2: 500 },
	{name:"a", val1: 2000, val2: 400 },
	{name:"a", val1: 3000, val2: 300 },
	{name:"a", val1: 4000, val2: 200 },
	{name:"a", val1: 5000, val2: 100 }  
];
 
var svgW = 300; 	
var svgH = 200;	
var xMargin = 50; 
 
var svg = d3.select('body')
	.append('svg') 
	.attr({
		width: svgW,
		height: svgH,
	});
 
var scale = d3.scale.linear()
	.domain([0, d3.max(dataSet, function(d){ return d.val1 })])	
	.range([svgH, 0]);	
 
var barchart = svg.selectAll('rect')
	.data(dataSet)
	.enter()
	.append('rect')
	.attr({
		x: function(d, i){ return i * 30 + xMargin },
		y: function(d){ return scale(d.val1)},
		width: 20,
	height: function(d){ return svgH - scale(d.val1)} ,
		fill: "blue"
	});
 
var yAxisCall = d3.svg.axis()
	.scale(scale)
	.orient('left')
 
var yAxis = svg.append('g')
	.attr({
		"class": "axis",
		"transform": "translate(" + [xMargin, 0] + ")" 
	})
	.call(yAxisCall);	
 
d3.select('body').on('click', function(){
	scale.domain([0, d3.max(dataSet, function(d){ return d.val2 })]);
	yAxis.transition().call(yAxisCall);	
	barchart
		.transition()	
		.attr({
			y: function(d){ return scale(d.val2)},
			height: function(d){ return svgH - scale(d.val2)} , 
		});
});
