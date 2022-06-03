let ticker;
let smooth;
let playing = false;

// function for stop the animation
function stopAnimation(button_pressed){
  ticker.stop(); smooth.pause(); playing = false;
}

// function for start the racing chart
function racing_chart() {

let racing_svg = d3.select(".racing-chart-div").append("svg")
.attr("width", 960)
.attr("height", 600);

let tickDuration = 500;

let top_n = 10;
let height = 600;
let width = 960;

const margin = {
top: 15,
right: 10,
bottom: 5,
left: 5
};

let barPadding = (height-(margin.bottom+margin.top))/(top_n*5);

// set starting year.month
let year = 2000.01;


let currentName = "WHERE MY GIRLS AT? - 702";

// create audio element
smooth = document.createElement("audio");


animPlaying = false;
reachEnd = false;

// listen to toggle
const jstoggle = document.getElementById('js-toggle');
jstoggle.addEventListener('click', () => {
  if (reachEnd == true && animPlaying == true) {
    // do nothing.
    // console.log("Reach the end");
    smooth.pause();
    animPlaying = false;
  }
  else if (reachEnd == true && animPlaying == false) {
    smooth.play();
    animPlaying = true;
  }
  else if (animPlaying == false) {
    playAnimation("test");
    animPlaying = true;
    // console.log("play anim");
    
  }
  else {
    animPlaying = false; 
    stopAnimation("test");
    // console.log("stop anim");
  }
});

// read our main dataset
d3.csv('./src/data/nice_df_with_artist.csv').then(function(data) {
  
  data.forEach(d => {
    d.colour = d3.hsl(Math.random()*360,0.4,0.55)
  });

  let yearSlice = data.filter(d => d.year == year )
  .sort((a,b) => b.value - a.value)
  .slice(0, top_n);

  let top1 = data.filter(d => d.year == year )
  .sort((a,b) => b.value - a.value)
  .slice(0, 1);
  // console.log("top1",top1);

  yearSlice.forEach((d,i) => d.rank = i);

  let x = d3.scaleLinear()
    .domain([0, d3.max(yearSlice, d => d.value)])
    .range([margin.left, width-margin.right-65]);

  let y = d3.scaleLinear()
    .domain([top_n, 0])
    .range([height-margin.bottom, margin.top]);

  let xAxis = d3.axisTop()
    .scale(x)
    .ticks(width > 500 ? 5:2)
    .tickSize(-(height-margin.top-margin.bottom))
    .tickFormat(d => d3.format(',')(d));

  // aesthetics
  racing_svg.append('g')
  .attr('class', 'axis xAxis')
  .attr('transform', `translate(0, ${margin.top})`)
  .call(xAxis)
  .selectAll('.tick line')
  .classed('origin', d => d == 0);

  // show bar
  racing_svg.selectAll('rect.bar')
    .data(yearSlice, d => d.name)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', x(0)+1)
    .attr('width', d => x(d.value)-x(0)-1)
    .attr('y', d => y(d.rank)+5)
    .attr('height', y(1)-y(0)-barPadding)
    .style('fill', d => d.colour);

  // show name of artist from beginning
  racing_svg.selectAll('text.label')
    .data(yearSlice, d => d.name)
    .enter()
    .append('text')
    .attr('class', 'label')
    .attr('x', d => x(d.value)-8)
    .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1)
    .style('text-anchor', 'end')
    .html(d => d.name);

  // show value from beginning
  racing_svg.selectAll('text.valueLabel')
  .data(yearSlice, d => d.name)
  .enter()
  .append('text')
  .attr('class', 'valueLabel')
  .attr('x', d => x(d.value)+5)
  .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1)
  .text(d => d3.format(',.0f')(d.lastValue));

  // show year on the right bottom
  let yearText = racing_svg.append('text')
  .attr('class', 'yearText')
  .attr('x', width-margin.right)
  .attr('y', height-25)
  .style('text-anchor', 'end')
  .style("font", "25px times")
  .style("fill", "#8f3204")
  .html(~~year);
});

