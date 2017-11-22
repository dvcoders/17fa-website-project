var nightModeOn = false;
var dayColors =
{
    primaryBg: "rgb(255, 255, 255)",
    secondaryBg: "rgb(238, 238, 238)",
    primaryFg: "rgb(51, 51, 51)",
    secondaryFg: "rgb(51, 51, 51)"
}
var nightColors =
{
    primaryBg: "rgb(34, 34, 34)",
    secondaryBg: "rgb(60, 60, 60)",
    primaryFg: "rgb(244, 244, 244)",
    secondaryFg: "rgb(181, 181, 181)"
}

var body = document.getElementsByTagName("body")[0];
var button = document.getElementById("night-mode");
var jumbotron = document.getElementsByClassName("jumbotron");

var paragraphTags = ["p", "li", "dd", "th", "tr"];
var paragraphs = [];
for (var i = 0; i < paragraphTags.length; i++)
{
    var newElements = document.getElementsByTagName(paragraphTags[i]);
    for (var j = 0; j < newElements.length; j++)
    {
        paragraphs.push(newElements[j]);
    }
}

var headerTags = ["h1", "h2", "h3", "h4"];
var headers = [];
for (var i = 0; i < headerTags.length; i++)
{
    var newElements = document.getElementsByTagName(headerTags[i]);
    for (var j = 0; j < newElements.length; j++)
    {
        headers.push(newElements[j]);
    }
}

function nightMode()
{
    // Your code here!
}
function dayMode()
{
    // Your code here!
}
function toggle()
{
    // Your code here!
}

button.addEventListener("click", toggle);
