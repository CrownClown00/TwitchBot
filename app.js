$(document).ready(function(){
    var url="https://api.twitch.tv/kraken/streams?channel=nightblue3,voyboy,wingsofdeath";
    var callback=function(response){
        var voyboy =$("#VoyBoy");
        var nightblue3;
        var wingsofdeath;
        voyboy.append("<p>"+response.streams[2].game+"</p>");
        //console.log(response);
    };
    //$.getJSON(url,callback);

    $.ajax({
        url,
        type:"GET",
        datatype:"jsonp",
        success:function(response){
        var voyboy =$("#VoyBoy");
        var nightblue3;
        var wingsofdeath;
        voyboy.append("<p>"+response.streams[2].game+"</p>");
        console.log(response.streams);
    }
    });
    

});

