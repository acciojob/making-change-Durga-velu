const makeChange = (c) => {
  // your name here
let ans={}
let q=Math.floor(c/25);
	c=c%25;
	ans.push(`"q":${q}`)
let d=Math.floor(c/10);
	c=c%10;
	ans.push(`"d":${d}`)
let n=Math.floor(c/5);
	c=c%5;
	ans.push(`"n":${n}`)
	let p=Math.floor(c/1);
	c=c%1;
	ans.push(`"p":${p}`)
	return ans
};

// Do not the change the code below

const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
