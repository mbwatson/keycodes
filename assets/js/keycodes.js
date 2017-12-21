window.addEventListener('keydown', function(e) {
  keyDivs = document.querySelectorAll('.the-key');
  for (let d of keyDivs) { d.innerText = e.key; }
  keycodeDivs = document.querySelectorAll('.the-keycode');
  for (let d of keycodeDivs) { d.innerText = e.keyCode; }

	document.querySelector('.animator').style.visibility = 'visible';
  document.querySelector('.animator').classList.toggle('pressed');
	setTimeout(function() {
  	document.querySelector('.animator').style.visibility = 'hidden';
  	document.querySelector('.animator').classList.toggle('pressed');
  }, 500);
});
