var city = document.getElementById('#city-type').value;

function switchBackground(event){
event.preventDefault();
document.querySelector("body").className.add("#city-type");
}

    if(city === "!==") {
      switchBackground("class", "home");
    }
    else if(city === "austin") {
      switchBackground("class", "austin");
    }
    else if(city === "la") {
      switchBackground("class", "la");
    }
    else if(city === "london") {
      switchBackground("class", "london");
    }
    else if(city === "new york city") {
      switchBackground("class", "nyc");
    }
    else if(city === "san francisco") {
      switchBackground("class", "sf");
    }
    else if(city === "sydney") {
      switchBackground("class", "sydney");
    }
  }

document.getElementById("#submit-btn").onclick = switchBackground
