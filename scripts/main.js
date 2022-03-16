let x = { 'name':'Rustam', 'age':18, 'height':160.5 }

function svLog(k)
{
	var s = document.getElementById('result')
	console.log(k)
	s.innerHTML = k;
}

function calc()
{
	svLog('Name: '+x.name)
}

