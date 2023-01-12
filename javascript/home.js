let compteur_deck = false
const applyStyles = iframe => {
	let styles = {
		fontColor : "white",
		backgroundColor : "rgba(255, 64, 220, 0.15)",
		fontGoogleName : "Bebas Neue",
		fontSize : "20px",
		hideIcons : false,
		inputBackgroundColor : "white",
		inputFontColor : "blue",
		height : "700px",
		memberListFontColor : "black",
		memberListBackgroundColor : "white"
	}
	
	setTimeout(() => {
		iframe.contentWindow.postMessage(JSON.stringify(styles), "*");	
}, 100);



}



window.addEventListener('load', () => {

	setTimeout(() => {
		document.getElementById("playername").style.visibility = "visible"	
}, 4000);

    var lineDrawing = anime({
        targets: '#header .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false
      });

	  document.querySelector(".btn_Deck").addEventListener('click', () => {
		if (compteur_deck == false){
			document.querySelector(".chat").style.display = "none"
			document.querySelector(".Deck").style.display = "block"
			document.querySelector(".btn_Deck").innerHTML = "Chat"
			compteur_deck = true
			
		}
		else {
			document.querySelector(".chat").style.display = "block"
			document.querySelector(".Deck").style.display = "none"
			document.querySelector(".btn_Deck").innerHTML = "Deck"
			compteur_deck = false
			

		}
	  })

	  

});