function calc()
{
  var n,s;
  n = document.getElementById('num').value;
  s = document.getElementById('result');
  n = parseInt(n);

  if (n < 10) {
	s.innerHTML = 'Вы жеребенок';
	console.log('Вы жеребенок');
  } 
  else if (n < 17) {
    s.innerHTML = 'Подросток';
	console.log('Подросток');
  }
  else if (n > 59) {
    s.innerHTML = 'Вы пожилой';
	console.log('Вы пожилой');
  }
  else {
	s.innerHTML = 'Вы взрослый';
	console.log('Вы взрослый');
  }
}