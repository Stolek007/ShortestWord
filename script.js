function findShort(s){
  let strSplit = s.split(' ');
  
  let shortestWord = 10000;

  
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length < shortestWord){ 
      shortestWord = strSplit[i].length; 
  }
}

return shortestWord; 
}
