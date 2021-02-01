module.exports = function toReadable (number) {
  
    let arr=String(number).split('').map(item=>Number(item));
    let arr2=[];
  
    let one=function() {
      if (arr[0]==0) {
        return arr.splice(0,1);
    }
      else {
        arr2.push((arr[0]==1)?'one':
      (arr[0]==2)?'two':
      (arr[0]==3)?'three':
      (arr[0]==4)?'four':
      (arr[0]==5)?'five':
      (arr[0]==6)?'six':
      (arr[0]==7)?'seven':
      (arr[0]==8)?'eight':'nine'); 
        return arr.splice(0,1);
    }
  }
    
    let two= function() {
      if (arr[0]==0) {
        arr.splice(0,1);
        one();
      }
      else if (arr[0]==1) {
        let arr3=[];
        arr3[0]=Number(arr.join(''));
        arr2.push((arr3[0]==10)?'ten':
          (arr3[0]==11)?'eleven':
          (arr3[0]==12)?'twelve':
          (arr3[0]==13)?'thirteen':
          (arr3[0]==14)?'fourteen':
          (arr3[0]==15)?'fifteen':
          (arr3[0]==16)?'sixteen':
          (arr3[0]==17)?'seventeen':
          (arr3[0]==18)?'eighteen':'nineteen');
        return arr.splice(0,2);
      }  
      else {
        arr2.push((arr[0]==2)?'twenty':
          (arr[0]==3)?'thirty':
          (arr[0]==4)?'forty':
          (arr[0]==5)?'fifty':
          (arr[0]==6)?'sixty':
          (arr[0]==7)?'seventy':
          (arr[0]==8)?'eighty':'ninety');
        arr.splice(0,1);
        one();
      }
    }
  
    if (arr.length==1) {
      if (arr[0]==0) {
        return arr2[0]='zero';
      }
      else {
        one();
      }
    }
    
    else if (arr.length==2) {
      two();
    }
  
    else if (arr.length==3) {
      one();
      arr2.push('hundred');
      two();
      }
  
    return arr2.join(' ');
}
