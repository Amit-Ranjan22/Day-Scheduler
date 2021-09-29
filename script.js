let currentDateTime = function(){
    $("#currentDay").text(moment().format("dddd, MM-Do-YYYY, h:mm:ss a"));
};

setInterval(currentDateTime, 1000);