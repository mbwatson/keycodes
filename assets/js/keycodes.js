window.addEventListener('keydown', function(e) {
  keyDivs = document.querySelectorAll('.the-key');
  for (let d of keyDivs) { d.innerText = e.key; }
  keycodeDivs = document.querySelectorAll('.the-keycode');
  for (let d of keycodeDivs) { d.innerText = e.keyCode; }

	document.querySelector('.animator').style.visibility = 'visible';
  document.querySelector('.animator').classList.add('pressed');
});

function resetKeyDiv(e) {
	if (e.propertyName !== 'transform') return;
	this.style.visibility = 'hidden';
	this.classList.remove('pressed');
}

console.log(document.querySelector);
document.querySelector('.animator').addEventListener('transitionend', resetKeyDiv);
