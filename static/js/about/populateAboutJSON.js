aboutData = {
	"At A Glance": [
		{
			"Education": "CS @ The Ohio State University (class of 2020)",
			"Current City": "Chicago, IL",
			"Hobbies": {
				"Running 🏃" : "Newbie, jogging ~20 days/month since corona started.",
				"Cooking 👨‍🍳" : "Favorite cuisine: Indian, Italian, Chinese, American.",
				"Basketball 🏀" : "Mostly play to maintain my DiCaprio-esque dad bod.",
				"Coding 💻" : "Recently been working with React.js and AWS on projects.",
				"Coffee ♨️": "Rankings: espresso, french press, pour over, other stuff."
      }
		}
	]
};
document.getElementById("overview").innerHTML = JSON.stringify(aboutData, null, 2);

