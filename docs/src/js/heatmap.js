// Prepare
const margin = { top: 80, right: 0, bottom: 30, left: 20 },
    width = 1024 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

const svg = d3.select("#heatmap")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

file = get_heatpath()
let max_leg = 0

// load data
d3.csv(file).then(function (data) {
    var max = d3.max(data, function (d) { return +d.rank })
    
    max_leg = d3.max(data, function (d) { return +d.mean })

    const myGroups = Array.from(new Set(data.map(d => d.year)))
    const myVars = Array.from(new Set(data.map(d => d.rank))).reverse()
   
    const x = d3.scaleBand()
        .range([0, width])
        .domain(myGroups)
        .padding(0.05);
    svg.append("g")
        .style("font-size", 15)
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x).tickSize(0))
        .select(".domain").remove()

   
    const y = d3.scaleBand()
        .range([height, 0])
        .domain(myVars)
        .padding(0.05);
    svg.append("g")
        .style("font-size", 15)
        .call(d3.axisLeft(y).tickSize(0))
        .select(".domain").remove()

    const myColor = d3.scaleSequential()
        .interpolator(d3.interpolateInferno)
        .domain([0, max])

    // Tooltip
    const tooltip = d3.select("#legend_heatmap")
        .html("<b>Details</b><br>The first line is the song with the most occurrences which ever ranked the place in the year. <br> Mean: is for all songs which ranked on this place in this year.")

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
            .html("<b>Details</b><br>" + d.song + " by " + d.artist + " (" + d.occ + " occurrences) <br> Mean: " + d3.format(",.2~f")(d.mean));
    }
    const mouseleave = function (event, d) {
        tooltip
            .html("<b>Details</b><br>The first line is the song with the most occurrences which ever ranked the place in the year. <br> Mean: is for all songs which ranked on this place in this year.");

        d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
    }

    // Legend
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

    linearGradient
        .append("text")
        .attr("class", "legendTitle")
        .text("Average Global Surface Temperature");

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


// Add legend
svg.append("rect")
    .attr("id", "heat_legend")
    .attr("x", 0)
    .attr("y", -40)
    .attr("width", 300)
    .attr("height", 20)
    .style("fill", "url(#linear-gradient)");

function updateData() {
    // Updates plot, when new data is selected
    file = get_heatpath()

    d3.csv(file).then(function (data) {
     
        var max = d3.max(data, function (d) { return +d.rank })
        max_leg = d3.max(data, function (d) { return +d.mean })


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
       

        const myColor = d3.scaleSequential()
            .interpolator(d3.interpolateInferno)
            .domain([0, max])

        var u = svg.selectAll("rect")
            .filter((n, i, g) => { return i != 0 })
            .data(data, function (d) { return d.year + ':' + d.rank; })
        u
            .join("rect")
            .transition()
            .duration(1000)
            .attr("x", function (d) { return x(d.year) })
            .attr("y", function (d) { return y(d.rank) })
            .style("fill", function (d) { return myColor(d.mean) })

        var defs = svg.append("defs");
        var linearGradient = defs.append("linearGradient")
            .attr("id", "linear-gradient");

        svg.select("rect#heat_legend").style("fill", "url(#linear-gradient)");

        svg.select("#last_legend").text(d3.format(",.2~f")(max_leg))
    });
}

function get_heatpath() {
    // helper function, to get path of of data based on selected word
    var x = document.getElementById("heatmap_options").value;
    return "src/data/heatmap_data/" + x + "_top10.csv"
}

