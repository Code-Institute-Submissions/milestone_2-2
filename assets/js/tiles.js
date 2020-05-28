

var tileImages = ['tile1.jpg', 'tile2.jpg', 'tile3.jpg', 'tile4.jpg', 'tile5.jpg', 'tile6.jpg'];
var gameboard = document.getElementById("gameboard");

var solutionArray = tileImages.concat(tileImages);
console.log(solutionArray);
shuffleArray(solutionArray);
console.log(solutionArray);


///console.log(tileImages);
startGame();
function startGame() {
        gameboard.innerHTML="";

        for (var i=0; i<=((solutionArray.length)-1); i++){
            displayImage(i)
        }
}

function displayImage(i) {

gameboard.innerHTML += '<div class="col-md-4 col-xs-3 gametile">' + i + '</div>';
}

function shuffleArray(d) {
            for (var c = d.length - 1; c > 0; c--) {
                var b = Math.floor(Math.random() * (c + 1));
                var a = d[c];
                d[c] = d[b];
                d[b] = a;
            }
            return d
};