// start playing animation
function playAnimation(button_pressed){
  racing_svg.selectAll('*').remove();
  
  d3.csv('./src/data/nice_df_with_artist.csv').then(function(data) {

  data.forEach(d => {

    d.colour = d3.hsl(Math.random()*360,0.4,0.55)
  });


  let yearSlice = data.filter(d => d.year == year )
  .sort((a,b) => b.value - a.value)
  .slice(0, top_n);

  let top1 = data.filter(d => d.year == year )
  .sort((a,b) => b.value - a.value)
  .slice(0, 1);

  yearSlice.forEach((d,i) => d.rank = i);

  let x = d3.scaleLinear()
    .domain([0, d3.max(yearSlice, d => d.value)])
    .range([margin.left, width-margin.right-65]);

  let y = d3.scaleLinear()
    .domain([top_n, 0])
    .range([height-margin.bottom, margin.top]);

  let xAxis = d3.axisTop()
    .scale(x)
    .ticks(width > 500 ? 5:2)
    .tickSize(-(height-margin.top-margin.bottom))
    .tickFormat(d => d3.format(',')(d));

  // aesthetics
  racing_svg.append('g')
  .attr('class', 'axis xAxis')
  .attr('transform', `translate(0, ${margin.top})`)
  .call(xAxis)
  .selectAll('.tick line')
  .classed('origin', d => d == 0);

  // show bar
  racing_svg.selectAll('rect.bar')
    .data(yearSlice, d => d.name)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', x(0)+1)
    .attr('width', d => x(d.value)-x(0)-1)
    .attr('y', d => y(d.rank)+5)
    .attr('height', y(1)-y(0)-barPadding)
    .style('fill', d => d.colour);


  // show name of artist from beginning
  racing_svg.selectAll('text.label')
    .data(yearSlice, d => d.name)
    .enter()
    .append('text')
    .attr('class', 'label')
    .attr('x', d => x(d.value)-8)
    .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1)
    .style('text-anchor', 'end')
    .html(d => d.name);

  // show value from beginning
  racing_svg.selectAll('text.valueLabel')
  .data(yearSlice, d => d.name)
  .enter()
  .append('text')
  .attr('class', 'valueLabel')
  .attr('x', d => x(d.value)+5)
  .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1)
  .text(d => d3.format(',.0f')(d.lastValue));

  // show year on the right bottom
  let yearText = racing_svg.append('text')
  .attr('class', 'yearText')
  .attr('x', width-margin.right)
  .attr('y', height-25)
  .style('text-anchor', 'end')
  .style("font", "25px times")
  .style("fill", "#8f3204")
  .html(~~year);

  ticker = d3.interval(e => {

  yearSlice = data.filter(d => d.year == year && !isNaN(d.value))
    .sort((a,b) => b.value - a.value)
    .slice(0,top_n);

  yearSlice.forEach((d,i) => d.rank = i);


  let top1 = data.filter(d => d.year == year )
  .sort((a,b) => b.value - a.value)
  .slice(0, 1);

  top1.forEach((d,i) => myname = d.name);
  
  if (myname == currentName && playing == false) {
    if (myname == "WHERE MY GIRLS AT? - 702") {
      smooth.src = "./src/data/music/Where.mp3";
    } else{
    smooth.src = "./src/data/music/"+ myname +".mp3";
  }
  console.log("smooth: ", smooth.src);
  smooth.play();
  playing = true;
  console.log("line 230", myname, currentName, playing);
}else if (myname != currentName && playing == true) {
  smooth.pause();

document.querySelectorAll('audio').forEach(el => el.pause());
  smooth.src = "./src/data/music/"+ myname +".mp3";
  smooth.play();
  currentName = myname;
};

  x.domain([0, d3.max(yearSlice, d => d.value)]); 

  racing_svg.select('.xAxis')
    .transition()
    .duration(tickDuration)
    .ease(d3.easeLinear)
    .call(xAxis);

  let bars = racing_svg.selectAll('.bar').data(yearSlice, d => d.name);

  bars
    .enter()
    .append('rect')
    .attr('class', d => `bar ${d.name.replace(/\s/g,'_')}`)
    .attr('x', x(0)+1)
    .attr( 'width', d => x(d.value)-x(0)-1)
    .attr('y', d => y(top_n+1)+5)
    .attr('height', y(1)-y(0)-barPadding)
    .style('fill', d => d.colour)
    .transition()
      .duration(tickDuration)
      .ease(d3.easeLinear)
      .attr('y', d => y(d.rank)+5);
      
  bars
    .transition()
      .duration(tickDuration)
      .ease(d3.easeLinear)
      .attr('width', d => x(d.value)-x(0)-1)
      .attr('y', d => y(d.rank)+5);
        
  bars
    .exit()
    .transition()
      .duration(tickDuration)
      .ease(d3.easeLinear)
      .attr('width', d => x(d.value)-x(0)-1)
      .attr('y', d => y(top_n+1)+5)
      .remove();

  let labels = racing_svg.selectAll('.label')
      .data(yearSlice, d => d.name);

  labels
    .enter()
    .append('text')
    .attr('class', 'label')
    .attr('x', d => x(d.value)-8)
    .attr('y', d => y(top_n+1)+5+((y(1)-y(0))/2))
    .style('text-anchor', 'end')
    .html(d => d.name)    
    .transition()
      .duration(tickDuration)
      .ease(d3.easeLinear)
      .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1);
        

      labels
      .transition()
      .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', d => x(d.value)-8)
        .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1);

  labels
      .exit()
      .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', d => x(d.value)-8)
        .attr('y', d => y(top_n+1)+5)
        .remove();
    
  let valueLabels = racing_svg.selectAll('.valueLabel').data(yearSlice, d => d.name);

  valueLabels
      .enter()
      .append('text')
      .attr('class', 'valueLabel')
      .attr('x', d => x(d.value)+5)
      .attr('y', d => y(top_n+1)+5)
      .text(d => d3.format(',.0f')(d.lastValue))
      .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1);
        
  valueLabels
      .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', d => x(d.value)+5)
        .attr('y', d => y(d.rank)+5+((y(1)-y(0))/2)+1)
        .tween("text", function(d) {
          let i = d3.interpolateRound(d.lastValue, d.value);
          return function(t) {
            this.textContent = d3.format(',')(i(t));
          };
        });


  valueLabels
    .exit()
    .transition()
      .duration(tickDuration)
      .ease(d3.easeLinear)
      .attr('x', d => x(d.value)+5)
      .attr('y', d => y(top_n+1)+5)
      .remove();

  yearText
  .style("font", "25px times")
  .style("fill", "#8f3204")
  .html(~~year);

  

  if(year >= 2021.12) {
    ticker.stop(); 
    console.log("Before calling timer");

    reachEnd = true;
    
    
  }

  year = d3.format('')((+year) + 0.01);
  if ((year % 1).toFixed(2) == "0.13") {year = parseFloat((~~year + 1 + 0.01).toFixed(2))};


  },tickDuration);

  });
}
 
}

racing_chart();