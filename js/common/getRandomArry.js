function random(rangeL, rangeR, n){
	let arr = [];
	for( let i = 0; i < n; i++ ){
		let num = parseInt(Math.random()*(rangeR-rangeL+1)+rangeL,10);
		arr.push(num);
	}

	return arr;
	
}