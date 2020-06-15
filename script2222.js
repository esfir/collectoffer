let rerebuse = 0;

function picture(arr2 , arr1){
	let item = arr2[Math.floor(Math.random()*arr2.length)];
	let textmass = arr1[Math.floor(Math.random()*arr1.length)];
	let iimg = document.getElementById('robogen');
	let text = document.getElementById('robogen-text');
	iimg. src= item;
	text.innerText = textmass;
}

function rebuse(ono){
	let foto = document.getElementById('rebus') 
if (rerebuse == 5) {
	rerebuse = 0;
	foto.src = ono[rerebuse];
}else{
	rerebuse++;
	foto.src = ono[rerebuse];
}
}

function funnn(ono , num){
let byk = document.getElementById(num);
if (ono == 'i' || ono == 't' || ono == 'e' ||  ono == 'g' || ono == 'n' || ono == 'o' || ono == '.') {
	byk.style.border = '10px solid green';
	itgen(ono);
}else if(ono == '+'){
	alert('Это днями и ночами пишут программисты?');
	byk.style.border = '10px solid red';
}else{
	byk.style.border = '10px solid red';
}

}

function itgen(ono){
if (ono == 'i') {
	let zzz = document.getElementById('vv1');
	let zz2 = document.getElementById('vv7');
	zzz.style.display = 'block';
	zz2.style.display = 'block';
}

if (ono == 't') {
	let zzz = document.getElementById('vv2');
	zzz.style.display = 'block';
}

if (ono == 'e') {
	let zzz = document.getElementById('vv4');
	zzz.style.display = 'block';
}

if (ono == 'g') {
	let zzz = document.getElementById('vv3');
	zzz.style.display = 'block';
}

if (ono == 'n') {
	let zzz = document.getElementById('vv5');
	zzz.style.display = 'block';
}

if (ono == 'o') {
	let zzz = document.getElementById('vv8');
	zzz.style.display = 'block';
}

if (ono == '.') {
	let zzz = document.getElementById('vv6');
	zzz.style.display = 'block';
}


}

function vopotv(arr1 , arr2){
	let vopran = arr1[Math.floor(Math.random()*arr1.length)];
	let otvran = arr2[Math.floor(Math.random()*arr2.length)];
	let vop = document.getElementById('vopros');
	let otv = document.getElementById('otvet');
	vop.innerText = vopran;
	otv.innerText = otvran;

}

function test(){
	let pred = ['Отладка' , 'кода' , '-' , 'это' , 'как' , 'охота' , '.' , 'Охота' , 'на' , 'баги' , '.'];
	let arr = ['_______', '____', '-' , 'это', 'как' , '_____' , '.' , '_____' , 'на' , '____' , '.'] ;
	let slova = 5;
	alert(arr.join(' '));
	alert('Нужно писать слова с большой буквы, если слово первое или после точки.');
	while(slova > 0){
		let answer = prompt('Введите слово: ');
		if(answer.length == null){
			break;
		}else{
			for(let i = 0; i < 11; i++){
				if(answer == pred[i]){
					arr[i] = answer;
					slova--;
					alert('Правильно! ' + arr.join(' '));
				}
			}	
		}
		
	}
	alert('Молодец! Ты отгадал: ' + arr.join(' '));
}

