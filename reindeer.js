




var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];





// this first line declares that the variable 'hohohoElement' represents 
// "  document.getElementById("coloredReindeer") "  (ie the div with id "coloredReindeer")
 // 'hohoElement' is not used again until AFTER the loop is finished, at which point its inner.html content is replaced (ie filled in) via the final line of the following javascript


var hohohoElement = document.getElementById("coloredReindeer");


// this second line initializes a variable that represents an empty string which will be filled by the loop

var injectionString = '';

// here we initialize the loop and set it to stop right after it reaches the final item in the reindeer array

for (var i = 0; i < reindeer.length; i++) {

	// this first 'let' statement declares a variable to represent the color at the given "i" index

	let injectColor = colors[i];

	// this second 'let' statement declares a variable to represent the reindeer at the given "i" index

	let injectReindeer = reindeer[i];

	// the following line fills the empty string, represented by "injectionString" one loop at a time, adding the new string inputs to the old ones via '+=' (ie injectionString equals itself UP TO that point PLUS injectColor and injectReindeer AT THAT POINT upon each loop)

	injectionString += injectColor + " " +injectReindeer + "<br>";

}

// at this final point, the inner.html conter of 'hohoElement' is replaced by the content represented by the variable "injectionString". This causes that string, which is produced by the loop, to be injected into the html page's div with the id "coloredReindeer"

hohohoElement.innerHTML = injectionString;



