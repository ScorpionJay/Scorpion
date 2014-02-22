console.log('into new js');
define(['jquery','dataTables'],function($){
    var	header = [
					      { "sTitle": "Engine",   "mData": "engine" , "sDefaultContent": "" },
					      { "sTitle": "Browser",  "mData": "browser" , "sDefaultContent": ""},
					      { "sTitle": "Platform", "mData": "platform" , "sDefaultContent": ""},
					      { "sTitle": "Version",  "mData": "version" , "sDefaultContent": ""},
					      { "sTitle": "Grade",    "mData": "grade" , "sDefaultContent": ""}
					 ];
    var data = [
				      {
				        "engine":   "Trident",
				        "browser":  "Internet Explorer 4.0",
				        "platform": "Win 95+",
				        "version":  4,
				        "grade":    "X"
				      },
				      {
				        "engine":   "Trident",
				        "browser":  "Internet Explorer 5.0",
				        "platform": "Win 95+",
				        "version":  5,
				        "grade":    "C"
				      },{
				        "engine":   "Trident",
				        "browser":  "Internet Explorer 4.0",
				        "platform": "Win 95+",
				        "version":  4,
				        "grade":    "X"
				      },{
				        "engine1":   "Trident",
				        "browser":  "Internet Explorer 4.0",
				        "platform": "Win 95+",
				        "version":  4,
				        "grade":    "X"
				      }
				    ];
    
	var init = function init(){
		// console.log('new app ');
		// console.log($);
		$('#tab').dataTable({//some configures
							
							"bSort" : false,
							"bDestroy": true,
							"oLanguage": {
								"sSearch": "Filter:",
								"sLengthMenu": "Show  _MENU_  entries",
								"sInfo": "_START_ - _END_ of _TOTAL_",
								"sZeroRecords": "No records to display"
			    			},	
							"bInfo" : true,
							"bAutoWidth" : false,
							"sDom":'<"top"f>t<"bottom"lpi>',
							"aaData": data,
						    "aoColumns": header
		});

	}
    
    var test1 =function test1(){
    	alert('test');
    }

	return {
		init: init,
        test1:test1
	}
});