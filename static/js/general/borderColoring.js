var borders = document.getElementsByTagName("HR");
var i;
for (i=0; i < borders.length; i++) {
    borders[i].style.color = getRandomColor();
}

function getRandomColor() {
    var letters = 'ABCDEF';
    var hexOptions = '123456789ABCDEF';
    var color = '#';
    color += letters[Math.floor(Math.random() * 6)];
    for (var i = 0; i < 5; i++) {
        color += hexOptions[Math.floor(Math.random() * 15)];
    }
    return color;
}