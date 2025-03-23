const makeChange = (c) => {
  // your name here
let ans={}
let q=Math.floor(c/25);
	c=c%25;
	ans.q=q;
let d=Math.floor(c/10);
	c=c%10;
	ans.d=d;
let n=Math.floor(c/5);
	c=c%5;
	ans.n=n;
	let p=Math.floor(c/1);
	c=c%1;
	ans.p=p;
	return ans
};

// Do not the change the code below

const c = pompt("Enter c: ");
rt(JSON.stringify(makeChange(c)));
