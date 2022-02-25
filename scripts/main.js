function calc()
{
	var s;
	let arr = []
	const n = 10
	for (let i=0;i<n; i++) {
		arr[i]=Math.floor(Math.random()*10)
	}
    s = document.getElementById('result');
	console.log(arr)
	s.innerHTML = arr;
}