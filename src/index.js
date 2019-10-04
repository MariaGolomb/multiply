module.exports = function multiply(first, second) {
  // your solution
  let arrA=first.split('').reverse();
    let arrB=second.split('').reverse();
    let aLength=arrA.length;
    let bLength=arrB.length;
    let newDigit=0;
    let arrForSum=[];
  
    for (let i=0; i<aLength || newDigit!==0; i++){
      let line=[];
      let numA=arrA.length>i? parseInt(arrA[i], 10): 0;
      for(let j=0; j<bLength || newDigit!==0; j++){        
        let numB=arrB.length>j? parseInt(arrB[j], 10): 0;
        let num=numA*numB+newDigit;
  
        if(num>=10){
          newDigit=Math.floor(num/10);
          num=num%10;
        } else {
          newDigit=0;
        }
        line.push(num);
      }  
      arrForSum[i]='0'.repeat(i)+line.join('');
    }
  
  // sum of strings
    let res=[];
    num=0;
    newDigit=0;
    strA='';
  
    for (let i=0; i<arrForSum.length; i++){
      let strB=arrForSum[i].split('');
  
      for(let j=0; j<strA.length || j<strB.length || newDigit!==0; j++ ){
        let numA=strA.length>j? parseInt(strA[j], 10): 0;
        let numB=strB.length>j? parseInt(strB[j], 10): 0;
        num=numA+numB+newDigit;
        if(num>=10){
          newDigit=Math.floor(num/10);
          num=num%10;
        } else {
          newDigit=0
        };
  
        res.push(num);
      }
      strA=res;
      res=[];
    }
    return strA.reverse().join('');
  
}
