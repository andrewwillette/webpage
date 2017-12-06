window.onload = main();

function testing()
{
alert("hello world");
}

function main(){
	
	//insertPlayButtons();
	
	//center.appendChild("It's 10:10");

}

function insertPlayButtons(){

	var audioList = document.querySelector("#audioList");
	var audioItem = audioList.getElementsByTagName("li");
	var audioSource = audioList.getElementsByTagName("a");


	for (var i=0; i < audioSource.length; i++) {
		
    	var img = document.createElement('img');
    	img.src = "Resources/Images/playbutton.png";
    	img.classList.add("playbutton");

    	var audioClip = document.createElement("AUDIO")
    	audioClip.src=audioSource[i].getAttribute("data-value");
    	img.onclick = function() {
    		audioClip.play();
    		console.log("testing");
    	}
    	audioItem[i].appendChild(img);
 
    	
    	
    	
    	
	}
}

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
    _player.play();
}

function playNext() {
    var selected = _playlist.querySelector("li.selected");
    if (selected && selected.nextSibling) {
        playlistItemClick(selected.nextSibling);
    }
}

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

