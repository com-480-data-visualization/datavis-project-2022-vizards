function updateWordChart() {    

    w = 950;
    var xScale = d3.scaleLinear()
        .domain([0, 5000])
        .range([10, 550]);
    // Parse the Data
    d3.csv("src/data/word_count.csv").then(function (data) { 
        var year = document.getElementById("wordtable_options").value;
        data = data.filter(function(d) {
            d3.selectAll(".chart-data").remove(); 
            return d.year == "20" + year
        })
      
        // Add X axis
        data = data.sort((a, b) => d3.descending(+a.Value, +b.Value))
        var x = d3.scaleLinear()
            .domain([0, d3.max(data, function (d) { return +d.Value })])
            .range(["0%", "100%"]);

        var chart = d3.select("#word_table")
            .append("div")
            .attr("class", "chart-data")
            .style("width", w)
            .style("height", 600);

        word = chart.selectAll("div.word")
            .data(data)
            .enter()
            .append("div")
            .attr("class", "word");

        word.append("div")
            .attr("class", "rank")
            .text(function (d, i) {
                return (i + 1) + ".";
            });

        var name = word.append("div")
            .attr("class", "name")
            .style("width", "300px")
            .style("height", "100%")
            .style("left", 22 + "px")
            .append("p")
            .text(function (d) {
                return d.word;
            });

        word.append("div").style("height", "100%")
            .style("background-color", function (d) {
                return "#191843";
            })
            .attr("class", "bar")
            .style("width", function (d) {
                return "0px";
            })
            .transition()
            .duration(1000)
            .style("width", function (d) {
                return xScale(d.Value) + "px";
            });

        word.append("div")
            .text(function (d) {
                return d.Value;
            })
            .attr("class", "count")
            .style("color", "white");
    })
}

updateWordChart()