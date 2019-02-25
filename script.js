//RUN THE FOLLOWING WHENEVER YOU LOAD A NEW WEBPAGE

var s = document.createElement("script");
s.src="https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName("body")[0];
body.after(s);
//select the array where the text is stored.
x = d3.selectAll(".fusion-builder-row.fusion-row").selectAll("a").nodes().slice(1)

//Pull text from the lists for Centre's classes
x.forEach(function(element) {
  console.log(element.text);
});


//For CSC classes at Centre

c = d3.selectAll(".sc-coursetitle").nodes()


//List out the classes unless it is an "OR" string
c.forEach(function(element) {
  if (element.innerText != "OR"){
   
    console.log(element.innerText);
  }
});


//Other schools: University of Kentucky (http://www.uky.edu/academics/2017-18-major-sheet-inventory)


x = d3.selectAll("li").selectAll("a").nodes()
x.forEach(function(element) {
  console.log(element.innerText);
});
