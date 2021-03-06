// use hightchart and feed into data for top artists

Highcharts.chart('container', {

    title: {
        text: ''
    },
    credits: {
        enabled: false
    },
    yAxis: {
        title: {
            text: 'Number of Songs on Billboard'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2000 to 2022'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2000
        }
    },

    chart: {
        renderTo: 'container'
      },
      colors: ['#bb3e03', '#001219', '#005f73', '#4b560c',  '#3a498c', '#a3a127','#206829',  '#a3702c', '#c2498c',"#5534ad"],

    series: [{
        name: 'Taylor Swift',
        data: [null,
            null,
            null,
            null,
            null,
            null,
            15,
            45,
            117,
            122,
            92,
            75,
            77,
            80,
            31,
            110,
            26,
            38,
            41,
            60,
            62,
            66,
            3]
    },
    {
        name: 'Drake',
        data: [null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            24,
            42,
            39,
            6,
            40,
            42,
            124,
            134,
            78,
            168,
            10,
            28,
            52,
            null]
    },
    {
        name: 'Kenny Chesney',
        data: [34,
            29,
            45,
            58,
            43,
            49,
            57,
            56,
            22,
            20,
            37,
            33,
            43,
            28,
            27,
            24,
            14,
            15,
            21,
            20,
            21,
            26,
            1]
    },
    {
        name: 'Keith Urban',
        data: [18,
            38,
            20,
            39,
            44,
            54,
            38,
            45,
            30,
            55,
            42,
            47,
            34,
            20,
            34,
            24,
            43,
            8,
            5,
            15,
            20,
            null,
            null]
    },
    {
        name: 'Rascal Flatts',
        data: [22,
            24,
            32,
            46,
            36,
            52,
            100,
            58,
            40,
            44,
            35,
            22,
            38,
            7,
            20,
            null,
            16,
            10,
            null,
            null,
            null,
            2,
            null]
    },
    {
        name: 'Tim McGraw',
        data: [41,
            49,
            52,
            51,
            47,
            37,
            42,
            39,
            19,
            27,
            17,
            15,
            38,
            37,
            15,
            18,
            33,
            3,
            null,
            null,
            12,
            null,
            null]
    },
    {
        name: 'Jason Aldean',
        data: [null,
            null,
            null,
            null,
            null,
            13,
            30,
            26,
            17,
            45,
            47,
            44,
            48,
            33,
            45,
            40,
            39,
            30,
            24,
            37,
            37,
            17,
            null]
    },
    {
        name: 'Rihanna',
        data: [null,
            null,
            null,
            null,
            null,
            38,
            57,
            24,
            85,
            30,
            43,
            66,
            51,
            42,
            null,
            27,
            74,
            29,
            null,
            null,
            null,
            null,
            null]
    },
    {
        name: 'P!nk',
        data: [53,
            35,
            62,
            17,
            null,
            null,
            16,
            61,
            28,
            73,
            30,
            50,
            32,
            19,
            null,
            null,
            26,
            21,
            16,
            20,
            null,
            5,
            null]
    },
    {
        name: 'Luke Bryan',
        data: [null,
            null,
            null,
            null,
            null,
            null,
            null,
            13,
            9,
            15,
            32,
            46,
            51,
            50,
            60,
            60,
            35,
            29,
            36,
            34,
            36,
            37,
            null]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});