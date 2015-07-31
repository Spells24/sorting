function bubbleSort ( arr) {
	var results = arr;
	results.__proto__.compares = 0;
	results.__proto__.swaps = 0;

	if(arr.length == 1){
		results.__proto__.compares = 0;
		results.__proto__.swaps = 0;
		return results;
	}

	var swaps = 1;
	
	while(swaps > 0){
		swaps = 0;

		for(var i = 0; i < (arr.length - 1); i++){
			results.__proto__.compares++;

			if(results[i] > results[i+1]){
				var first = results[i+1];
				var second = results[i];
				
				results[i] = first;
				results[i+1] = second; 
				
				results.__proto__.swaps++;
				swaps++;
			}
		}
	}

	return results;
}


//////////////////////////////////////////////


function merge (param1, param2) {
	var results = [];

	while(param1.length > 0 || param2.length > 0){

		if(param1.length > 0 && param2.length > 0){
			if(param1[0] <= param2[0])
				results.push(param1.shift());
			else
				results.push(param2.shift());
		}
		else{
			if(param2.length > 0 && param1.length == 0)
				results.push(param2.shift());
			if(param1.length > 0 && param2.length == 0)
				results.push(param1.shift());
		}		
	}
	return results;
}

///////////////////////////////////////////


function split(param){
	var half = Math.ceil(param.length/2);
	return ([param.slice(0,half), param.slice(half)]);
}



//////////////////////////////////////////////////


function mergeSort(arr){	
	if(arr.length<2) return arr;
	
	var left = split(arr)[0];
	var right = split(arr)[1];
	
	return merge(mergeSort(left), mergeSort(right));
}



	// if(arr.length<=1){
	// 	console.log(left,right)
	// 	return arr;
	// }
	// else{
	// 	console.log(left, right);
	// 	mergeSort(left);
	// 	mergeSort(right);
	// }
	// console.log(left,right)
	// return merge(left,right);






















