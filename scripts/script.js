$(document).ready(function(){
  
    $("img").draggable({
        stop: function () {
          console.log("stopping???");
    
          let jobs = $("img").position().left;
    
          if (jobs > 1100) {
            console.log("ABOVE 1100", jobs);
    
            $("p").text("Congratulations, you won! You have found the GOAT!🐐");
    
            $("img").attr("src", "https://una.edu/directory/img/789.jpg");
        
            var combinedImageUrl = "https://una.edu/directory/img/789.jpg";
            $("body").css("background-image", "url('" + combinedImageUrl + "')");
          } else {
            console.log("BELOW 1100");
            var combinedImageUrl = "https://t3.ftcdn.net/jpg/00/85/47/10/360_F_85471075_627dXrWLUCum8gej2oToYXpNMn4pUWNR.jpg";
            $("body").css("background-image", "url('" + combinedImageUrl + "')");
            $("p").text("KEEP MOVING RIGHT ---->");
          }
        },
    })
})