aboutData = {
	"At A Glance": [
		{
			"Education": "CS @ The Ohio State University (2020)",
			"Current City": "Chicago, IL",
			"Hobbies": {
				"Running 🏃" : "Newbie, jogging ~20 days/month since corona started.",
				"Cooking 👨‍🍳" : "Favorite cusine: Indian, Italian, Chinese, American.",
				"Basketball 🏀" : "Mostly play to maintain my DiCaprio esque dad bod.",
				"Coding 💻" : "Recently been working on web based projects / designs.",
				"Coffee ♨️": "Rankings: espresso, french press, pour over (don't @ me)."
            },
			"CS Interests": "Mobile & Distributed Systems (lately).",
			"Current Team / Title": "Backend Software Engineer"
		}
	]
};
document.getElementById("overview").innerHTML = JSON.stringify(aboutData, null, 2);

