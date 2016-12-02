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
    
    
$('.selections').change(function(){
  if($('#publicprivate').val() == 'public') {
  var publicschools = for (var i=0; i < schools.length; i++) }
    else if ($('#publicprivate').val() == 'private') {
        var privateschools = for (var i=0; i < schools.length; i++)
    }
    var checked=false;
	var elements = document.getElementsByName("inputRegion[]");
	for(var i=0; i < elements.length; i++){
		if(elements[i].checked.val() == 'north' && publicschools.region == 'north') = var publicnorth;
	}
});

/*
    
    $('#inputPublic').change(function() {
p = ($('#inputPublic').val());
  $('#UMpic, #NSUpic, #KUpic, #SLUpic').hide();
});

$('#inputPrivate').change(function() {
p = ($('#inputPrivate').val());
  $('#FAMUpic, #FGCUpic, #FIUpic, #FPUpic, #FSUpic, #NCFpic, #UCFpic, #UFpic, #UNFpic, #USFSPpic, #USFpic, #UWFpic').hide();
});

$('#inputPublic').change(function() {
($('#inputPublic').val());
    ($('#inputNo').val());
  $('#UMpic, #NSUpic, #KUpic, #SLUpic').hide();
});

$('#inputPrivate').change(function() {
($('#inputPrivate').val());
    ($('#inputNo').val());
  $('#FAMUpic, #FGCUpic, #FIUpic, #FPUpic, #FSUpic, #NCFpic, #UCFpic, #UFpic, #UNFpic, #USFSPpic, #USFpic, #UWFpic').hide();
});

$('#radio1').find('.range1').change(function() {
if($(this).checked && $('.publicschool').checked)
  $('#FAMUpic, #FAUpic, #FIUpic, #FPUpic, #FSUpic, #UCFpic, #UFpic, #UNFpic, #USFpic, #UMpic, #NSUpic, #KUpic, #SLUpic').hide();
});
$('#range2').change(function() {
if($(this).checked && $('#inputPublic').checked)
  $('#UMpic, #NSUpic, #SLUpic').hide();
});
$('.range3').change(function() {
if($(this).val() == '40k' && $('#inputPublic').val() == 'public')
  $('#UMpic, #NSUpic').hide();
});
$('.range4').change(function() {
if($(this).val() == '50k' && $('#inputPublic').val() == 'public')
  $('#UMpic').hide();
});
$('.range5').change(function() {
if($(this).val() == '60k' && $('#inputPublic').val() == 'public')
  $('#UMpic').hide();
});
$('.range6').change(function() {
if($(this).val() == '70k' && $('#inputPublic').val() == 'public')
  $('').hide();
});

$('#range1').change(function() {
if($(this).val() == '20k' && $('#inputPrivate').checked)
  $('#FAMUpic, #FGCUpic, #FIUpic, #FPUpic, #FSUpic, #NCFpic, #UCFpic, #UFpic, #UNFpic, #USFSPpic, #USFpic, #UWFpic, #UMpic, #NSUpic, #KUpic, #SLUpic').hide();
});
 $('#range2').change(function() {
if($(this).val() == '30k' && $('#inputPrivate').checked)
  $('#FAMUpic, #FGCUpic, #FIUpic, #FPUpic, #FSUpic, #NCFpic, #UCFpic, #UFpic, #UNFpic, #USFSPpic, #USFpic, #UWFpic, #UMpic, #NSUpic, #SLUpic').hide();
});
$('#range3').change(function() {
if($(this).val() == '40k' && $('#inputPrivate').val() == 'private')
  $('#FAMUpic, #FGCUpic, #FIUpic, #FPUpic, #FSUpic, #NCFpic, #UCFpic, #UFpic, #UNFpic, #USFSPpic, #USFpic, #UWFpic, #UMpic, #NSUpic').hide();
});

$('#range4').change(function() {
if($(this).val() == '50k' && $('#inputPrivate').val() == 'private')
  $('#FAMUpic, #FGCUpic, #FIUpic, #FPUpic, #FSUpic, #NCFpic, #UCFpic, #UFpic, #UNFpic, #USFSPpic, #USFpic, #UWFpic, #UMpic').hide();
});

$('#range5').change(function() {
if($(this).val() == '60k' && $('#inputPrivate').val() == 'private')
  $('#FAMUpic, #FGCUpic, #FIUpic, #FPUpic, #FSUpic, #NCFpic, #UCFpic, #UFpic, #UNFpic, #USFSPpic, #USFpic, #UWFpic, #UMpic').hide();
});

$('#range6').change(function() {
if($(this).val() == '70k' && $('#inputPrivate').val() == 'private')
  $('#FAMUpic, #FGCUpic, #FIUpic, #FPUpic, #FSUpic, #NCFpic, #UCFpic, #UFpic, #UNFpic, #USFSPpic, #USFpic, #UWFpic').hide();
});
    */
$('#FAMUpic').click(function() {
    $('#FAMUtext').slideToggle();
  });
  $('#FGCUpic').click(function() {
    $('#FGCUtext').slideToggle();
  });
  $('#FIUpic').click(function() {
    $('#FIUtext').slideToggle();
  });
  $('#FPUpic').click(function() {
    $('#FPUtext').slideToggle();
  });
$('#FSUpic').click(function() {
    $('#FSUtext').slideToggle();
  });
  $('#NCFpic').click(function() {
    $('#NCFtext').slideToggle();
  });
  $('#UCFpic').click(function() {
    $('#UCFtext').slideToggle();
  });
  $('#UFpic').click(function() {
    $('#UFtext').slideToggle();
  });
  $('#UNFpic').click(function() {
    $('#UNFtext').slideToggle();
  });
  $('#USFSPpic').click(function() {
    $('#USFSPtext').slideToggle();
  });
  $('#USFpic').click(function() {
    $('#USFtext').slideToggle();
  });
  $('#UWFpic').click(function() {
    $('#UWFtext').slideToggle();
  });
  $('#UMpic').click(function() {
    $('#UMtext').slideToggle();
  });
  $('#NSUpic').click(function() {
    $('#NSUtext').slideToggle();
  });
  $('#KUpic').click(function() {
    $('#KUtext').slideToggle();
  });
  $('#SLUpic').click(function() {
    $('#SLUtext').slideToggle();
  });
    
    
$('.photo').on('change', function(){
    var answers = $('img.clicked').val();
	for (var i=0; i < schools.length; i++) {
  	if (schools[i].schoolName == foobar) {
			$('#response').text("In state Tuition: " + schools[i].inState + 
  			" Out of state Tuition: " + schools[i].outState + "Books: " + schools[i].books + " Transportation: " + schools[i].transport + " Other expenses: " + schools[i].other + " In state total: " + schools[i].intotal + " Out of state total: " + schools[i].outtotal);
    } // end if
   } // end for
});

 });


   

