import {formatCurrency} from '../../scripts/utils/money.js';

console. log('converts cents into dollars');
if(formatCurrency(2095) === '2095.00') {
  console.log('passed');
  
}
else{
  console.log('failed');
}
console.log('works with 0');
if(formatCurrency(2000.6) === '2001.00'){
  console.log('passed'); 
}
else{
  console.log('failed');
}
 