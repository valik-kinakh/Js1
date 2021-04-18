
    const regExp1=/db+d/gi;
    const regExp2=/b+d/gi;
    const regExp3=/d/gi;
    let str="cdbBdbsbz";
    let arr1=str.match(regExp1);
    let arr2,arr3;
    for (let i = 0; i < arr1.length; i++) {
       arr2= arr1[i].match(regExp2);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr3=arr2[i].match(regExp3);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    for (let i = 0; i < arr3.length; i++) {
        arr1.push(arr3[i]);
    }

    console.log(arr1);;
