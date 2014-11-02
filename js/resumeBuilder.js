// $("#main").append(299792458*100/1000000000);

// var formattedName = HTMLheaderName.replace("%data%", "Alex"),
// 	formattedRole = HTMLheaderRole.replace("%data%", "PM");


// $("#main").append(formattedName);
// $("#main").prepend(formattedRole);

var bio = {
	"name": "Alex Su",
	"role": "Frontend Developer",
	"welcomeMessage": "I love JavaScript!",
	"contacts": {
		"mobile": "+886-978-000000",
		"email": "alexpp44@gmail.com",
		"github": "https://github.com/alexsu1212",
		"twitter": "https://twitter.com/alexpp44",
		"location": "Taiwan"
	},
	"skills": [
		{"skill": "Project Management", "level": 8},
		{"skill": "HTML and CSS", "level": 6},
		{"skill": "JavaScript", "level": 3},
		{"skill": "Python", "level": 5}
	],
	"bioPic": 'images/alex.jpg',
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name),
			formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		$("#header").prepend(formattedName + formattedRole);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
			formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
			formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
			formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
			formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
			formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic),
			formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
		$("#footerContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
		$("#header").append(formattedBioPic + formattedWelcomeMsg);

		if(bio.skills.length > 0) {
			var skills = "";
			$("#header").append(HTMLskillsStart);
			for(var i = 0; i < bio.skills.length; i++) {
				skills += (HTMLskills.replace("%data%", bio.skills[i]["skill"]));
			}
			$("#skills").append(skills);
		}
	}
}

var work = {
	"jobs": [
		{
			"employer": "Udacity",
			"title": "Frontend Developer",
			"location": "USA",
			"dates": "2014/1/1 - Future",
			"url": "https://www.udacity.com/",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa ante, scelerisque volutpat enim non, lobortis consequat lectus. Sed gravida lectus eros, in pellentesque nunc efficitur nec."
		}, 
		{
			"employer": "MMdc",
			"title": "Project Manager",
			"location": "Germany",
			"dates": "2013/1/1 - 2013/12/31",
			"url": "http://mmdc.com.tw/",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa ante, scelerisque volutpat enim non, lobortis consequat lectus. Sed gravida lectus eros, in pellentesque nunc efficitur nec."	
		}
	],
	"display": function() {
		for(var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("%url%", work.jobs[job].url),
				formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
				formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates),
				formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location),
				formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
		}
	}
}

var projects = {
	"projects": [
		{
			"title": "Dog Project 1",
			"dates": "2014",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa ante, scelerisque volutpat enim non, lobortis consequat lectus. Sed gravida lectus eros, in pellentesque nunc efficitur nec.",
			"images": "http://placepuppy.it/300/200"
		},
		{
			"title": "Cat Project 2",
			"dates": "2013",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa ante, scelerisque volutpat enim non, lobortis consequat lectus. Sed gravida lectus eros, in pellentesque nunc efficitur nec.",
			"images": "http://placekitten.com/g/300/200"
		}
	],
	"display": function() {
		for(project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
				formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates),
				formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description),
				formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);

			$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImages);
		}
	}
}

var education = {
	"schools": [
		{
			"name": "National Chiao Tung University",
			"location": "Taiwan",
			"degree": "Bachelor",
			"majors": ["Computer Science", "Economics"],
			"dates": "2002 - 2006",
			"url": "http://www.nctu.edu.tw/"
		},
		{
			"name": "Stanford University",
			"location": "USA",
			"degree": "Master",
			"majors": ["MBA"],
			"dates": "2016 - 2018",
			"url": "http://www.gsb.stanford.edu/programs/mba"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/course/ud804"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/course/ud304"
		}
	],
	"display": function() {
		for(var school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url),
				formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree),
				formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates),
				formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location),
				majors = education.schools[school].majors.join(", "),
				formattedSchoolMajor = HTMLschoolMajor.replace("%data%", majors);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
		}		
	}
}

bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);

// function inName(name) {
// 	nameArray = name.trim().split(" ");
// 	firstName = nameArray[0];
// 	lastName = nameArray[1];

// 	internationalName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName.toUpperCase();

// 	return internationalName;
// }

// $("#main").append(internationalizeButton);

// var weirdObject = {
//     "property": "Time for an astronomy lesson!",
//     "property1": "(Cameron's minor in college was astronomy)",
//     "property-2": "The 4 Galilean (largest) moons of Jupiter are:",
//     "property 3": "Io, Ganymede, Callisto, Europa",
//     "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
//     " property": "The Sun contains 99.87% of the mass of the entire solar system",
//     "property()": "There are 5 dwarf planets in our solar system:",
//     "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
//     "8property": "Mars has two tiny moons: Phobos and Deimos"
// };

// console.log(weirdObject.8property);
// console.log(weirdObject['8property']);
