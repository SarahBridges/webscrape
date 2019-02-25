var s = document.createElement("script");
s.src="https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName("body")[0];
body.after(s);

d3.selectAll(".fusion-builder-row.fusion-row").selectAll("a").nodes();

var L = [];
var f = fuction(d){
L.add(d);}


x = d3.selectAll(".fusion-builder-row.fusion-row").selectAll("a").nodes().slice(1).selectAll("outerText")
x.forEach(function(element) {
  console.log(element.text);
});
