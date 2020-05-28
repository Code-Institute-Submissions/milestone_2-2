var tileImages = ['tile1.jpg', 'tile2.jpg', 'tile3.jpg', 'tile4.jpg', 'tile5.jpg', 'tile6.jpg'];
    var gameboard = document.getElementById("gameboard");
    console.log(tileImages);
    startGame();
    function startGame() {
        gameboard.innerHTML="";

        for (var i=0; i<=((tileImages.length*2)-1); i++){
            displayImage(i)
        }
    }

    function displayImage(i) {
    console.log(i);
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