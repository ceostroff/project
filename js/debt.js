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
    
   $('#FAMUpic').hide();
    $('#FAMUtext').hide();
  $('#FAMUpic').click(function() {
    $('#FAMUtext').slideToggle();
  });
      $('#FAUpic').hide();
    $('#FAUtext').hide();
  $('#FAUpic').click(function() {
    $('#FAUtext').slideToggle();
  });
 $('#FGCUpic').hide();
    $('#FGCUtext').hide();
  $('#FGCUpic').click(function() {
    $('#FGCUtext').slideToggle();
  });
 $('#FIUpic').hide();
    $('#FIUtext').hide();
  $('#FIUpic').click(function() {
    $('#FIUtext').slideToggle();
  });
 $('#FPUpic').hide();
    $('#FPUtext').hide();
  $('#FPUpic').click(function() {
    $('#FPUtext').slideToggle();
  });
 $('#FSUpic').hide();
    $('#FSUtext').hide();
$('#FSUpic').click(function() {
    $('#FSUtext').slideToggle();
  });
 $('#NCFpic').hide();
    $('#NCFtext').hide();
  $('#NCFpic').click(function() {
    $('#NCFtext').slideToggle();
  });
 $('#UCFpic').hide();
    $('#UCFtext').hide();
  $('#UCFpic').click(function() {
    $('#UCFtext').slideToggle();
  });
$('#UFpic').hide();
    $('#UFtext').hide();
  $('#UFpic').click(function() {
    $('#UFtext').slideToggle();
  });
$('#UNFpic').hide();
    $('#UNFtext').hide();
  $('#UNFpic').click(function() {
    $('#UNFtext').slideToggle();
  });
$('#USFSP').hide();
    $('#USFSPtext').hide();
  $('#USFSPpic').click(function() {
    $('#USFSPtext').slideToggle();
  });
$('#USFpic').hide();
    $('#USFtext').hide();
  $('#USFpic').click(function() {
    $('#USFtext').slideToggle();
  });
$('#UWFpic').hide();
    $('#UWFtext').hide();
  $('#UWFpic').click(function() {
    $('#UWFtext').slideToggle();
  });
$('#UMpic').hide();
    $('#UMtext').hide();
  $('#UMpic').click(function() {
    $('#UMtext').slideToggle();
  });
$('#NSUpic').hide();
    $('#NSUtext').hide();
  $('#NSUpic').click(function() {
    $('#NSUtext').slideToggle();
  });
$('#KU').hide();
    $('#KU').hide();
  $('#KUpic').click(function() {
    $('#KUtext').slideToggle();
  });
$('#SLUpic').hide();
    $('#SLUtext').hide();
  $('#SLUpic').click(function() {
    $('#SLUtext').slideToggle();
  });
 
    

    // WHEN ANY FORM ELEMENT changes ...
// listen for changes in the selections in the form elements
$('#questions').on('change', 'input', function() {
  // empty array to hold checkbox values
    var allRegions = [];
  // put all checked types into array
  $("input[name=q2]:checked").each(function() {
    allRegions.push($(this).val());
  });
  // get value of each of 2 radio sets
  var type = $("input:radio[name=q1]:checked").val();
  var tuition = $("input:radio[name=q3]:checked").val();

  // run each of 3 functions to find matches
  matchType(type);
  matchTuition(tuition);
  // only run this one if allStates is not empty
  if (allRegions[0]) {
    matchRegions(allRegions);
  }
  // put it all together to show matching school names
  listMatchingSchools();
});

function matchType(type) {
  for (var i = 0; i < schools.length; i++) {
    /*
    if color matches, set a NEW property, match, to true for each school
    note - this is the FIRST time this property is being created
    for each school - match did not exist before
    at the end of this loop, every school will have a match property
    of either true or false
    */
    if (type === undefined || type === schools[i].type) {
      schools[i].match = true;
    } else {
      schools[i].match = false;
    }
  } // end for
} // end function
    
    
// this function looks only at the dollar amount selected in the form
function matchTuition(tuition) {
  for (var i = 0; i < schools.length; i++) {
    // only test the true ones
    if (schools[i].match && schools[i].tuition == tuition) {
      // change the property if amount does not match
      schools[i].match = false;
    }
  } // end for
} // end function

// this function looks only at the states that were checked
function matchRegions(allRegions) {
  for (var i = 0; i < schools.length; i++) {
    // only test the schools with match: true 
    if (schools[i].match) {
      var count = 0;
      // look at all the selected states and if this school is in one,
      // then add 1 to count
      for (var j = 0; j < allRegions.length; j++) {
        if (allRegions[j] === schools[i].region) {
          count++;
        } // end if
      } // end for
      // only if no states matched the school
      if (count === 0) {
        schools[i].match = false;
      }
      // reset count for next school
      count = 0;
    } // end first if
  } // end first for
} // end function
    
    function listMatchingSchools() {
  for (var i = 0; i < schools.length; i++) {
    // find all the match: true schools' names
    if (schools[i].match) 
      $(schools[i].pic).show();   
    }        
    }
   
});
