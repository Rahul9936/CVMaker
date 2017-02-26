var app = angular.module("CVMaker", []);
app.controller("CVMakerController", function($scope) {
	$scope.imgReferences = [
		"./images/slider1.jpg",
		"./images/slider2.jpg",
		"./images/slider3.jpg",
		"./images/slider4.jpg",
		"./images/slider5.jpg"
	];

	$scope.cvData = {
		Experience: {
			data: [
				{
					companyLogo: "./images/companylogo.png",
					designation: "Software engineer 1",
					company: "MAQ Software",
					from: "Dec 2014",
					to: "Current time"
				},
				{
					companyLogo: "./images/companylogo.png",
					designation: "Software engineer 1",
					company: "MAQ Software",
					from: "Dec 2014",
					to: "Current time"
				}
			],
			isEmpty: false
		},
		Education: {
			data: [
				{
					collegeLogo: "./images/companylogo.png",
					college: "Madan Mohan Malaviya Engineering College",
					degree: "B.Tech",
					stream: "Computer Science & Technology",
					from: "2010",
					to: "2014"
				}
			],
			isEmpty: false
		}
	};

	$scope.handleAddSkillClick = function($event) {
		var currentElement = $event.currentTarget,
			skillType = currentElement.getAttribute("data-skillType"),
			parentContainer = currentElement.parentElement;

		var htmlChunk = "";
		switch(skillType) {
			case "Experience":
				break;
			case "Education":
				break;
		}
	}
})