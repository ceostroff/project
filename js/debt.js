var mymap2 = L.map('mapid2').setView([27.951323, -82.452835], 7);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'costroff.251040go',
    accessToken: 'pk.eyJ1IjoiY29zdHJvZmYiLCJhIjoiY2l2bXE3bXl1MDAwMjJ0bXlocHRyZXJ6eiJ9.6e0dvdFN69ba1ICPOatNvg'
}).addTo(mymap2);

for ( var i=0; i < places.length; i++ ) {
    L.marker( [places[i].latitude, places[i].longitude]).bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].type + '</p>'+ places[i].description + '</p>')
    .addTo(mymap2);
}


$(function () {
    Highcharts.chart('container', {
        title: {
            text: 'Tutition and Fees Over 40 years In 2016 Dollars',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: College Board',
            x: -20
        },
        xAxis: {
            categories: ['1976-77', '1981-82', '1986-87', '1991-92', '1996-97', '2001-02',
                '2006-07', '2011-12', '2016-17']
        },
        yAxis: {
            title: {
                text: 'Cost in Dollars'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
       
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Private Nonprofit Four-Year',
            data: [10680, 10810, 14630, 17340, 19920, 23560, 26380, 29700, 33480]
        }, {
            name: 'Public Four-Year',
            data: [2600, 2390, 3110, 3720, 4560, 5110, 6860, 8820, 9650]
        }, {
            name: 'Public Two-Year',
            data: [1190, 1140, 1450, 2070, 2250, 2180, 2680, 3170, 3520]
        }]
    });
});