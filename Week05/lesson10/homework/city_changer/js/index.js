//refernce the form as this is where the onClick data is
//document.querySelector("form").onSubmit = switchBackground;
$("form").submit(switchBackground);

function switchBackground(event){
  event.preventDefault();
  //var city = document.querySelector("#city-type").value;
  var city = $("#city-type").val();
  city = city.trim();
  //this removes and spaces that may be accidentally added to the input
  city = city.toLowerCase();
  //this removes any capitals that may be accidentally added
  //OR city = city.trim().toLowerCase();

  if(city === "austin") {
      $("body").attr("class", "austin");
  } else if(city === "la" || city === "los angeles") {
      $("body").attr("class", "la");
  } else if(city === "london") {
      $("body").attr("class", "london");
  } else if(city === "nyc" || city === "new york city" || city === "new york") {
      $("body").attr("class", "nyc");
  } else if(city === "san francisco") {
      $("body").attr("class", "sf");
  } else if(city === "sydney") {
      $("body").attr("class", "sydney");
  }
  $("#city-type").val("");
  //this clears out the box after you have pressed enter
}

//document.querySelector("#submit-btn").onClick = switchBackground;
$("#submit-btn").onClick = switchBackground;
