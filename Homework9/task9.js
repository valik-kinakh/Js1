/////////Task 1/////////
let arr=["Tom","Sam","Ray","Bob"];
let [x,y, ,...z]=arr;
console.log(x);
console.log(y);
console.log(z);

////////Task 2/////////
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 let {names:[ ,name2, ,name4] ,ages:[ ,age2, ,age4]} = data;
 console.log(name2); 
 console.log(age2); 
 console.log(name4); 
 console.log(age4); 
 
 ////////Task 3/////////
 function mul(...rest) {
    let m=1;
    let x=false;
    for (let i = 0; i < rest.length; i++) {
       if (typeof rest[i]=="number") {
           m*=rest[i];
           x=true;
       }
    }
    if (!x) {
      m=0;  
    }
    return m;
}
console.log(mul(null,"str",3,false,true));

////////Task 4/////////
let server = {
    data: 0,
    convertToString: function (callback) {
      callback(
        ()=>this.data + ""
      );
    },
  };
  let client = {
    server: server,
    result: "",
    calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
    },
    notification: function () {
      return (callback)=> this.result = callback();
    },
  };
  client.calc(123);
  console.log(client.result);
  console.log(typeof client.result);

  ////////Task 5/////////
  function mapBuilder(keys, values) {
    if (keys.length !== values.length) {
      alert("Not equal length");
    } else {
      let newMap = new Map();
      for (let i = 0; i < keys.length; i++) {
        newMap.set(keys[i], values[i]);
      }
      return newMap;
    }
  }
  
  let keys = [1, 2, 3, 4];
  let values = ["div", "span", "b", "i"];
  
  let map = mapBuilder(keys, values);
  console.log(map.size);
  console.log(map.get(2));