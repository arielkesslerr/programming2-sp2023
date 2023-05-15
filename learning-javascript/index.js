const select = document.getElementById ("weather");
const paragraph = document.getElementById ("weather-rec");

select.addEventListener ("change", setWeather);

function setWeather() {
	const choice = select.value;
	if (choice === "sunny") {
		paragraph.innerText = "Don't wear too much clothes.";
	}
	else if (choice === "rainy"){
		paragraph.innerText = "Pitter Patter. Wear much clothes.";
	}
	else if (choice === "partly cloudy"){
		paragraph.innerText = "Wear enough clothes.";
	}
	else if (choice === "overcast"){
		paragraph.innerText = "Man it is so boring outside.";
	}
		else{
		paragraph.innerText = "DO NOT GO OUTSIDE.";
	}
}

