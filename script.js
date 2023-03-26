var hostCheck = prompt("Are you running this on a website or on a console? (W = Website | C - console");
if (hostCheck == "W") {
    alert("Welcome!");
} else if (hostCheck == "C") {
    console.log("Welcome!");
} else {
    alert("Please insert W (website) or C (console)! 'restart to procceed'");
}
var shapeType = prompt("What is the shape type? (2D - 3D)");
if (shapeType == "2D") {
    var shapeX = prompt("Whats the length of the shape?");
    var shapeY = prompt("Whats the width of the shape?");
    var fixType = prompt("Do you want to find area (A) or perimeter (P)?");
} else if (shapeType == "3D") {
    var shapeX = prompt("Whats the X length of the shape?");
    var shapeZ = prompt("Whats the Z length of the shape?");
    var shapeY = prompt("Whats the width of the shape?");
    var fixType = prompt("Do you want to find volume (V) or perimeter (P)?");
}
if (shapeType == "2D") {
    if (fixType == "A") {
        var answer = shapeX * shapeY
    } else if (fixType == "P") {
        var answer = shapeX * 2 + shapeY * 2
    }
} else if (shapeType == "3D") {
    if (fixType == "V") {
        var answer = shapeX * shapeY * shapeZ
    } else if (fixType == "P") {
        var answer = shapeX * shapeY * 4 + shapeZ * shapeY * 2
    }
}
if (hostCheck == "W") {
    alert("Result: " + answer);
} else if (hostCheck == "C") {
    console.log("Result: " + answer);
} else {
    alert("Please insert W (website) or C (console)! 'restart to procceed'");
}
