function switchCity(event){
  event.preventDefault();
  document.getElementById("#city-type").event = switchCity;
}

if ("city-type" = !==){
  switchCity("images/citipix_skyline.jg");
} else if ("city-type" = austin){
  switchCity("images/austin.jg");
} else if ("city-type" = la){
  switchCity("images/la.jg");
} else if ("city-type" = london){
  switchCity("images/london.jg");
} else if ("city-type" = nyc){
  switchCity("images/nyc.jg");
} else if ("city-type" = san francisco){
  switchCity("images/sf.jg");
} else if ("city-type" = sydney){
  switchCity("images/sydney.jg");
}

document.querySelector("#submit-btn").onclick = switchCity;
