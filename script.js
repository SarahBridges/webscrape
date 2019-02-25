var s = document.createElement("script");
s.src="https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName("body")[0];
body.after(s);
//select the array where the text is stored.
x = d3.selectAll(".fusion-builder-row.fusion-row").selectAll("a").nodes().slice(1)

//Pull text from the lists.
x.forEach(function(element) {
  console.log(element.text);
});


//For CSC classes

c = d3.selectAll(".sc-coursetitle").nodes()

c.forEach(function(element) {
  if element.innerText != "OR"{
   
    console.log(element.innerText);
  }
});
