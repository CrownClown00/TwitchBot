$(document).ready(function(){
    var url="https://api.twitch.tv/kraken/streams?channel=nightblue3,voyboy,wingsofdeath?callback=?";
    var callback=function(response){
        var voyboy =$("#VoyBoy");
        var nightblue3;
        var wingsofdeath;
        voyboy.append("<p>"+response.streams[2].game+"</p>");
    };
    $.getJSON(url,callback);
    

});

