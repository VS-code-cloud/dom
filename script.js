// Add your code to this file
document.body.style.backgroundColor = "#00008b";
document.getElementsByTagName("h1")[0].style.textDecoration="underline";
document.getElementsByTagName("h2")[0].innerHTML = "Here are Pokemon's incredible Gen 1 starters!"
document.getElementsByTagName("h2")[0].style.fontWeight = "bold"
document.getElementsByTagName("h2")[0].style.textAlign="center";
for (let i =0; i<document.getElementsByTagName("img").length; i++) {
    document.getElementsByTagName("img")[i].style.borderColor = "orange";
    document.getElementsByTagName("img")[i].style.borderStyle = "dotted";
}
for (let i =0; i<document.getElementsByClassName("pokemon_names").length; i++) {
    document.getElementsByClassName("pokemon_names")[i].innerHTML +="!";
    document.getElementsByClassName("pokemon_names")[i].style.color = "#fdefa6";
}
document.getElementById("bulbasaur_container").style.backgroundColor = "#408c8c"