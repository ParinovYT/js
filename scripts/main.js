let arr = []

function reset_(s)
{
	s.innerHTML = ' '
}

function check(s, n)
{
	if(n < 1) 
	{
		s.innerHTML = 'Значение должно быть больше 0!'
		throw new Error("Exit");
	}
}

function calc()
{
	var s = document.getElementById('result')
	let n = parseInt(document.getElementById('__i').value)
	
	reset_(s);
	check(s, n);
	
	for (let i=0;i<n; i++) {
		arr[i]=Math.floor(Math.random()*10)
	}
	console.log(arr)
	for (let i=0;i<n; i++) {
		s.innerHTML += arr[i] + ' '
	}
}