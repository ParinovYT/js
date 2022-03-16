let students = []
let sv_current = 0x0

function load_from_remote(){
	$.get( "http://217.71.129.139:4035/students.php", function( data ) {
		students = JSON.parse(data);
		console.log(students)
	});	
}
function load_student(id) {
	document.getElementById('name').value = students[id].name
	document.getElementById('surname').value = students[id].surname
}
function next() {
	document.getElementById('m_iBack').disabled = false
	sv_current++
	load_student(sv_current)
	if (sv_current == 0x4) {
		document.getElementById('m_iNext').disabled = true
	}
}
function back() {
	document.getElementById('m_iNext').disabled = false
	sv_current--
	load_student(sv_current)
	console.log(sv_current)
	if (sv_current == 0x0) {
		document.getElementById('m_iBack').disabled = true
	}
}
function get_all_to_console()
{
	console.clear()
	for (let i=0; i<students.length; i++) {
		console.log(students[i].surname+' '+students[i].name)
	}
}