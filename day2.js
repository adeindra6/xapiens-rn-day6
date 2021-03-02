class Hitung 
{	
	getMax(arr = []) 
	{
		return Math.max(...arr);
	}

	getAvg(arr = []) 
	{
		let avg = 0;
		for(let i=0; i<arr.length; i++)
		{
			avg += arr[i];
		}
		avg /= arr.length;
		return avg;
	}
}

module.exports = Hitung;

let kelompok1 = [];
let kelompok2 = [];
let kelompok3 = [];
let kelompok4 = [];
let kelompok5 = [];
let kelompok6 = [];
let kelompok7 = [];
let kelompok8 = [];
let kelompok9 = [];
let kelompok10 = [];

for(let i=0; i<1000; i++)
{
	let num = Math.floor(Math.random() * 100) + 1;
	// console.log(num);

	if(num >= 1 && num <= 10)
	{
		kelompok1.push(num); // kelompok 1 - 10
	}
	else if(num >= 11 && num <= 20)
	{
		kelompok2.push(num); // kelompok 11 - 20
	}
	else if(num >= 21 && num <= 30)
	{
		kelompok3.push(num); // kelompok 21 - 30
	}
	else if(num >= 31 && num <= 40)
	{
		kelompok4.push(num); // kelompok 31 - 40
	}
	else if(num >= 41 && num <= 50)
	{
		kelompok5.push(num); // kelompok 41 - 50
	}
	else if(num >= 51 && num <= 60)
	{
		kelompok6.push(num); // kelompok 51 - 60
	}
	else if(num >= 61 && num <= 70)
	{
		kelompok7.push(num); // kelompok 61 - 70
	}
	else if(num >= 71 && num <= 80)
	{
		kelompok8.push(num); // kelompok 71 - 80
	}
	else if(num >= 81 && num <= 90)
	{
		kelompok9.push(num); // kelompok 81 - 90
	}
	else if(num >= 91 && num <= 100)
	{
		kelompok10.push(num); // kelompok 91 - 100
	}
}

console.log('==========================================');

console.log('Kelompok 1 - 10 : ' + kelompok1 + '\n');
console.log('Kelompok 11 - 20 : ' + kelompok2 + '\n');
console.log('Kelompok 21 - 30 : ' + kelompok3 + '\n');
console.log('Kelompok 31 - 40 : ' + kelompok4 + '\n');
console.log('Kelompok 41 - 50 : ' + kelompok5 + '\n');
console.log('Kelompok 51 - 60 : ' + kelompok6 + '\n');
console.log('Kelompok 61 - 70 : ' + kelompok7 + '\n');
console.log('Kelompok 71 - 80 : ' + kelompok8 + '\n');
console.log('Kelompok 81 - 90 : ' + kelompok9 + '\n');
console.log('Kelompok 91 - 100 : ' + kelompok10 + '\n');

console.log('==========================================');

console.log('Nilai Tertinggi kelompok 1-10 : ' + Math.max(...kelompok1));
console.log('Nilai Tertinggi kelompok 11-20 : ' + Math.max(...kelompok2));
console.log('Nilai Tertinggi kelompok 21-30 : ' + Math.max(...kelompok3));
console.log('Nilai Tertinggi kelompok 31-40 : ' + Math.max(...kelompok4));
console.log('Nilai Tertinggi kelompok 41-50 : ' + Math.max(...kelompok5));
console.log('Nilai Tertinggi kelompok 51-60 : ' + Math.max(...kelompok6));
console.log('Nilai Tertinggi kelompok 61-70 : ' + Math.max(...kelompok7));
console.log('Nilai Tertinggi kelompok 71-80 : ' + Math.max(...kelompok8));
console.log('Nilai Tertinggi kelompok 81-90 : ' + Math.max(...kelompok9));
console.log('Nilai Tertinggi kelompok 91-100 : ' + Math.max(...kelompok10));

console.log('==========================================');

let avg_kelompok1 = 0;
for(let i=0; i<kelompok1.length; i++)
{
	avg_kelompok1 += kelompok1[i];
}
avg_kelompok1 /= kelompok1.length;
console.log('Rata-Rata kelompok 1 - 10 : ' + avg_kelompok1);

