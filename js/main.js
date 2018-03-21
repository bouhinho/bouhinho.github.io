let monImage = document.querySelector('img');

monImage.onclick = function() {
	maSrc = monImage.getAttribute('src');
	if(maSrc === 'images/firefox.png') {
		monImage.setAttribute('src', 'images/firefox2.png');
	} else {
		monImage.setAttribute('src', 'images/firefox.png');
	}
}

let monBoutton = document.querySelector('button');
let monTitre = document.querySelector('h1');

/*Nous appellons un API appellée "localstorage" qui permet de stocker des donnés dans le navigateur
  pouvoir les réutiliser ultérieurement. Nous appellons la fonction setItem() de cette API pour stocker
  la valeur stockée dans la variable monNom qui contient le nom de l'utilisateur.
*/
function definirUnNomUtilisateur() {
	let monNom = prompt('Veuillez saisir votre nom');
	localStorage.setItem('nom', monNom);
	monTitre.textContent = 'Mozilla est cool, ' + monNom;
}

monBoutton.onclick = function() {
	definirUnNomUtilisateur();
}

if(!localStorage.getItem('nom')) {
	definirUnNomUtilisateur();
} else {
	let nomEnregistre = localStorage.getItem('nom');
	monTitre.textContent = "Mozilla est cool, " + nomEnregistre;
}	