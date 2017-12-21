$wrapper = document.querySelector('#wrapper');
$keyDiv = document.querySelector('.key');
let $animatedKeyDiv;

function removeAnimator(e) {
	if (e.propertyName !== 'transform') return;
	this.remove();
}

function animateKeypress(e) {
  document.querySelector('.the-key').innerText = e.key;
  document.querySelector('.the-keycode').innerText = e.keyCode;
  $animatedKeyDiv = $keyDiv.cloneNode(true);
  $wrapper.appendChild($animatedKeyDiv);
  setTimeout(function() {
  	$animatedKeyDiv.classList.add('pressed');
  }, 0);
	$animatedKeyDiv.addEventListener('transitionend', removeAnimator);
	// for (opacity = 1; opacity > 0; opacity -= 0.1) {
	// 	setTimeout( function(){
	// 			document.querySelector('.pressed').style.opacity = opacity;
	// 	}, 100);
	// }
}

window.addEventListener('keypress', function(e) {
	animateKeypress(e);
});