let avg_kelompok2 = 0;
for(let i=0; i<kelompok2.length; i++)
{
	avg_kelompok2 += kelompok2[i];
}
avg_kelompok2 /= kelompok2.length;
console.log('Rata-Rata kelompok 11 - 20 : ' + avg_kelompok2);

let avg_kelompok3 = 0;
for(let i=0; i<kelompok3.length; i++)
{
	avg_kelompok3 += kelompok3[i];
}
avg_kelompok3 /= kelompok3.length;
console.log('Rata-Rata kelompok 21 - 30 : ' + avg_kelompok3);

let avg_kelompok4 = 0;
for(let i=0; i<kelompok4.length; i++)
{
	avg_kelompok4 += kelompok4[i];
}
avg_kelompok4 /= kelompok4.length;
console.log('Rata-Rata kelompok 31 - 40 : ' + avg_kelompok4);

let avg_kelompok5 = 0;
for(let i=0; i<kelompok5.length; i++)
{
	avg_kelompok5 += kelompok5[i];
}
avg_kelompok5 /= kelompok5.length;
console.log('Rata-Rata kelompok 41 - 50 : ' + avg_kelompok5);

let avg_kelompok6 = 0;
for(let i=0; i<kelompok6.length; i++)
{
	avg_kelompok6 += kelompok6[i];
}
avg_kelompok6 /= kelompok6.length;
console.log('Rata-Rata kelompok 51 - 60 : ' + avg_kelompok6);

let avg_kelompok7 = 0;
for(let i=0; i<kelompok7.length; i++)
{
	avg_kelompok7 += kelompok7[i];
}
avg_kelompok7 /= kelompok7.length;
console.log('Rata-Rata kelompok 61 - 70 : ' + avg_kelompok7);

let avg_kelompok8 = 0;
for(let i=0; i<kelompok8.length; i++)
{
	avg_kelompok8 += kelompok8[i];
}
avg_kelompok8 /= kelompok8.length;
console.log('Rata-Rata kelompok 71 - 80 : ' + avg_kelompok8);

let avg_kelompok9 = 0;
for(let i=0; i<kelompok9.length; i++)
{
	avg_kelompok9 += kelompok9[i];
}
avg_kelompok9 /= kelompok9.length;
console.log('Rata-Rata kelompok 81 - 90 : ' + avg_kelompok9);

let avg_kelompok10 = 0;
for(let i=0; i<kelompok10.length; i++)
{
	avg_kelompok10 += kelompok10[i];
}
avg_kelompok10 /= kelompok10.length;
console.log('Rata-Rata kelompok 91 - 100 : ' + avg_kelompok10);

console.log('==========================================');

console.log('Sorting kelompok 1 - 10 : ' + kelompok1.sort(function(a,b){return a-b}) + '\n');
console.log('Sorting kelompok 11 - 20 : ' + kelompok2.sort(function(a,b){return a-b}) + '\n');
console.log('Sorting kelompok 21 - 30 : ' + kelompok3.sort(function(a,b){return a-b}) + '\n');
console.log('Sorting kelompok 31 - 40 : ' + kelompok4.sort(function(a,b){return a-b}) + '\n');
console.log('Sorting kelompok 41 - 50 : ' + kelompok5.sort(function(a,b){return a-b}) + '\n');
console.log('Sorting kelompok 51 - 60 : ' + kelompok6.sort(function(a,b){return a-b}) + '\n');
console.log('Sorting kelompok 61 - 70 : ' + kelompok7.sort(function(a,b){return a-b}) + '\n');
console.log('Sorting kelompok 71 - 80 : ' + kelompok8.sort(function(a,b){return a-b}) + '\n');
console.log('Sorting kelompok 81 - 90 : ' + kelompok9.sort(function(a,b){return a-b}) + '\n');
console.log('Sorting kelompok 91 - 100 : ' + kelompok10.sort(function(a,b){return a-b}) + '\n');