let arr = []

function check(s, n)
{
	if(n < 1) 
	{
		s.innerHTML = 'Значение должно быть больше 0!'
		throw new Error("Exit");
	}
}

function svLog()
{
	var s = document.getElementById('result')
	let n = parseInt(document.getElementById('__i').value)
	console.log(arr)
	s.innerHTML = ' '
	for (let i=0;i<n; i++) {
		s.innerHTML += arr[i] + ' '
	}
}

function calc()
{
	var s = document.getElementById('result')
	let n = parseInt(document.getElementById('__i').value)

	check(s, n);
	
	for (let i=0;i<n; i++) {
		arr[i]=Math.floor(Math.random()*10)
	}
	svLog();
}

function zerof() {
	let n = parseInt(document.getElementById('__i').value)
	for (let i=0; i<n; i++) {
		arr[i]=0
	}
	svLog();
}