// HTML elements


var gameboard = document.getElementById("gameboard");
var buttonmessage = document.getElementById("gamecontrol");

// Game elements

var tileImages = ['tile1.jpg', 'tile2.jpg', 'tile3.jpg', 'tile4.jpg', 'tile5.jpg', 'tile6.jpg'];
var cardsflippedover = 0
            , lastcardpicked = -1
        var solutionArray = tileImages.concat(tileImages);
        document.getElementById("gamecontrol").addEventListener("click", startGame);
        fliparray = new Array();
        startGame();

var solutionArray = tileImages.concat(tileImages);
        document.getElementById("gamecontrol").addEventListener("click", startGame);
        fliparray = new Array();
        startGame();

        
// Start the game

function startGame() {
            shuffleArray(solutionArray);
            gameboard.innerHTML = "";
            for (var i = 0; i <= ((solutionArray.length) - 1); i++) {
                gameboard.innerHTML += '<div class="col-md-3 col-xs-4 gametile"><img id="cardz' + i + '" src="assets/img/back.jpg" onclick="pickCard(\'' + solutionArray[i] + '\',\'' + i + '\',this);return false;" class="flipimage"></div>';
            }
        }

// Card match check      

function pickCard(a, b, c) {
            if (cardsflippedover < 2 && lastcardpicked != b) {
                fliparray[cardsflippedover] = solutionArray[b];
                fliparray[(cardsflippedover + 2)] = c.id;
                cardsflippedover++;
                c.src = 'assets/img/' + solutionArray[b];
                if (cardsflippedover == 2) {
                    if (fliparray[0] == fliparray[1]) {
                        
                        console.log('same');
                        pickagain();
                        if (tileImages.length <= score) {
                            console.log('END GAME');
                            gameDone();
                        }
                    }
                    else {
                        timer = setInterval(hideCard, 1000);
                        console.log('different'); 
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
                document.getElementById(fliparray[2]).src = "assets/img/back.jpg";
            }
            if (fliparray[3]) {
                document.getElementById(fliparray[3]).src = "assets/img/back.jpg";
            }
            pickagain();
}

// Card shuffle

function shuffleArray(d) {
    for (var c = d.length - 1; c > 0; c--) {
                var b = Math.floor(Math.random() * (c + 1));
                var a = d[c];
                d[c] = d[b];
                d[b] = a;
            }
            return d
        }