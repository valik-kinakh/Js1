///////////Task1////////////
let book={
    author:"Shevchenko",
    pages:100,
    genre:"fantasy"
};
function propsCount(currentObject) {
    let count=0;
   for (const i in currentObject) {
       ++count;
   }
    console.log(count);
}
propsCount(book);

///////////Task2////////////
let pearson={
    firstName:"Valik",
    lastName:"Kinakh",
    age:17,
    position:"student",
    height:168
};
function propsCount(currentObject) {
    let counter = 0;
    for (const a in currentObject) {
        counter++;
    }
    return counter;
}
function showProps(obj) {
    let arr = [];
    let arr2 = [];
    for (let i = 0; i < propsCount(obj); i++) {
        for (const a in obj) {
            arr[i] = a;
            i++;
        }
    }

    for (let i = 0; i < propsCount(obj); i++) {
        for (const a in obj) {
            arr2[i] = obj[a];
            i++;
        }

        console.log(arr);
        console.log(arr2);

    }
}
showProps(pearson);

///////////Task3////////////
let date=new Date();
class Pearson
{
    constructor(name,surname)
    {
       this.name=name;
       this.surname=surname;
    }
    showFullName()
    {
        return this.name +" "+ this.surname;
    }
}
class Student extends Pearson
{
    constructor(name,surname,middleName,yearOfEntry)
    {
        super(name,surname);
        this.middleName=middleName;
        this.yearOfEntry=yearOfEntry;
    }
    showFullName()
    {
        return this.name +" "+ this.surname+" "+this.middleName;
    }
    showCourse()
    {
       return ("Current course: "+Number(date.getFullYear()-this.yearOfEntry));
    }
}
let stud1=new Student("John","Disel","Johnson",2018);
console.log(stud1.showFullName()+"\n"+stud1.showCourse());

///////////Task4////////////
class Worker
{
    #experience=1.2;
    constructor(fullName,dayRate,workingDays)
    {
       this.fullName=fullName;
       this.dayRate=dayRate;
       this.workingDays=workingDays;
    }
    
    get experience(){
       return this.#experience;
    }
    set experience(num){
        this.#experience=num;
    }

    showSalary()
    {
        return  Number(this.dayRate*this.workingDays);
    }
    shoeSalaryWithExperience()
    {
        return Number(this.dayRate*this.workingDays*this.#experience);
    }
}
let worker1=new Worker("Ivan Ivanov",20,23);
console.log(worker1.fullName);
console.log(worker1.fullName+" salary:"+worker1.showSalary());
console.log(worker1.experience);
console.log(worker1.fullName+" salary with exp:" +worker1.shoeSalaryWithExperience());
worker1.experience=1.5;
console.log(worker1.experience);
console.log(worker1.fullName+" salary with exp:" +worker1.shoeSalaryWithExperience());
console.log(" ");

let worker2=new Worker("John Johnson",48,22);
console.log(worker2.fullName);
console.log(worker2.fullName+" salary:"+worker2.showSalary());
console.log(worker2.experience);
console.log(worker2.fullName+" salary with exp:" +worker2.shoeSalaryWithExperience());
worker2.experience=1.5;
console.log(worker2.experience);
console.log(worker2.fullName+" salary with exp:" +worker2.shoeSalaryWithExperience());
console.log(" ");

let worker3=new Worker("Greg Pan",29,23);
console.log(worker3.fullName);
console.log(worker3.fullName+" salary:"+worker3.showSalary());
console.log(worker1.experience);
console.log(worker3.fullName+" salary with exp:" +worker3.shoeSalaryWithExperience());
worker3.experience=1.5;
console.log(worker3.experience);
console.log(worker3.fullName+" salary with exp:" +worker3.shoeSalaryWithExperience());
console.log(" ");

let arr=[];
arr.push(worker1);
arr.push(worker2);
arr.push(worker3);
for (let i = 0,tmp; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-1; j++) {
        if(arr[j].shoeSalaryWithExperience()>arr[j+1].shoeSalaryWithExperience())
        {
            tmp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=tmp;
        }
    }
}
console.log("Sorted salary:");
for (let i = 0; i < arr.length; i++) {
    
    console.log(arr[i].fullName+": "+arr[i].shoeSalaryWithExperience());
}

////////////Task5//////////////
class GeometricFigure
{
    getArea(){
        return 0;
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Triangle extends GeometricFigure
{
    constructor(a,b,c)
    {
        super();
        this.a=a;
        this.b=b;
        this.c=c;
    }
    getArea()
    {
        if (this.a+this.b>this.c && this.b+this.c>this.a && this.a+this.c>this.b && this.a>0 && this.b>0 && this.c>0) {
            let p=(this.a+this.b+this.c)/2;
             const square=(p*(p-this.a)*(p-this.b)*(p-this.c))**0.5;
           return square;
        }else{
            console.log("Incorrect data!!!");
            return 0;
        }
    }

}
class Square extends GeometricFigure
{
    constructor(a)
    {
        super();
       this.a=a;
    }
    getArea()
    {
        if (this.a>0) {
            const square=this.a*this.a;
            return square;
        }else
        {
            console.log("Incorrect data!!!");
            return 0;
        }
    }

}
class Circle extends GeometricFigure
{
    constructor(r)
    {
        super();
        this.r=r;
    }
    getArea()
    {
        if (this.r>0) {
            const square=Math.PI*this.r*this.r;;
           return square;
        }else
        {
            console.log("Incorrect data!!!");
            return 0;
        }
       

    }
    
}

const figures=[new Triangle(3,4,5),new Square(3),new Circle(5)];

function handleFigure(figures) {
    let sum=0;
    for (let i = 0; i < figures.length; i++) {
        if ((figures[i] instanceof GeometricFigure)==true) {
            console.log("Geometric figure: "+figures[i].toString()+"-area:"+figures[i].getArea());
            sum+=figures[i].getArea();
        }
        
    }
    console.log("Sum of all figures="+sum);
}
handleFigure(figures);