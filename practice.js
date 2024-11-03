
// // Consistency in results: Achieving similar outcomes under the same conditions.

// const arr =[1,2,3,4,];
// const newArr =arr.map((el)=>{
//  return   el*2});

   
// console.log(newArr);
// let promise = new promise(function(resolve,reject){
//     let goodDeveloper = true;
//     if(goodDeveloper){
//        setTimeout(()=>{
//         resolve("aftab")
//        }) 
//     }else{
//         reject('kahan')
//     }

// })
// console.log(promise)

 const printPattern =(n)=>{
    for(let i = 0;i<n;i++){
        let str ="";
        for(let j = 0;j<i;j++){
            str += " ";
        }
        for(let k =1;k<=n-i;k++){
            str +=k;
        }
        console.log(str);
    }

 }
 printPattern(5);

;
const findDuplicates =(arr)=>{
    let seen = new Set();
    let duplicate = new Set();
    for(let num of arr){
        if(seen.has(num)){
            duplicate.add(num);
        }
        else{
            seen.add(num);
        }
    }
    return [...duplicate]
}
console.log(findDuplicates([1,2,3,4,5,1,2]));