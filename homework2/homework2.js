let numberN ;
do{ numberN = +prompt('Введіть ціле число N, від якого рахуватиметься сума чисел');}
while (Number.isInteger(numberN)===false);

let numberM;
do {numberM = +prompt('Введіть ціле число M, до якого слід рахувати суму чисел');}
while (Number.isInteger( numberM)===false);

let miss = confirm('Пропускати парні числа?');
if (miss){
let sum = 0;
for (let i = numberN; i <=  numberM; i++) {
	sum +=i;
	}
	console.log(sum);
}
else{let sum = 0;
for (let i = numberN+1; i <=  numberM; i+=2) {
	sum +=i;
	}
	console.log(sum);
}




 
	

	