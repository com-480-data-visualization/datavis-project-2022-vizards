function sentsubj() {
    // Prepare 
    var sent_margin = { top: 20, right: 20, bottom: 30, left: 50 },
        sent_width = 960 - sent_margin.left - sent_margin.right,
        sent_height = 500 - sent_margin.top - sent_margin.bottom;

    var parseTime = d3.timeParse("%Y-%m-%d");

    var sent_x = d3.scaleTime();
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

    // Read the data
    d3.csv("src/data/lyrics_sent_subj.csv").then(function (data) {
        data.forEach(function (d) {
            d.date = parseTime(d.date);
            d.sentiment = +d.sentiment;
            d.subjectivity = +d.subjectivity;
        });

        sent_x.domain(d3.extent(data, function (d) { return d.date; })).range([0, sent_width]);
        sent_y.domain([0, d3.max(data, function (d) {
            return Math.max(d.sentiment, d.subjectivity);
        })]);

        // Add plot
        sent_svg.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", sentiment)

        sent_svg.append("path")
            .data([data])
            .attr("class", "line")
            .style("stroke", "red")
            .attr("d", subjectivity);

        sent_svg.append("g")
            .attr("transform", "translate(0," + sent_height + ")")
            .call(d3.axisBottom(sent_x));

        sent_svg.append("g")
            .call(d3.axisLeft(sent_y))

        // tooltip line
        var focus = sent_svg.append("line")
            .attr("class", "today")
            .attr("x1", sent_x(data[500]))
            .attr("y1", 0)
            .attr("x2", sent_x(data[500]))
            .attr("y2", sent_height)
            .style("stroke-width", 2)
            .style("stroke", "#191843")
            .style("fill", "none");

        var focusText = sent_svg
            .append('g')
            .append('text')
            .style("opacity", 0)
            .attr("text-anchor", "left")

        sent_svg
            .append('rect')
            .style("fill", "none")
            .style("pointer-events", "all")
            .attr('width', sent_width)
            .attr('height', sent_height)
            .on('mouseover', mouseover)
            .on('mousemove', mousemove, (event) => {
                mousemove(event)
            })
            .on('mouseout', mouseout);
        
        // Functions for tooltip 

        function mouseover() {
            focus.style("opacity", 1)
            focusText.style("opacity", 1)
        }



        var bisect = d3.bisector(function (d) { return d.date; }).left;
        

        function mousemove(e) {
            var offset = document.getElementById("sent_subj").offsetLeft
            var x0 = sent_x.invert(e.x - offset - sent_margin.left);
            var i = bisect(data, x0, 1);
            if (i == 0) {
                i++;
            }
            selectedData = data[i]
            var format = d3.format(",.2~f");
            var timeFormat = d3.timeFormat("Week %W %Y");
            focus
                .attr("x1", sent_x(selectedData.date))
                .attr("x2", sent_x(selectedData.date))
            focusText
                .html(timeFormat(selectedData.date) + "  -  " + "🟦 senitment: " + format(selectedData.sentiment) + " 🟥 subjectivity: " +  format(selectedData.subjectivity))
                .attr("x", x => {
                    if (sent_x(selectedData.date) + 15 > sent_width - 100) {
                        x = sent_width - 100
                    } else {
                        x = sent_x(selectedData.date) + 15
                    }
                }
                )
                .attr("y", sent_height / 2)
        }

        function mouseout() {
            focus.style("opacity", 0)
            focusText.style("opacity", 0)
        }

    })

}

// call function on load of website
sentsubj()