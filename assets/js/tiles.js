

var tileImages = ['tile1.jpg', 'tile2.jpg', 'tile3.jpg', 'tile4.jpg', 'tile5.jpg', 'tile6.jpg'];
var gameboard = document.getElementById("gameboard");
var cardsflippedover = 0,lastcardpicked = -1,timer = '',score = 0;
var solutionArray = tileImages.concat(tileImages);
fliparray = new Array();

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

gameboard.innerHTML += '<div class="col-md-4 col-xs-3 gametile"><img src="assets/img/back.jpg" onclick="pickCard(\''+solutionArray[i]+'\',\'+ i +\', this);return false;" class="flipImage"></div>';
}


function pickCard(a, b, c) {
            if (cardsflippedover < 2 && lastcardpicked != b) {
                fliparray[cardsflippedover] = solutionArray[b];
                fliparray[(cardsflippedover + 2)] = c.id;
                cardsflippedover++;
                c.src = "#" + solutionArray[b];
                if (cardsflippedover == 2) {
                    if (fliparray[0] == fliparray[1]) {
                        messageText("Match FOUND");
                        console.log('same');
                        pickagain();
                        score++;
                        if (tileImages.length <= score) {
                            console.log('END GAME');
                            gameDone();
                        }
                    }
                    else {
                        timer = setInterval(hideCard, 3000);
                        console.log('different');
                        messageText("NOT FOUND");
                    }
                }
                lastcardpicked = b;
            }
}

function pickagain() {
            cardsflippedover = 0;
            fliparray = [];
            lastcardpicked = -1;
            clearInterval(timer);
}

function hideCard() {
            console.log(fliparray);
            if (fliparray[2]) {
                document.getElementById(fliparray[2]).src = "img/back.jpg";
            }
            if (fliparray[3]) {
                document.getElementById(fliparray[3]).src = "img/back.jpg";
            }
            pickagain();
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