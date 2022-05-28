var sent_margin = { top: 20, right: 20, bottom: 30, left: 50 },
    sent_width = 960 - sent_margin.left - sent_margin.right,
    sent_height = 500 - sent_margin.top - sent_margin.bottom;

var parseTime = d3.timeParse("%Y-%m-%d");
//Read the data

var sent_x = d3.scaleTime().range([0, sent_width]);
var sent_y = d3.scaleLinear().range([sent_height, 0]);

var sentiment = d3.line()
    .x(function (d) { return sent_x(d.date); })
    .y(function (d) { return sent_y(d.sentiment); });

var subjectivity = d3.line()
    .x(function (d) { return sent_x(d.date); })
    .y(function (d) { return sent_y(d.subjectivity); });

var sent_svg = d3.select("#sent_subj").append("svg")
    .attr("width", sent_width + sent_margin.left + sent_margin.right)
    .attr("height", sent_height + sent_margin.top + sent_margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + sent_margin.left + "," + sent_margin.top + ")");

d3.csv("src/data/lyrics_sent_subj.csv").then(function (data) {
    data.forEach(function (d) {
        d.date = parseTime(d.date);
        d.sentiment = +d.sentiment;
        d.subjectivity = +d.subjectivity;
    });

    sent_x.domain(d3.extent(data, function (d) { return d.date; }));
    sent_y.domain([0, d3.max(data, function (d) {
        return Math.max(d.sentiment, d.subjectivity);
    })]);

    // Create the circle that travels along the curve of chart
    var focus = sent_svg
        .append('g')
        .append('circle')
        .style("fill", "none")
        .attr("stroke", "black")
        .attr('r', 8.5)
        .style("opacity", 0)

    // Create the text that travels along the curve of chart
    var focusText = sent_svg
        .append('g')
        .append('text')
        .style("opacity", 0)
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")

    sent_svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", sentiment)
        .on('mouseover', sent_mouseover)
        .on('mousemove', sent_mousemove)
        .on('mouseout', sent_mouseout);


    sent_svg.append("path")
        .data([data])
        .attr("class", "line")
        .style("stroke", "red")
        .attr("d", subjectivity);

    sent_svg.append("g")
        .attr("transform", "translate(0," + sent_height + ")")
        .call(d3.axisBottom(sent_x));

    sent_svg.append("g")
        .call(d3.axisLeft(sent_y));



    function sent_mouseover(event, d) {
        focus.style("opacity", 1)
        focusText.style("opacity", 1)
    }

    var sent_bisect = d3.bisector(function (d) { return d.date; }).left

    function sent_mousemove(event, d) {
        // recover coordinate we need
        // console.log(event)

        var x0 = x.invert(event.x)
        // console.log(event)
        i = sent_bisect(data, x0, 1)
        // console.log(i);
        selectedData = data[0]
        focus
            .style("left", (event.layerX) + "px")
            .style("top", (event.layerY) + "px")
        // focusText
        //     .html("x:" + date + "  -  " + "y:" + d.sentiment)

    }
    function sent_mouseout() {
        focus.style("opacity", 0)
        focusText.style("opacity", 0)
    }
})

