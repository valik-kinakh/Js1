const regExp=/ /;

let str="Java Script";
let arr=str.split(regExp);
let newStr="";
arr[arr.length-1]+=",";
for (let i = arr.length-1; i >=0; i--) {
   newStr+=arr[i];
}
console.log(newStr);