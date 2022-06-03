function updateRadarArtist() {
    // get selected artists
    artists = document.getElementsByClassName("radarimg")
    active_artists = []
    for (let elem of artists) {
        if (elem.classList.contains("active")) {
            active_artists.push(elem.id)
        }
    }
  
    // prepare
    var margin = { top: 100, right: 100, bottom: 100, left: 100 },
        width = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

    ////////////////////////////////////////////////////////////// 
    ////////////////////////// Data ////////////////////////////// 
    ////////////////////////////////////////////////////////////// 
    var data = [{
        'artist': 'kanye',
        'danceability': 0.6528767123287672,
        'energy': 0.6910958904109589,
        'speechiness': 0.18963972602739726,
        'acousticness': 0.15840531506849315,
        'loudness': 0.9615028962035228,
        'color': '#001219'
    },
    {
        'artist': 'taylor',
        'danceability': 0.6034912280701754,
        'energy': 0.6545087719298246,
        'speechiness': 0.0655280701754386,
        'acousticness': 0.14204380701754385,
        'loudness': 0.6573792004137164,
        'color': "#005f73"
    },
    {
        'artist': 'drake',
        'danceability': 0.710978417266187,
        'energy': 0.5763237410071943,
        'speechiness': 0.22352374100719424,
        'acousticness': 0.14524668345323744,
        'loudness': 0.589,
        'color': "#bb3e03"
    },
    {
        'artist': 'pink',
        'danceability': 0.6386333333333333,
        'energy': 0.7320000000000001,
        'speechiness': 0.06576666666666667,
        'acousticness': 0.08459805000000001,
        'loudness': 0.9,
        'color': "#ee9b00"
    },
    {
        'artist': 'justin',
        'danceability': 0.630825,
        'energy': 0.6736,
        'speechiness': 0.08417000000000001,
        'acousticness': 0.17757125,
        'loudness': 0.6542517899084412,
        'color': "#AAFF00"
    }, {
        'artist': 'oned',
        'danceability': 0.627470588235294,
        'energy': 0.7093529411764705,
        'speechiness': 0.04851764705882353,
        'acousticness': 0.15703,
        'loudness': 1.0,
        'color': "#FF00FF"
    }

    ]

    // bring data for selected artists into the right format
    var input = [];
    var color = [];
    data.forEach(elem => {
        if (active_artists.includes(elem.artist)) {
            input.push([
                { axis: "danceability", value: elem.danceability },
                { axis: "energy", value: elem.energy },
                { axis: "speechiness", value: elem.speechiness },
                { axis: "acousticness", value: elem.acousticness }
            ])
            color.push(elem.color)
        }
    })
    // fallback, if no artist is selected
    if (input.length == 0) {
        d3.select(".radarWrapper").remove()
        return
    }

    var radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 1,
        levels: 3,
        roundStrokes: true,
        color: color
    };
    // Plot
    RadarChart(".radarChart", input, radarChartOptions)
}
// call function on load of website
updateRadarArtist()