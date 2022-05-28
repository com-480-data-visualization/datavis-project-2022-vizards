const margin = { top: 80, right: 25, bottom: 30, left: 40 },
width = 1000 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

const svg = d3.select("#heatmap")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

var x = document.getElementById("heatmap_options").value;
file = ""
// Get the data again
if (x == "love") {
file = "love_top10.csv"

}
if (x == "baby") {
file = "src/data/baby_top_10.csv"

}
d3.csv(file).then(function (data) {
var max = d3.max(data, function (d) { return d.rank })
// Labels of row and columns -> unique identifier of the column called 'group' and 'variable'

const myGroups = Array.from(new Set(data.map(d => d.year)))
const myVars = Array.from(new Set(data.map(d => d.rank))).reverse()
// Build X scales and axis:
const x = d3.scaleBand()
    .range([0, width])
    .domain(myGroups)
    .padding(0.05);
svg.append("g")
    .style("font-size", 15)
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).tickSize(0))
    .select(".domain").remove()

// Build Y scales and axis:
const y = d3.scaleBand()
    .range([height, 0])
    .domain(myVars)
    .padding(0.05);
svg.append("g")
    .style("font-size", 15)
    .call(d3.axisLeft(y).tickSize(0))
    .select(".domain").remove()

// Build color scale
const myColor = d3.scaleSequential()
    .interpolator(d3.interpolateInferno)
    .domain([0, max])

// create a tooltip
const tooltip = d3.select("#heatmap")
    .append("div")
    .style("opacity", 0)
    .attr("class", "stooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")

// Three function that change the tooltip when user hover / move / leave a cell
const mouseover = function (event, d) {
    tooltip
        // .style("display", "block")
        .style("opacity", 1)
    d3.select(this)
        .style("stroke", "black")
        .style("opacity", 1)
}
const mousemove = function (event, d) {
    tooltip
        .html(d.song + " by " + d.artist + " (" + d.occ + " occurrences) <br> Mean: " + d.mean)
        .style("left", (event.x) + "px")
        .style("top", 5000 + (event.y) + "px")
}
const mouseleave = function (event, d) {
    tooltip
        // .style("display", "none")
        .style("opacity", 0)
    d3.select(this)
        .style("stroke", "none")
        .style("opacity", 0.8)
}

var defs = svg.append("defs");
var linearGradient = defs.append("linearGradient")
    .attr("id", "linear-gradient");

linearGradient.selectAll("stop")
    .data([
        { offset: "0%", color: myColor(0) },
        { offset: "12.5%", color: myColor(0.125 * max) },
        { offset: "25%", color: myColor(0.25 * max) },
        { offset: "37.5%", color: myColor(0.375 * max) },
        { offset: "50%", color: myColor(0.5 * max) },
        { offset: "62.5%", color: myColor(0.625 * max) },
        { offset: "75%", color: myColor(0.75 * max) },
        { offset: "87.5%", color: myColor(0.875 * max) },
        { offset: "100%", color: myColor(max) }
    ])
    .enter().append("stop")
    .attr("offset", function (d) { return d.offset; })
    .attr("stop-color", function (d) { return d.color; });


// add the squares
svg.selectAll()
    .data(data, function (d) { return d.year + ':' + d.rank; })
    .join("rect")
    .attr("x", function (d) { return x(d.year) })
    .attr("y", function (d) { return y(d.rank) })
    .attr("rx", 4)
    .attr("ry", 4)
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())
    .style("fill", function (d) { return myColor(d.mean) })
    .style("stroke-width", 4)
    .style("stroke", "none")
    .style("opacity", 0.8)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)

})

svg.append("rect")
.attr("id", "sinep")
.attr("x", 0)
.attr("y", -40)
.attr("width", 300)
.attr("height", 20)
.style("fill", "url(#linear-gradient)");

// Add subtitle to graph


function updateData() {
var x = document.getElementById("heatmap_options").value;
file = ""

// Get the data again
if (x == "love") {
    file = "love_top10.csv"

}
if (x == "baby") {
    file = "baby_top10.csv"

}
d3.csv(file).then(function (data) {
    // Select the section we want to apply our changes to
    var max = d3.max(data, function (d) { return d.rank })

    var svgg = d3.select("#heatmap").transition();
    const myGroups = Array.from(new Set(data.map(d => d.year)))
    const myVars = Array.from(new Set(data.map(d => d.rank))).reverse()

    const x = d3.scaleBand()
        .range([0, width])
        .domain(myGroups)
        .padding(0.05);

    const y = d3.scaleBand()
        .range([height, 0])
        .domain(myVars)
        .padding(0.05);
    // Make the changes

    const myColor = d3.scaleSequential()
        .interpolator(d3.interpolateInferno)
        .domain([0, max])

    var u = svg.selectAll("rect")
        .filter((n, i, g) => { return i != 0 })
        .data(data, function (d) { return d.year + ':' + d.rank; })
    u
        .join("rect") // Add a new rect for each new elements
        .transition()
        .duration(1000)
        .attr("x", function (d) { return x(d.year) })
        .attr("y", function (d) { return y(d.rank) })
        .style("fill", function (d) { return myColor(d.mean) })

    var defs = svg.append("defs");
    var linearGradient = defs.append("linearGradient")
        .attr("id", "linear-gradient");



    svg.select("rect#sinep").style("fill", "url(#linear-gradient)");
});
}


//updateData()