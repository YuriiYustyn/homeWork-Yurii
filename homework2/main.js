let numberMin;
do{ numberMin = +prompt('Введіть ціле число N, від якого рахуватиметься сума чисел');}
while (Number.isInteger(numberMin)===false);

let numberMax;
do {numberMax = +prompt('Введіть ціле число M, до якого слід рахувати суму чисел');}
while (Number.isInteger( numberMax)===false || numberMin>numberMax );

const audit = confirm('Пропускати парні числа?');

if (audit){
let sum = 0;
for (let i = numberMin+1; i <=  numberMax; i+=2) {
	sum +=i;
	}
	document.writeln(`Сума чисел: ${sum} виходячи з`)
}

else{
let sum = 0;
for (let i = numberMin; i <=  numberMax; i++) {
	sum +=i;
	}
	document.writeln(`Сума чисел: ${sum} <br>виходячи з <br>`)
}

document.writeln(
`<ul>
<li> мінімальне число N:  ${numberMin} </li> 
<li>максимальне число М:  ${numberMax} </li>
<li> пропускати парні числа: ${audit}
</ul>	
	`);


 
	

	