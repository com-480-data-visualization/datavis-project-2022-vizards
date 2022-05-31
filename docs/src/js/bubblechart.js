Highcharts.chart('container2', {
  chart: {
      type: 'packedbubble',
      height: '60%',
  },
  boost: {
    useGPUTranslations: true,
    // Chart-level boost when there are more than 5 series in the chart
    seriesThreshold: 5
  } ,
  title: {
      margin: 0,
      text: 'Music genres by popularity, 2000-2022',
  },
  credits: {
    enabled: false
  },
  tooltip: {
      useHTML: true,
      pointFormat: '<b>{point.name}:</b> popularity score {point.value} </sub>'
  },
  plotOptions: {
      packedbubble: {
          minSize: '10%',
          maxSize: '110%',
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
              splitSeries: true,
              gravitationalConstant: 0.02,
              enableSimulation: true,
              seriesInteraction: false,
          },
          dataLabels: {
              enabled: true,
              format: '{point.name}',
              filter: {
                  property: 'y',
                  operator: '>',
                  value: 250
              },
              style: {
                  color: 'black',
                  textOutline: 'none',
                  fontWeight: 'normal'
              }
          }
      }
  },
  series: [	{
    name : 'rock',
    color: '#cdb4db',      
    data: [{
      name: 'symphonic rock',
      value: 7.062284421678121,
    },{
      name: 'jazz-rock',
      value: 5.471290673535117
    },{
      name: 'heartland rock',
      value: 3.772586302198411
    },{
      name: 'rap rock',
      value: 109.68683346029282
    },{
      name: 'garage rock',
      value: 5.423401888682648
    },{
      name: 'folk-rock',
      value: 0
    },{
      name: 'roots rock',
      value: 1.149840550099566
    },{
      name: 'adult alternative pop rock',
      value: 0
    },{
      name: 'rock roll',
      value: 0
    },{
      name: 'punk rock',
      value: 57.69454185396437
    },{
      name: 'arena rock',
      value: 3.738124214870394
    },{
      name: 'pop-rock',
      value: 0.7334467834249994
    },{
      name: 'glam rock',
      value: 2.256916608001296
    },{
      name: 'southern rock',
      value: 31.53157247250523
    },{
      name: 'indie rock',
      value: 79.73875670189805
    },{
      name: 'funk rock',
      value: 119.45133139718688
    },{
      name: 'country rock',
      value: 88.31436367261833
    },{
      name: 'piano rock',
      value: 66.41476830198617
    },{
      name: 'art rock',
      value: 2.989542509003353
    },{
      name: 'rockabilly',
      value: 11.553532548473472
    },{
      name: 'acoustic rock',
      value: 63.5265478372594
    },{
      name: 'progressive rock',
      value: 5.968143990781583
    },{
      name: 'folk rock',
      value: 24.450720234727296
    },{
      name: 'psychedelic rock',
      value: 11.007068269570794
    },{
      name: 'rock & roll',
      value: 0.8552183731010432
    },{
      name: 'blues rock',
      value: 27.762538645857664
    },{
      name: 'alternative rock',
      value: 505.6244226525894
    },{
      name: 'rock and roll',
      value: 7.795102904613927
    },{
      name: 'soft rock',
      value: 64.40235205066404
    },{
      name: 'rock and indie',
      value: 205.48431654646728
    },{
      name: 'hard rock',
      value: 190.00488809968584
    },{
      name: 'pop/rock',
      value: 145.99301518699772
    },{
      name: 'pop rock',
      value: 1080.1470173367761
    },{
      name: 'rock',
      value: 909.646879581817
    },{
      name: 'classic pop and rock',
      value: 139.80442878300724
    },{
      name: 'psychedelic',
      value: 0
    },{
      name: 'british psychedelia',
      value: 0
    },{
      name: 'punk',
      value: 49.94849788922603
    },{
      name: 'metal',
      value: 46.594533184774036
    },{
      name: 'heavy metal',
      value: 4.932314751650927
    },{
      name: 'brutal death metal',
      value: 0.3677877774413101
    }]
    },
    {
    name : 'alternative/indie',
    color: '#e9c46a',
    data: [{
      name: 'adult alternative pop rock',
      value: 0
    },{
      name: 'alternative rock',
      value: 505.6244226525894
    },{
      name: 'alternative metal',
      value: 74.50172314072823
    },{
      name: 'alternative',
      value: 83.16648057268458
    },{
      name: 'lo-fi indie',
      value: 3.4491417922605954
    },{
      name: 'indie',
      value: 59.49202735157347
    },{
      name: 'indie folk',
      value: 29.012469112931928
    },{
      name: 'indietronica',
      value: 84.71478540651718
    },{
      name: 'indie pop',
      value: 191.92933886289092
    },{
      name: 'indie rock',
      value: 79.73875670189805
    },{
      name: 'rock and indie',
      value: 205.48431654646728
    }]
    },
    {
    name : 'electronic/dance',
    color: '#41ead4',
    data: [{
      name: 'dance and electronica',
      value: 37.63308302400007
    },{
      name: 'electro house',
      value: 560.3389209576069
    },{
      name: 'electronic',
      value: 305.4353826462196
    },{
      name: 'electropop',
      value: 1707.1745533114574
    },{
      name: 'progressive house',
      value: 26.759863871720544
    },{
      name: 'hip house',
      value: 135.447941351809
    },{
      name: 'house',
      value: 121.4477419059846
    },{
      name: 'eurodance',
      value: 38.250676780820534
    },{
      name: 'dancehall',
      value: 178.44714373924393
    },{
      name: 'dance',
      value: 595.7604170001373
    },{
      name: 'trap',
      value: 388.8836999566077
    },{
      name: 'funk carioca',
      value: 2.2542278144071752
    }]
    },
    {
    name : 'soul',
    color : '#aacc00',
    data: [{
      name: 'psychedelic soul',
      value: 5.778130531329428
    },{
      name: 'deep soul',
      value: 0.5435733804477815
    },{
      name: 'neo-soul',
      value: 137.40643228802352
    },{
      name: 'neo soul',
      value: 242.81537348373234
    },{
      name: 'southern soul',
      value: 0.5435733804477815
    },{
      name: 'smooth soul',
      value: 4.302223254764449
    },{
      name: 'blue-eyed soul',
      value: 107.45271967421499
    },{
      name: 'soul and reggae',
      value: 69.66841919544262
    },{
      name: 'soul',
      value: 760.6917186699965
    },{
      name: 'funk',
      value: 230.3492087892008
    }]
    },
    {
    name : 'classical/soundtrack',
    color: '#d6d6d6',
    data: [{
      name: 'classical',
      value: 1.2251872162164263
    },{
      name: 'orchestral',
      value: 0
    },{
      name: 'film soundtrack',
      value: 75.8514389072227
    },{
      name: 'composer',
      value: 14.0641407685434
    }]
    },
    {
    name : 'pop',
    color: '#e9ff70',
    data: [{
      name: 'country-pop',
      value: 83.40651151960762
    },{
      name: 'latin pop',
      value: 130.22671923625353
    },{
      name: 'classical pop',
      value: 0
    },{
      name: 'pop-metal',
      value: 1.145752251461134
    },{
      name: 'orchestral pop',
      value: 0
    },{
      name: 'instrumental pop',
      value: 0
    },{
      name: 'indie pop',
      value: 191.92933886289092
    },{
      name: 'sophisti-pop',
      value: 0.5918775149446304
    },{
      name: 'pop punk',
      value: 121.36786136254501
    },{
      name: 'pop reggae',
      value: 38.54757081739825
    },{
      name: 'noah cyrusbritpop',
      value: 0
    },{
      name: 'traditional pop',
      value: 2.5729192832125154
    },{
      name: 'power pop',
      value: 114.49823794779569
    },{
      name: 'sunshine pop',
      value: 0.044532409698169226
    },{
      name: 'baroque pop',
      value: 1.1974140641728277
    },{
      name: 'alternative r&b',
      value: 269.6091032437768
    },{
      name: 'synthpop',
      value: 262.0853869273564
    },{
      name: 'art pop',
      value: 164.3811834547689
    },{
      name: 'teen pop',
      value: 401.5320896646659
    },{
      name: 'psychedelic pop',
      value: 4.005643471085572
    },{
      name: 'folk pop',
      value: 159.99666930720045
    },{
      name: 'country pop',
      value: 346.97360154790164
    },{
      name: 'pop rap',
      value: 1536.5101793704764
    },{
      name: 'pop soul',
      value: 605.8016610606827
    },{
      name: 'pop and chart',
      value: 1003.1578073032674
    },{
      name: 'dance-pop',
      value: 1868.2600876452354
    },{
      name: 'pop',
      value: 2908.3724569937494
    },{
      name: 'top 40',
      value: 109.72779532556885
    },{
      name: 'american idol',
      value: 91.13024980117778
    },{
      name: 'breakeven',
      value: 2.9157636987279956
    },{
      name: 'm2m',
      value: 0.3577395033224717
    }]
    },
    {
    name : 'hip-hop/rnb',
    color: '#e29578',
    data: [{
      name: 'conscious hip hop',
      value: 121.40295225881218
    },{
      name: 'east coast hip hop',
      value: 187.63907563150033
    },{
      name: 'hardcore hip hop',
      value: 292.75899566545365
    },{
      name: 'west coast hip hop',
      value: 134.51381665155114
    },{
      name: 'hiphop',
      value: 103.67075345868044
    },{
      name: 'southern hip hop',
      value: 326.092402014926
    },{
      name: 'hip-hop',
      value: 549.8674995756892
    },{
      name: 'hip hop',
      value: 2293.9874668329844
    },{
      name: 'hip hop rnb and dance hall',
      value: 1177.309843481956
    },{
      name: 'contemporary r b',
      value: 148.03541838441157
    },{
      name: 'gangsta rap',
      value: 293.0628662591677
    },{
      name: 'rapper',
      value: 303.003026403387
    },{
      name: 'rap',
      value: 939.5730730795295
    },{
      name: 'rhythm and blues',
      value: 9.541411333362268
    },{
      name: 'contemporary rnb',
      value: 2.09933580939895
    },{
      name: 'contemporary r&b',
      value: 1614.2383702120383
    },{
      name: 'rnb',
      value: 597.1259691709429
    },{
      name: 'rhythm & blues',
      value: 2.4977607855008053
    },{
      name: 'r&b',
      value: 1291.3145823515977
    },{
      name: 'blues',
      value: 23.20023063913051
    },{
      name: 'mumble rapper',
      value: 5.58900075311386
    },{
      name: 'michael jackson',
      value: 0.7654671717171717
    }]
    },
    {
    name : 'disco',
    color: '#ff206e',
    data: [{
      name: 'disco',
      value: 176.50075289953688
    }]
    },
    {
    name : 'swing',
    color: '#e9d985',
    data: [{
      name: 'swing',
      value: 4.0171865497817265
    }]
    },
    {
    name : 'folk',
    color: '#ffa5ab',
    data: [{
      name: 'contemporary folk',
      value: 2.5871378424707654
    },{
      name: 'folk',
      value: 105.21017248228513
    },{
      name: 'bachata',
      value: 1.1362616906763856
    },{
      name: 'latin',
      value: 104.60889708631096
    },{
      name: 'romanian',
      value: 1.4863383084992388
    }]
    },
    {
    name : 'country',
    color: '#d62828',
    data: [{
      name: 'country rock',
      value: 88.31436367261833
    },{
      name: 'country-pop',
      value: 83.40651151960762
    },{
      name: 'country pop',
      value: 346.97360154790164
    },{
      name: 'contemporary country',
      value: 359.10354904789773
    },{
      name: 'country',
      value: 554.7996923743477
    }]
    },
    {
    name : 'jazz',
    color : '#a3cef1',
    data: [{
      name: 'vocal jazz',
      value: 4.2456408112526995
    },{
      name: 'jazz',
      value: 158.83355088672167
    },{
      name: 'jazz-rock',
      value: 5.471290673535117
    }]
    },
    {
    name : 'religious',
    color: '#aeb8fe',
    data: [{
      name: 'christian',
      value: 2.905901469592755
    },{
      name: 'christmas music',
      value: 204.8246191832893
    },{
      name: 'gospel',
      value: 1.8360320515868762
    }]
    },
    {
    name : 'blues',
    color: '#3a6ea5',
    data: [{
      name: 'delta blues',
      value: 0
    },{
      name: 'rock blues',
      value: 0
    },{
      name: 'urban blues',
      value: 0
    },{
      name: 'electric blues',
      value: 0
    },{
      name: 'acoustic blues',
      value: 0
    },{
      name: 'soul blues',
      value: 0
    },{
      name: 'country blues',
      value: 0.03232142857142857
    },{
      name: 'jump blues',
      value: 1.2012536518751042
    },{
      name: 'classic rock',
      value: 8.243167670745049
    },{
      name: 'blues rock',
      value: 27.762538645857664
    },{
      name: 'jazz and blues',
      value: 1.672721528040183
    },{
      name: 'piano blues',
      value: 0
    },{
      name: 'british blues',
      value: 0.33526648333297837
    },{
      name: 'british rhythm & blues',
      value: 0.010309278350515464
    },{
      name: 'rhythm and blues',
      value: 9.541411333362268
    },{
      name: 'blues',
      value: 23.20023063913051
    },{
      name: 'blues rock',
      value: 27.762538645857664
    },{
      name: 'rhythm & blues',
      value: 2.4977607855008053
    }]
    },
    {
    name : 'reggae',
    color: '#f34213',
    data: [{
      name: 'reggae fusion',
      value: 0.3968683935716572
    },{
      name: 'roots reggae',
      value: 0.8147803254704195
    },{
      name: 'reggaeton',
      value: 98.4374737915213
    },{
      name: 'pop reggae',
      value: 38.54757081739825
    },{
      name: 'reggae',
      value: 249.24555757865937
    },{
      name: 'soul and reggae',
      value: 69.66841919544262
    }]
    }
  ]
});
