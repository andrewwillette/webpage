




// globals
var _player = document.getElementById("player"),
    _playlist = document.getElementById("playlist"),
    _stop = document.getElementById("stop");

// functions
function playlistItemClick(clickedElement) {
    var selected = _playlist.querySelector(".selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    clickedElement.classList.add("selected");

    _player.src = clickedElement.getAttribute("source");
    console.log(_player.src);
    _player.play();
}

function playNext() {
    var selected = _playlist.querySelector("li.selected");
    if (selected && selected.nextSibling) {
        playlistItemClick(selected.nextSibling);
    }
}

//space bar pauses music
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        _player.pause();
    }
}

$("#logo").fadeIn(3000);


// event listeners
_stop.addEventListener("click", function () {
    _player.pause();
});
_player.addEventListener("ended", playNext);
_playlist.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName === "LI") {
        playlistItemClick(e.target);
    }
});

