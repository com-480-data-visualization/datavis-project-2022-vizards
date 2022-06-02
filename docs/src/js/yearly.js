yearly_data = [{
    'year': 2000.0,
    'danceability': 0.6655772058823529,
    'energy': 0.6909044117647059,
    'speechiness': 0.0799680147058823,
    'acousticness': 0.1577548639705882
},
{
    'year': 2001.0,
    'danceability': 0.6541693548387097,
    'energy': 0.7026411290322581,
    'speechiness': 0.110953629032258,
    'acousticness': 0.1548213673387097
},
{
    'year': 2002.0,
    'danceability': 0.6351818181818182,
    'energy': 0.712375,
    'speechiness': 0.1069318181818181,
    'acousticness': 0.1508444295833333
},
{
    'year': 2003.0,
    'danceability': 0.6366294964028777,
    'energy': 0.7162086330935251,
    'speechiness': 0.106101798561151,
    'acousticness': 0.155722212589928
},
{
    'year': 2004.0,
    'danceability': 0.6412418772563176,
    'energy': 0.7107581227436823,
    'speechiness': 0.1122043321299639,
    'acousticness': 0.1578941122743682
},
{
    'year': 2005.0,
    'danceability': 0.6243737373737374,
    'energy': 0.7012491582491582,
    'speechiness': 0.108823569023569,
    'acousticness': 0.1473974834680134
},
{
    'year': 2006.0,
    'danceability': 0.633090909090909,
    'energy': 0.7273872053872054,
    'speechiness': 0.0997387205387205,
    'acousticness': 0.1307300465319865
},
{
    'year': 2007.0,
    'danceability': 0.6173286713286714,
    'energy': 0.7134055944055944,
    'speechiness': 0.0952475524475524,
    'acousticness': 0.1503806451048951
},
{
    'year': 2008.0,
    'danceability': 0.6040094043887148,
    'energy': 0.7264514106583072,
    'speechiness': 0.0859514106583072,
    'acousticness': 0.1416797297805642
},
{
    'year': 2009.0,
    'danceability': 0.5935828025477706,
    'energy': 0.740328025477707,
    'speechiness': 0.0760261146496815,
    'acousticness': 0.1359645537579618
},
{
    'year': 2010.0,
    'danceability': 0.6058874172185431,
    'energy': 0.735771523178808,
    'speechiness': 0.0915069536423841,
    'acousticness': 0.151290807615894
},
{
    'year': 2011.0,
    'danceability': 0.5954815950920246,
    'energy': 0.7303840490797546,
    'speechiness': 0.0896015337423312,
    'acousticness': 0.1441093662576687
},
{
    'year': 2012.0,
    'danceability': 0.6113244274809161,
    'energy': 0.7388778625954199,
    'speechiness': 0.0852099236641221,
    'acousticness': 0.1210105736641221
},
{
    'year': 2013.0,
    'danceability': 0.6159252669039146,
    'energy': 0.6992843416370107,
    'speechiness': 0.0912064056939501,
    'acousticness': 0.1341322348754448
},
{
    'year': 2014.0,
    'danceability': 0.6360312499999999,
    'energy': 0.7039670138888889,
    'speechiness': 0.0817302083333333,
    'acousticness': 0.1621314131944444
},
{
    'year': 2015.0,
    'danceability': 0.6453767605633803,
    'energy': 0.6644084507042254,
    'speechiness': 0.0979588028169014,
    'acousticness': 0.1569006549295774
},
{
    'year': 2016.0,
    'danceability': 0.6396072607260725,
    'energy': 0.6573267326732672,
    'speechiness': 0.111889108910891,
    'acousticness': 0.1674801584158415
},
{
    'year': 2017.0,
    'danceability': 0.6846352201257861,
    'energy': 0.6286273584905661,
    'speechiness': 0.1283471698113207,
    'acousticness': 0.1678410566037735
},
{
    'year': 2018.0,
    'danceability': 0.6858145161290322,
    'energy': 0.6349967741935484,
    'speechiness': 0.1458137096774193,
    'acousticness': 0.2064002473118279
},
{
    'year': 2019.0,
    'danceability': 0.6933272727272727,
    'energy': 0.6366669696969697,
    'speechiness': 0.1472960606060606,
    'acousticness': 0.2001046727272727
},
{
    'year': 2020.0,
    'danceability': 0.7111864623243934,
    'energy': 0.6372311621966794,
    'speechiness': 0.22947128352490423,
    'acousticness': 0.13873358876117498
},
{
    'year': 2021.0,
    'danceability': 0.6729217171717171,
    'energy': 0.6428611111111111,
    'speechiness': 0.25021661717171717,
    'acousticness': 0.11993535353535353

}]
// yearlyslider()

// Time
var dataTime = d3.range(0, 22).map(function (d) {
    return new Date(2000 + d, 1, 1);
});

playButton = d3.select("#play-button")

var sliderTime = d3
    .sliderBottom()
    .min(d3.min(dataTime))
    .max(d3.max(dataTime))
    .step(1000 * 60 * 60 * 24 * 365)
    .width(800)
    .tickFormat(d3.timeFormat('%Y'))
    .tickValues(dataTime)
    .default(new Date(2000, 1, 1))
    .on('onchange', val => {
        d3.select('p#value-time').text(d3.timeFormat('%Y')(val));
        update(d3.timeFormat('%Y')(val));
    });

var gTime = d3
    .select('div#slider-time')
    .append('svg')
    .style("display", "block")
    .style("margin", "auto")
    .attr('width', 850)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)')

gTime.call(sliderTime);


function update(h) {
    var newData = yearly_data[h - 2000];
    pdata = transformdata(newData)
    drawChart(pdata);
}

function step() {
    sliderTime.value(sliderTime.value().valueOf() + 1000 * 60 * 60 * 24 * 365)
    var year = d3.timeFormat('%Y')(sliderTime.value())
    if (year >= 2021) {
        update(year)
        resetTimer()
    } else {
        update(year)
    }
    
}
playButton
    .on("click", function () {
        var button = d3.select(this);
        if (button.text() == "Pause") {
            moving = false;
            clearInterval(timer);
            button.text("Play");
        } else {
            moving = true;
            timer = setInterval(step, 500);
            button.text("Pause");
        }
    })

function transformdata(data) {
    var input = [[
        { axis: "danceability", value: data.danceability },
        { axis: "energy", value: data.energy },
        { axis: "speechiness", value: data.speechiness },
        { axis: "acousticness", value: data.acousticness }]]
    return input;
}

function drawChart(data) {

    var margin = { top: 100, right: 100, bottom: 100, left: 100 },
        width = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

    var radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 1,
        levels: 3,
        roundStrokes: true,
        color: ["#34568b"]
    };

    RadarChart("#yearly", data, radarChartOptions)

}

function resetTimer() {
    moving = false;
    clearInterval(timer);
    playButton.text("Play");
    sliderTime.value(sliderTime.default());
    update(d3.timeFormat('%Y')(sliderTime.default()));
}

drawChart(transformdata(yearly_data[0]))