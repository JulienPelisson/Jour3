var affichage = window.setTimeout(popUp, 10000);



function popUp(){
	let reponse = confirm("Voulez vous voir la sextape des couples Chirac et Macron?");
		if(reponse === true){
			window.location.href =" https://www.youtube.com/watch?v=dQw4w9WgXcQ ";
		}else if(reponse === false){
			return false;
		}
	}

