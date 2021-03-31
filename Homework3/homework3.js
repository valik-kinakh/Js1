//////////////Task1//////////////
let arr=[2,3,4,5],multip=1;
for (let i = 0; i < arr.length; i++) {
    multip*=arr[i];
}
console.log(multip);
multip=1;
let j=0;
while (j<arr.length) {
    multip*=arr[j];
    ++j;
}
console.log(multip);

//////////////Task2//////////////
function oddOrEven() {
    for (let index = 0; index <= 15; index++) {
        if (index%2==0) console.log(index+" is even");
        else  console.log(index+" is odd");
    }
}
oddOrEven();

//////////////Task3//////////////
let size=prompt("Enter size of array:");
let size1=parseInt(size);
function randArray( size1) {
   let arr1=[];
   console.log("Random array:");
    for (let i = 0; i < size1; i++) {
      arr1[i]=  Math.floor(Math.random()*500)+1;
        console.log(arr1[i]);
    }
}
randArray(size1);

//////////////Task4//////////////
let a=prompt("Enter first number:"),b=prompt("Enter second number:");
function raiseToDegree(a,b) {
    let result=Math.pow(a,b);
    console.log("Result="+result);
}
raiseToDegree(a,b);

//////////////Task5//////////////
function findMin() {
    let min=arguments[0];
    for (let i = 0; i < arguments.length; i++) {
       if (arguments[i]<min) {
           min=arguments[i];
       } 
    }
    console.log("Min="+min);
}
findMin(2,0,9,-4);

//////////////Task6//////////////
let arr2=[3,4,5,1,8,3];
function findUnique(arr2) {
    let x=true;
    for (let i = 0; i < arr2.length-1; i++) {
       for (let j = i+1; j < arr2.length; j++) {
           if (arr2[i]==arr2[j]) {
               x=false;
           }
       }
        
    }
    console.log(x);
}
findUnique(arr2);

//////////////Task7//////////////

let quantity=prompt("Enter number of last elem:");
function lastElem(arr2,quantity) {
    if (quantity==undefined || quantity>arr2.length || quantity<1) {
        quantity=1;
    }

    for (let i = arr2.length-quantity; i < arr2.length; i++) {
        console.log(arr2[i]);
    }
}
lastElem(arr2,quantity);

//////////////Task8//////////////
let str=prompt("Enter a sentence below:");
function upperLetter(string) {
    String.prototype.replace;
    String.prototype.slice;
    String.prototype.charAt;
    String.prototype.split;
    String.prototype.toUpperCase;
    //використовую Reg expressions(\S-символи без пробілів  ^-початок рядка \s-після будь-якого пробілу g-глобальне співпадіння)
    return string.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    //Alternative

    // let strArray=string.split(' ');
    // let arr3=[];
    // for (let i = 0; i < strArray.length; i++) {
    //     arr3[i]=(strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1))
    // }
    // let newStr="";
    // for (let i = 0; i < arr3.length; i++) {
    //    newStr+=arr[i]+" ";
        
    // }
    // return newStr;
}
console.log(upperLetter(str));