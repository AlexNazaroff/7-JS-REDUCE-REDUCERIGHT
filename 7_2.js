var my_array=[-3,5,8,-4,20,9,-4,2];
var rezult_reduce = my_array.reduce(function(sum,current,index,arr){
 console.log('sum = ' + sum+' current = ' +current+' index ='+index+' arr ='+arr);
    return sum + current*(index+1);
    
},0);
console.log('rezult_reduce = '+rezult_reduce);

var rezult_reduce_r = my_array.reduceRight(function(sum,current,index,arr){
 console.log('sum = ' + sum+' current = ' +current+' index ='+index+' arr ='+arr);
    return sum + current*(index+1);
    
},0);
console.log('rezult_reduce_r = '+rezult_reduce_r);