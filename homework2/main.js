let numberMin;
do{ numberMin = +prompt('Введіть ціле число N, від якого рахуватиметься сума чисел');}
while (!Number.isInteger (numberMin));

let numberMax;
do {numberMax = +prompt('Введіть ціле число M, до якого слід рахувати суму чисел');}
while (!Number.isInteger( numberMax) || numberMin>numberMax );

const skip = confirm('Пропускати парні числа?');

let sum = 0; 


for (let i = numberMin; i <=  numberMax; i++) {
	if (skip && i % 2 ===0 ) {
		continue
	}
	sum +=i;
	};
	



document.writeln(
`<ul>
<li> мінімальне число N:  ${numberMin} </li> 
<li> максимальне число М:  ${numberMax} </li>
<li> пропускати парні числа: ${skip}</Li>
<li> cума чисел: ${sum}</Li>
</ul>	
	`);


 
	

	