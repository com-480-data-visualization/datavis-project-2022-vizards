// var buttonColors = ["green", "red", "yellow", "blue"];
// var gamePattern = [];
let ticker;
let smooth;
let playing = false;

function stopAnimation(button_pressed){
  ticker.stop(); smooth.pause(); playing = false;
}


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

// let title = racing_svg.append('text')
// .attr('class', 'title')
// .attr('y', 24)
// .html('Timeless Billboard Music across 22 years');

// let subTitle = racing_svg.append("text")
// .attr("class", "subTitle")
// .attr("y", 55)
// .html("Ranking on the Number of Weeks Staying on Billboard");

// let caption = racing_svg.append('text')
// .attr('class', 'caption')
// .attr('x', width)
// .attr('y', height-5)
// .style('text-anchor', 'end')
// .html('Source: Billboard');

let year = 2000.01;

// const music = new Audio('./assets/data/music.mp3');
// music.play();
// music.loop =true;
// music.playbackRate = 2;
// var audio = document.createElement("AUDIO")
// document.body.appendChild(audio);
// audio.src = "./assets/data/music.mp3";

let currentName = "Where My Girls At?";


smooth = document.createElement("audio");
// let allColors = ['#bb3e03', '#001219', '#005f73', '#4b560c',  '#3a498c', '#a3a127','#206829',  '#a3702c', '#c2498c',"#5534ad"];



animPlaying = false;

const jstoggle = document.getElementById('js-toggle');
jstoggle.addEventListener('click', () => {
  if (animPlaying == false) {playAnimation("test");animPlaying = true;console.log("play anim");}
  else {animPlaying = false; stopAnimation("test");console.log("stop anim");}
});


d3.csv('./src/data/init_nice_df.csv').then(function(data) {
  
  data.forEach(d => {
    // console.log("been here how many times");
    // d.value = isNaN(d.value) ? 0 : d.value,
    d.colour = d3.hsl(Math.random()*360,0.4,0.55)
  });

  // console.log(data);

  let yearSlice = data.filter(d => d.year == year )
  .sort((a,b) => b.value - a.value)
  .slice(0, top_n);

  let top1 = data.filter(d => d.year == year )
  .sort((a,b) => b.value - a.value)
  .slice(0, 1);
  // console.log("top1",top1);



  yearSlice.forEach((d,i) => d.rank = i);

  // console.log('yearSlice line 85: ', yearSlice);

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
  .html(~~year)
  .call(halo, 10);
});

function playAnimation(button_pressed){
  racing_svg.selectAll('*').remove();
  
  d3.csv('./src/data/nice_df.csv').then(function(data) {

  data.forEach(d => {
    // console.log("been here how many times");
    // d.value = isNaN(d.value) ? 0 : d.value,
    d.colour = d3.hsl(Math.random()*360,0.4,0.55)
  });

  // console.log(data);

  let yearSlice = data.filter(d => d.year == year )
  .sort((a,b) => b.value - a.value)
  .slice(0, top_n);

  let top1 = data.filter(d => d.year == year )
  .sort((a,b) => b.value - a.value)
  .slice(0, 1);
  // console.log("top1",top1);



  yearSlice.forEach((d,i) => d.rank = i);

  // console.log('yearSlice line 85: ', yearSlice);

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
  .html(~~year)
  .call(halo, 10);
  
  ticker = d3.interval(e => {

  yearSlice = data.filter(d => d.year == year && !isNaN(d.value))
    .sort((a,b) => b.value - a.value)
    .slice(0,top_n);

  yearSlice.forEach((d,i) => d.rank = i);

  // console.log('yearSlice line 160: ', yearSlice);

  let top1 = data.filter(d => d.year == year )
  .sort((a,b) => b.value - a.value)
  .slice(0, 1);
  // console.log("top1",top1);

  top1.forEach((d,i) => myname = d.name);
  // if (myname != currentName) {
  //   audio = 
  // }
  
  if (myname == currentName && playing == false) {
    // console.log("Found!!!"); 
    if (myname == "Where My Girls At?") {
      smooth.src = "./src/data/music/Where.mp3";
    } else{
    smooth.src = "./src/data/music/"+ myname +".mp3";
  }
  smooth.play();
  playing = true;
  console.log("line 230", myname, currentName, playing);
}else if (myname != currentName && playing == true) {
  smooth.pause();
//   setTimeout(function(){
//     console.log("Executed after 1 second");
// }, 1000);
document.querySelectorAll('audio').forEach(el => el.pause());
  smooth.src = "./src/data/music/"+ myname +".mp3";
  smooth.play();
  currentName = myname;
}

;



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

  yearText.html(~~year);

  if(year == 2021.12) {ticker.stop(); smooth.pause();}

  year = d3.format('')((+year) + 0.01);
  if ((year % 1).toFixed(2) == "0.13") {year = parseFloat((~~year + 1 + 0.01).toFixed(2))};


  // music.pause();

  // if (year == 2000.4 || year == 2000.7 || year == 2014.8 || year == 2018.6) {year = d3.format('')((+year) + 0.2)};


  },tickDuration);

  });
}

const halo = function(text, strokeWidth) {
text.select(function() { return this.parentNode.insertBefore(this.cloneNode(true), this); })
.style('fill', '#ffffff')
.style( 'stroke','#ffffff')
.style('stroke-width', strokeWidth)
.style('stroke-linejoin', 'round')
.style('opacity', 1);

}   
}

racing_chart();