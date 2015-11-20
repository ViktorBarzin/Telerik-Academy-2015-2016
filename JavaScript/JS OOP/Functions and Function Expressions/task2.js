function(){

return function(numbersArr){
  
  if(numbersArr == null){
  	throw new Error;
  }

	if(!Array.isArray(numbersArr)){
		return null;
	}
	
	if(!numbersArr){
		return 'Input is empty';
	}
	
	if(!numbersArr[0]){
		return null;
	}
	
	var i,len,
	sum = 0;
	for(i = 0 , len = numbersArr.length ; i < len ; i +=1){
		
		if(!parseInt(numbersArr[i])){
			throw new Error;
		}else{
		numbersArr[i] = parseInt(numbersArr[i]);
		sum+=numbersArr[i];
	}
	}
	return sum;
	
	
}
}