var horse = {
	name: "Horse",
	info:"The horse (Equus ferus caballus) is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae."
};

var pig = {
	name: "Pig",
	info:"A pig is any of the animals in the genus Sus, within the Suidae family of even-toed ungulates. Pigs are highly social and intelligent animals."
};

var rhino = {
	name: "Rhino",
	info:"A rhinoceros (meaning 'nose horn'), often abbreviated to rhino, is one of any five extant species of odd-toed ungulates in the family Rhinocerotidae, as well as any of the numerous extinct species. Two of these extant species are native to Africa and three to Southern Asia."
};

var giraffe = {
	name: "Giraffe",
	info:"The giraffe (Giraffa camelopardalis) is an African even-toed ungulate mammal, the tallest living terrestrial animal and the largest ruminant. Its species name refers to its camel-like shape and its leopard-like colouring."
};

var gorillas = {
	name: "Gorillas",
	info:"Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Africa. They are the largest living primates."
};

var snake = {
	name: "Snake",
	info:"Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes that can be distinguished from legless lizards by their lack of eyelids and external ears."
};
var i = 0;
var animals = ["horse", "pig", "rhino", "giraffe", "gorillas", "snake"];

function buttonVisibility() {
	var lastImageIndex = images.length - 1;
	var forward = $("#forward");
	var back = $("#back");

	if (i <= 0) {
		back.addClass("hidden");
	} else if (i >= lastImageIndex) {
		forward.addClass("hidden");
	} else {
		back.removeClass("hidden");
		forward.removeClass("hidden");
	}
}

function changeAnimal(animals) {
	$("#currentImage").attr("src", "images/animals/" + images[i] + ".jpg" + "<h1>"animals.name"</h1>" + "<p>"animals.info"</p>");
	buttonVisibility();
}

function previousAnimal() {
	i--;
	changeAnimal();
}

function nextAnimal() {
	i++;
	changeAnimal();
}

$("#forward").click(nextAnimal);
$("#back").click(previousAnimal);
