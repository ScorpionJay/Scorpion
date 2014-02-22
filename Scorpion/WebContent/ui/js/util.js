requirejs.config({
	
	//config base path
    baseUrl: '../js',
   
    //config support AMD js
    paths: {
        'jquery': 		  	'vendor/require-jquery',
        'dataTables':   	'vendor/jquery.dataTables',
        'bootstrap':   		'vendor/bootstrap',
        'chosen':   		'vendor/chosen.jquery'
    },

    //config don't support AMD js
    shim:{
        //don't support AMD
    }
}); 
    
    
// import app js
require(['jquery','chosen'],function($){
    $(function(){
        
        // tooltip
        //$('#demo').tooltip();
        
        // navigation
        $("#navigation").load('navigation.html #navigation1');
        
        // chosen
        $('#sel').chosen();
        
        //home 
        $("#new").click(function(){
            //alert('home');
            require(['app/new'],function(newApp){
                //console.log('call home js');
                newApp.init();
            });
        });
        //delete 
        $("#delete").click(function(){
            //alert('delete');
            require(['app/delete'],function(){
                console.log('call delete js');
            });
        });
        //new 
        $("#update").click(function(){
            //alert('update');
            require(['app/update'],function(){
                console.log('call update js');
            });
        });
    });   
});


